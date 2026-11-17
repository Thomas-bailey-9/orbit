import { useState } from 'react';
import { OrbitWordmark } from '../../components/navigation/OrbitWordmark';
import { Button, GlassPanel, IconButton, Select, SwatchGroup, Toggle } from '../../components/ui/controls';
import { CarCard } from '../../components/car-card/CarCard';
import { StatValue } from '../../components/animated-values/StatValue';
import { useInViewOnce } from '../../utilities/useInViewOnce';
import { animationSamples, bodyStyleSampleOptions, illustrativeSwatches, sampleCard } from './fixtures';
import './design-check.css';

/**
 * B00 internal review screen. Self-contained so it can later move to a development-only
 * route or be deleted without touching shared components.
 */
export function DesignCheck() {
  return (
    <div className="dc">
      <a className="skip-link" href="#dc-main">Skip to content</a>
      <header className="dc-header">
        <OrbitWordmark size="sm" />
        <span className="dc-header__divider" aria-hidden="true" />
        <span className="dc-header__title">Foundation preview</span>
        <span className="dc-header__pill">B00 · Internal review</span>
      </header>

      <main id="dc-main" className="dc-main">
        <div className="dc-intro">
          <p className="t-label">Design check</p>
          <h1 className="t-h1">ORBIT — Foundation preview</h1>
          <p className="t-lead">Shared typography, glass, controls, card layout and value animation for review on phone and laptop. Not the public homepage.</p>
        </div>

        <IdentitySection />
        <div className="dc-grid">
          <ControlsSection />
          <PaintSection />
        </div>
        <div className="dc-grid dc-grid--card">
          <CardSection />
          <AnimationSection />
        </div>
        <StatusSection />
      </main>

      <footer className="dc-footer">
        <OrbitWordmark size="sm" />
        <p className="t-caption">Independent car discovery · Unfinished preview, hidden from search engines.</p>
      </footer>
    </div>
  );
}

function SectionHeading({ id, letter, title, note }: { id: string; letter: string; title: string; note?: string }) {
  return (
    <div className="dc-section-head">
      <p className="t-label">{letter}</p>
      <h2 className="t-h2" id={id}>{title}</h2>
      {note && <p className="t-small">{note}</p>}
    </div>
  );
}

/* A. Identity and typography */
function IdentitySection() {
  return (
    <GlassPanel as="section" aria-labelledby="dc-a" className="dc-section">
      <div className="dc-section-head">
        <p className="t-label">A</p>
        <h2 className="t-h2" id="dc-a">Identity and typography</h2>
      </div>

      <div className="dc-identity">
        <OrbitWordmark size="xl" />
        <p className="dc-identity__tagline t-tagline">Every angle. Your next drive.</p>
      </div>

      <div className="dc-type">
        <div className="dc-type__samples">
          <p className="t-display">Find your next perspective.</p>
          <p className="t-h2">Explore the collection.</p>
          <p className="t-h3">Section heading</p>
          <p className="t-body">Body text is regular weight, set for comfortable reading on smoked glass and charcoal backgrounds.</p>
          <p className="t-small">Small text for supporting information and captions.</p>
          <p className="t-label">Small label · Uppercase</p>
          <p className="dc-type__font t-caption">Manrope (variable 200–800), SIL Open Font License, bundled locally.</p>
        </div>

        <div className="dc-numbers" aria-label="Numeric typography samples">
          <p className="t-label">Numeric samples — fictional</p>
          <table className="dc-numbers__table t-num">
            <tbody>
              <tr><th scope="row">Light 300</th><td style={{ fontWeight: 300 }}>0123456789</td></tr>
              <tr><th scope="row">Regular 400</th><td style={{ fontWeight: 400 }}>0123456789</td></tr>
              <tr><th scope="row">Medium 500</th><td style={{ fontWeight: 500 }}>0123456789</td></tr>
            </tbody>
          </table>
          <div className="dc-numbers__aligned t-num" aria-label="Tabular alignment sample">
            <span>£11,111</span>
            <span>£48,250</span>
            <span>£107,980</span>
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}

/* B. Glass and controls */
function ControlsSection() {
  const [saved, setSaved] = useState(false);
  const [details, setDetails] = useState(true);
  const [bodyStyle, setBodyStyle] = useState('all');
  const [selected, setSelected] = useState<'soft' | 'bright'>('soft');
  const bodyLabel = bodyStyleSampleOptions.find((o) => o.value === bodyStyle)?.label;

  return (
    <GlassPanel as="section" aria-labelledby="dc-b" className="dc-section">
      <div className="dc-section-head">
        <p className="t-label">B</p>
        <h2 className="t-h2" id="dc-b">Glass and controls</h2>
        <p className="t-small">Use Tab to see the keyboard focus ring on every control.</p>
      </div>

      <div className="dc-stack">
        <div>
          <p className="dc-sub">Buttons</p>
          <div className="dc-row">
            <Button variant="primary" iconEnd="arrow-right">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="quiet">Quiet</Button>
          </div>
        </div>

        <div>
          <p className="dc-sub">States</p>
          <div className="dc-row" role="group" aria-label="Selected state example">
            <Button variant="secondary" selected={selected === 'soft'} onClick={() => setSelected('soft')}>Soft light</Button>
            <Button variant="secondary" selected={selected === 'bright'} onClick={() => setSelected('bright')}>Bright light</Button>
          </div>
          <div className="dc-row">
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="secondary" disabled>Disabled</Button>
          </div>
          <p className="t-caption">Selected uses a brighter fill and outline. Disabled is dimmed with a dashed outline on primary.</p>
        </div>

        <div>
          <p className="dc-sub">Icons with labels</p>
          <div className="dc-row">
            <IconButton icon="bookmark" label={saved ? 'Saved' : 'Save'} selected={saved} onClick={() => setSaved((v) => !v)} />
            <IconButton icon="compare" label="Compare" />
            <IconButton icon="share" label="Share" />
            <IconButton icon="info" label="Price information" hideLabel />
          </div>
          <p className="t-caption">Save is always a bookmark. Compare has its own symbol. Icon-only controls keep an accessible name.</p>
        </div>

        <div className="dc-row dc-row--controls">
          <div>
            <p className="dc-sub">Toggle</p>
            <Toggle label={details ? 'Details on' : 'Details off'} checked={details} onChange={setDetails} />
          </div>
          <div className="dc-select">
            <Select label="Body style" options={bodyStyleSampleOptions} value={bodyStyle} onChange={(e) => setBodyStyle(e.target.value)} />
            <p className="t-caption" aria-live="polite">Showing: {bodyLabel}</p>
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}

/* C. Paint selector */
function PaintSection() {
  const [colour, setColour] = useState(illustrativeSwatches[0]!.id);
  const current = illustrativeSwatches.find((s) => s.id === colour);

  return (
    <GlassPanel as="section" aria-labelledby="dc-c" className="dc-section">
      <div className="dc-section-head">
        <p className="t-label">C</p>
        <h2 className="t-h2" id="dc-c">Paint selector</h2>
        <p className="t-small">Illustrative colours. No vehicle recolouring or camera movement in B00.</p>
      </div>

      <GlassPanel density="compact" className="dc-paint">
        <SwatchGroup legend="Paint finish" options={illustrativeSwatches} value={colour} onChange={setColour} />
      </GlassPanel>
      <p className="dc-paint__current" aria-live="polite">
        Selected finish: <strong>{current?.name}</strong>
      </p>
      <p className="t-caption">Selected = fine white ring with a small silver dot beneath the name. No tick covers the paint.</p>
    </GlassPanel>
  );
}

/* D. Example car card */
function CardSection() {
  const [saved, setSaved] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

  return (
    <section aria-labelledby="dc-d" className="dc-section dc-section--plain">
      <SectionHeading id="dc-d" letter="D" title="Example car card" note="Layout sample. Real cars, photos and prices arrive with verified data." />
      <div className="dc-card">
        <CarCard
          {...sampleCard}
          image={null}
          placeholderLabel="Photo placeholder"
          highlighted={highlighted}
          saved={saved}
          onToggleSave={() => setSaved((v) => !v)}
          footnote="Preview only: Explore and Compare arrive in later batches. Save is screen-only here."
        />
      </div>
      <Toggle label="Highlight as last viewed" checked={highlighted} onChange={setHighlighted} />
    </section>
  );
}

/* E. Value-animation sample */
function AnimationSection() {
  const [playKey, setPlayKey] = useState(0);
  const [ref, seen] = useInViewOnce<HTMLDivElement>();
  const { number, price, text } = animationSamples;

  return (
    <GlassPanel as="section" aria-labelledby="dc-e" className="dc-section">
      <div className="dc-section-head">
        <p className="t-label">E</p>
        <h2 className="t-h2" id="dc-e">Value animation</h2>
        <p className="dc-warning">Animation samples — not vehicle specifications</p>
      </div>

      <div className="dc-stats" ref={ref}>
        <StatValue label={number.label} content={{ kind: 'number', value: number.value, decimals: number.decimals, unit: number.unit }} playKey={playKey} active={seen} />
        <StatValue label={price.label} content={{ kind: 'number', value: price.value, prefix: '£' }} playKey={playKey} active={seen} delay={120} />
        <StatValue label={text.label} content={{ kind: 'text', value: text.value }} playKey={playKey} active={seen} delay={240} />
        <StatValue label="Missing value" content={{ kind: 'unavailable' }} />
      </div>

      <div className="dc-row">
        <Button variant="secondary" icon="replay" onClick={() => setPlayKey((k) => k + 1)}>
          Replay samples
        </Button>
      </div>
      <p className="t-caption">About 1.2 s with gentle easing. Widths are reserved so nothing shifts. Reduced motion shows final values immediately; screen readers get final values only.</p>
    </GlassPanel>
  );
}

/* F. Status */
function StatusSection() {
  return (
    <GlassPanel as="section" aria-labelledby="dc-f" className="dc-section">
      <div className="dc-section-head">
        <p className="t-label">F</p>
        <h2 className="t-h2" id="dc-f">Status</h2>
      </div>
      <div className="dc-status">
        <div>
          <h3 className="t-h3">Included in B00</h3>
          <ul className="dc-list">
            <li>Design tokens, Manrope typography, glass and controls</li>
            <li>Static ORBIT wordmark</li>
            <li>Reusable car card, swatches and value animation</li>
            <li>Typed car-data contract and three brand records</li>
            <li>Project documentation and GitHub Pages deployment</li>
          </ul>
        </div>
        <div>
          <h3 className="t-h3">Not built yet</h3>
          <ul className="dc-list dc-list--muted">
            <li>Opening animation (B02) and brand selection (B03)</li>
            <li>Model selection and browsing (B04–B05)</li>
            <li>Loader, 3D viewer, headlights and reveal (B06–B09)</li>
            <li>Showroom controls, paint, details, exterior, interior (B10–B14)</li>
            <li>Specifications, comparison, saved cars, sharing (B15–B19)</li>
            <li>Production car data and verified assets</li>
          </ul>
        </div>
      </div>
    </GlassPanel>
  );
}
