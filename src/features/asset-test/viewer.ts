/**
 * B01 technical test viewer — NOT the production showroom (B07+).
 * Loads the optimised test GLB, supports drag rotation, temporary paint swaps and a
 * headlight inner→outer trace driven by a shader mask (no remodelling).
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

/** Paint materials identified in B01 inspection (body shell + door shuts). */
const PAINT_MATERIALS = ['body_color', 'exterior_body'];
const HEADLIGHT_MATERIAL = 'emit_headlights';

export interface ViewerStats {
  loadMs: number;
  bytes: number;
  triangles: number;
  drawCalls: number;
  fps: number;
  pixelRatio: number;
  renderer: string;
}

export interface ViewerCallbacks {
  onProgress?: (fraction: number | null) => void;
  onReady?: () => void;
  onError?: (message: string) => void;
  onStats?: (stats: ViewerStats) => void;
}

export class TestViewer {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(30, 1, 0.1, 500);
  private controls: OrbitControls;
  private composer: EffectComposer;
  private bloom: UnrealBloomPass;
  private paints: THREE.MeshPhysicalMaterial[] = [];
  private headlight: THREE.MeshStandardMaterial | null = null;
  private headlightBase = 1;
  private traceUniform = { value: 1 };
  private lightsOn = true;
  private traceStart = -1;
  private bytes = 0;
  private loadMs = 0;
  private frames = 0;
  private fpsWindow = performance.now();
  private fps = 0;
  private resizeObserver: ResizeObserver;
  private disposed = false;

  constructor(private host: HTMLElement, private cb: ViewerCallbacks = {}) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    // Cap DPR: phones at 3x cost far more than they gain visually.
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.info.autoReset = false; // count the whole composer frame
    host.appendChild(this.renderer.domElement);
    this.renderer.domElement.setAttribute('aria-hidden', 'true');

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.85;
    this.scene.background = new THREE.Color('#0b0c0e');

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.enablePan = false;
    this.controls.enableZoom = false; // Wheel must scroll the page (approved rule); zoom is out of scope here.
    this.controls.minPolarAngle = THREE.MathUtils.degToRad(55);
    this.controls.maxPolarAngle = THREE.MathUtils.degToRad(88);

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.45, 0.25, 2.2);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(host);
    this.resize();
    this.renderer.setAnimationLoop(this.tick);
  }

  load(url: string) {
    const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
    loader.load(
      url,
      (gltf) => {
        if (this.disposed) return;
        this.loadMs = Math.round(performance.now()); // time from page start to model ready
        this.prepare(gltf.scene);
        this.cb.onReady?.();
      },
      (e) => {
        this.bytes = e.total || e.loaded;
        this.cb.onProgress?.(e.total ? e.loaded / e.total : null);
      },
      (err) => this.cb.onError?.(err instanceof Error ? err.message : 'The test model could not be loaded.'),
    );
  }

  private prepare(root: THREE.Object3D) {
    this.scene.add(root);
    root.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3());
    const centre = box.getCenter(new THREE.Vector3());

    // Satin floor: soft radial reflection-like glow under the car.
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const g = c.getContext('2d')!;
    const grad = g.createRadialGradient(128, 128, 10, 128, 128, 128);
    grad.addColorStop(0, 'rgba(210,214,219,0.22)');
    grad.addColorStop(0.55, 'rgba(160,165,170,0.06)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 256, 256);
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(size.x * 1.6, size.x * 1.6),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(centre.x, box.min.y + 0.01, centre.z);
    this.scene.add(floor);

    const seen = new Set<THREE.Material>();
    let latMin = Infinity;
    let latMax = 0;
    root.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh) return;
      const mat = mesh.material as THREE.MeshStandardMaterial;
      if (mat.name === HEADLIGHT_MATERIAL) {
        // World-space lateral (z) extent of the light guides for the trace mask.
        const pos = mesh.geometry.getAttribute('position');
        const v = new THREE.Vector3();
        for (let i = 0; i < pos.count; i++) {
          v.fromBufferAttribute(pos, i).applyMatrix4(mesh.matrixWorld);
          const lat = Math.abs(v.z - centre.z);
          latMin = Math.min(latMin, lat);
          latMax = Math.max(latMax, lat);
        }
      }
      if (seen.has(mat)) return;
      seen.add(mat);
      if (PAINT_MATERIALS.includes(mat.name)) this.paints.push(mat as THREE.MeshPhysicalMaterial);
      if (mat.name === HEADLIGHT_MATERIAL) this.headlight = mat;
    });

    if (this.headlight) this.installTrace(this.headlight, centre.z, latMin, latMax);
    this.carTarget = centre.clone().setY(box.min.y + size.y * 0.42);
    // Close-up target: the vehicle-left headlight (front = -X, left = +Z in this asset).
    this.headlightTarget.set(box.min.x + size.x * 0.035, box.min.y + size.y * 0.43, centre.z + (latMin + latMax) / 2);

    this.controls.target.copy(centre).setY(box.min.y + size.y * 0.42);
    this.radius = size.length() / 2;
    this.resetView();
  }

  private radius = 1;
  private carTarget = new THREE.Vector3();
  private headlightTarget = new THREE.Vector3();

  /** Default front three-quarter view (car front faces -X), distance fitted to the frame. */
  private defaultPosition() {
    const vFov = THREE.MathUtils.degToRad(this.camera.fov);
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * this.camera.aspect);
    const d = (this.radius * 0.6) / Math.sin(Math.min(vFov, hFov) / 2);
    const t = this.controls.target;
    const dir = new THREE.Vector3(-0.62, 0.2, 0.76).normalize();
    return t.clone().addScaledVector(dir, d);
  }

  /** Emission sweeps from the inner edge (by the grille) to the outer edge. */
  private installTrace(mat: THREE.MeshStandardMaterial, centreZ: number, inner: number, outer: number) {
    this.headlightBase = mat.emissiveIntensity || 1;
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uTrace = this.traceUniform;
      shader.uniforms.uCentreZ = { value: centreZ };
      shader.uniforms.uInner = { value: inner };
      shader.uniforms.uOuter = { value: outer };
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying float vLat;\nuniform float uCentreZ;')
        .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvLat = abs((modelMatrix * vec4(transformed, 1.0)).z - uCentreZ);');
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', '#include <common>\nvarying float vLat;\nuniform float uTrace, uInner, uOuter;')
        .replace(
          '#include <emissivemap_fragment>',
          '#include <emissivemap_fragment>\nfloat edge = mix(uInner, uOuter, uTrace);\ntotalEmissiveRadiance *= 1.0 - smoothstep(edge - 0.08, edge + 0.08, vLat);',
        );
    };
    mat.needsUpdate = true;
  }

  setPaint(hex: string) {
    for (const m of this.paints) m.color.set(hex);
  }

  setHeadlights(on: boolean) {
    this.lightsOn = on;
    this.traceStart = -1;
    this.traceUniform.value = on ? 1 : 0;
  }

  /** Inspection aid: freeze the trace at a fixed progress (0–1). null resumes normal behaviour. */
  traceHold: number | null = null;

  /** Replays the inner→outer trace (~1.0 s, eased). */
  playTrace() {
    this.lightsOn = true;
    this.traceUniform.value = 0;
    this.traceStart = performance.now();
  }

  /** Close view of one headlight for checking the trace. */
  focusHeadlight() {
    this.controls.target.copy(this.headlightTarget);
    const dir = new THREE.Vector3(-0.78, 0.12, 0.62).normalize();
    this.camera.position.copy(this.headlightTarget).addScaledVector(dir, this.radius * 0.42);
    this.controls.update();
  }

  resetView() {
    if (this.carTarget.lengthSq() > 0) this.controls.target.copy(this.carTarget);
    this.camera.position.copy(this.defaultPosition());
    this.controls.update();
  }

  private resize() {
    const w = this.host.clientWidth;
    const h = this.host.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.composer.setSize(w, h);
    this.bloom.resolution.set(w / 2, h / 2);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  private tick = (now: number) => {
    if (this.traceHold !== null) this.traceUniform.value = this.traceHold;
    else if (this.traceStart >= 0) {
      const t = Math.min(1, (now - this.traceStart) / 1000);
      this.traceUniform.value = 1 - Math.pow(1 - t, 3);
      if (t >= 1) this.traceStart = -1;
    }
    if (this.headlight) this.headlight.emissiveIntensity = this.lightsOn ? this.headlightBase : 0;
    this.controls.update();
    this.renderer.info.reset();
    this.composer.render();

    this.frames++;
    if (now - this.fpsWindow >= 1000) {
      this.fps = Math.round((this.frames * 1000) / (now - this.fpsWindow));
      this.frames = 0;
      this.fpsWindow = now;
      const info = this.renderer.info.render;
      const gl = this.renderer.getContext();
      const dbg = gl.getExtension('WEBGL_debug_renderer_info');
      this.cb.onStats?.({
        loadMs: this.loadMs,
        bytes: this.bytes,
        triangles: info.triangles,
        drawCalls: info.calls,
        fps: this.fps,
        pixelRatio: this.renderer.getPixelRatio(),
        renderer: dbg ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : 'unknown',
      });
    }
  };

  dispose() {
    this.disposed = true;
    this.renderer.setAnimationLoop(null);
    this.resizeObserver.disconnect();
    this.controls.dispose();
    this.renderer.dispose();
    this.host.removeChild(this.renderer.domElement);
  }
}
