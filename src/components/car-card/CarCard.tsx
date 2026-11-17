import { useState, type ReactNode } from 'react';
import { Button } from '../ui/controls';
import './car-card.css';

export interface CarCardImage {
  src: string;
  alt: string;
}

export interface CarCardProps {
  /** Small line above the name, e.g. brand name or "Layout sample". */
  eyebrow: string;
  /** Actual model/version name — keep manufacturer styling as given. */
  name: string;
  description: string;
  powertrainLabel: string;
  priceLabel: ReactNode;
  /** null → stable shaded placeholder; load failure also falls back to it. */
  image: CarCardImage | null;
  placeholderLabel?: string;
  /** Last-viewed / emphasised card. */
  highlighted?: boolean;
  saved: boolean;
  onToggleSave: () => void;
  onExplore?: () => void;
  onCompare?: () => void;
  /** Short caption under actions, e.g. why actions are unavailable. */
  footnote?: string;
  headingLevel?: 2 | 3;
}

/**
 * Shared car card used by model selection (B04) and Browse all cars (B05).
 * Explore/Compare render disabled when no handler is supplied.
 */
export function CarCard({
  eyebrow,
  name,
  description,
  powertrainLabel,
  priceLabel,
  image,
  placeholderLabel = 'Image to be confirmed',
  highlighted,
  saved,
  onToggleSave,
  onExplore,
  onCompare,
  footnote,
  headingLevel = 3,
}: CarCardProps) {
  const [failed, setFailed] = useState(false);
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  const showImage = image && !failed;

  return (
    <article className={`car-card${highlighted ? ' car-card--highlighted' : ''}`}>
      <div className="car-card__media">
        {showImage ? (
          <img className="car-card__img" src={image.src} alt={image.alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
        ) : (
          <div className="car-card__placeholder" role="img" aria-label={placeholderLabel}>
            <span className="car-card__placeholder-label">{placeholderLabel}</span>
          </div>
        )}
      </div>

      <div className="car-card__body">
        <p className="car-card__eyebrow">{eyebrow}</p>
        <Heading className="car-card__name">{name}</Heading>
        <p className="car-card__desc">{description}</p>

        <dl className="car-card__meta">
          <div>
            <dt className="visually-hidden">Powertrain</dt>
            <dd>{powertrainLabel}</dd>
          </div>
          <div>
            <dt className="visually-hidden">Indicative price</dt>
            <dd className="t-num">{priceLabel}</dd>
          </div>
        </dl>

        <div className="car-card__actions">
          <Button variant="primary" iconEnd="arrow-right" className="car-card__explore" onClick={onExplore} disabled={!onExplore}>
            Explore car
          </Button>
          <div className="car-card__secondary">
            <Button variant="quiet" icon="bookmark" iconFilled={saved} selected={saved} onClick={onToggleSave}>
              {saved ? 'Saved' : 'Save'}
            </Button>
            <span className="car-card__divider" aria-hidden="true" />
            <Button variant="quiet" icon="compare" onClick={onCompare} disabled={!onCompare}>
              Compare
            </Button>
          </div>
        </div>
        {footnote && <p className="car-card__footnote">{footnote}</p>}
      </div>
    </article>
  );
}
