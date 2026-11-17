import { useEffect, useRef, useState } from 'react';
import { OrbitWordmark } from '../../components/navigation/OrbitWordmark';
import { Button, GlassPanel, SwatchGroup, Toggle } from '../../components/ui/controls';
import { TestViewer, type ViewerStats } from './viewer';
import { testAsset, testPaints } from './fixtures';
import './asset-test.css';

/**
 * B01 isolated technical test page. Not the showroom and not a production car.
 * Delete or move this feature once B07 replaces it.
 */
export function AssetTest() {
  const hostRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<TestViewer | null>(null);
  const [progress, setProgress] = useState<number | null>(0);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paint, setPaint] = useState<string>(testPaints[1]!.id);
  const [lights, setLights] = useState(true);
  const [stats, setStats] = useState<ViewerStats | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const v = new TestViewer(host, {
      onProgress: setProgress,
      onReady: () => setReady(true),
      onError: setError,
      onStats: setStats,
    });
    viewerRef.current = v;
    // Inspection aid for the B01 review: ?traceAt=0.4 freezes the headlight trace at 40 %.
    const hold = new URLSearchParams(window.location.search).get('traceAt');
    if (hold !== null && !Number.isNaN(Number(hold))) v.traceHold = Math.min(1, Math.max(0, Number(hold)));
    v.load(`${import.meta.env.BASE_URL}${testAsset.path}`);
    return () => v.dispose();
  }, []);

  useEffect(() => {
    const hex = testPaints.find((p) => p.id === paint)?.hex;
    if (ready && hex) viewerRef.current?.setPaint(hex);
  }, [paint, ready]);

  return (
    <div className="at">
      <header className="at-header">
        <OrbitWordmark size="sm" />
        <span className="at-header__divider" aria-hidden="true" />
        <span className="at-header__title">3D asset test</span>
        <span className="at-header__pill">B01 · Technical test</span>
      </header>

      <main className="at-main">
        <div className="at-intro">
          <p className="t-label">Provisional test asset — not a production car</p>
          <h1 className="t-h2">{testAsset.listingTitle}</h1>
          <p className="t-small">
            Listing identity: “{testAsset.listingIdentity}”. Previous-generation model, not mapped to a UK trim.
            No specifications or prices are shown.
          </p>
        </div>

        <div className="at-stage" ref={hostRef}>
          {!ready && !error && (
            <div className="at-loading" role="status">
              <span>Loading test model{progress !== null ? ` · ${Math.round(progress * 100)}%` : '…'}</span>
              <span className="at-loading__track"><span className="at-loading__bar" style={{ transform: `scaleX(${progress ?? 0.3})` }} /></span>
            </div>
          )}
          {error && <p className="at-error" role="alert">{error}</p>}
          {ready && <p className="at-hint" aria-hidden="true">Drag to rotate</p>}
        </div>

        <div className="at-controls">
          <GlassPanel density="compact" className="at-panel">
            <SwatchGroup
              legend="Temporary test paint"
              options={testPaints.map((p) => ({ id: p.id, name: p.name, preview: p.preview }))}
              value={paint}
              onChange={setPaint}
            />
          </GlassPanel>
          <GlassPanel density="compact" className="at-panel at-panel--actions">
            <p className="at-panel__label">Headlights</p>
            <div className="at-row">
              <Toggle label={lights ? 'Lights on' : 'Lights off'} checked={lights} disabled={!ready} onChange={(on) => { setLights(on); viewerRef.current?.setHeadlights(on); }} />
              <Button variant="secondary" icon="replay" disabled={!ready} onClick={() => { setLights(true); viewerRef.current?.playTrace(); }}>
                Trace inner → outer
              </Button>
              <Button variant="quiet" disabled={!ready} onClick={() => viewerRef.current?.focusHeadlight()}>View headlight</Button>
              <Button variant="quiet" disabled={!ready} onClick={() => viewerRef.current?.resetView()}>Reset view</Button>
            </div>
          </GlassPanel>
        </div>

        <GlassPanel as="section" density="compact" className="at-stats" aria-label="Measurements on this device">
          <p className="at-panel__label">Measured on this device</p>
          <dl className="at-stats__grid t-num">
            <div><dt>File</dt><dd>{stats ? `${(stats.bytes / 1048576).toFixed(1)} MB` : '—'}</dd></div>
            <div><dt>Ready after</dt><dd>{stats ? `${(stats.loadMs / 1000).toFixed(1)} s` : '—'}</dd></div>
            <div><dt>Frame rate</dt><dd>{stats ? `${stats.fps} fps` : '—'}</dd></div>
            <div><dt>Triangles drawn</dt><dd>{stats ? stats.triangles.toLocaleString('en-GB') : '—'}</dd></div>
            <div><dt>Draw calls</dt><dd>{stats ? stats.drawCalls : '—'}</dd></div>
            <div><dt>Pixel ratio</dt><dd>{stats ? stats.pixelRatio : '—'}</dd></div>
          </dl>
          <p className="t-caption">GPU: {stats?.renderer ?? '—'}</p>
        </GlassPanel>

        <footer className="at-credit">
          <p className="t-caption">
            “{testAsset.listingTitle}” (<a href={testAsset.sourceUrl}>{testAsset.sourceUrl}</a>) by{' '}
            <a href={testAsset.creatorUrl}>{testAsset.creator}</a>, licensed under{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. Modified for ORBIT: {testAsset.changes}
          </p>
          <p className="t-caption">BMW is a trademark of its owner. ORBIT is independent and not affiliated with BMW. Temporary paint colours are illustrative.</p>
        </footer>
      </main>
    </div>
  );
}
