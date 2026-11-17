import { useId, type ButtonHTMLAttributes, type ElementType, type ReactNode, type SelectHTMLAttributes } from 'react';
import { Icon, type IconName } from './Icon';
import './ui.css';

/* ---------- GlassPanel ---------- */

interface GlassPanelProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  /** Comfortable (default) or compact inner spacing. */
  density?: 'comfortable' | 'compact';
  [key: string]: unknown;
}

export function GlassPanel({ as: Tag = 'div', className = '', density = 'comfortable', children, ...rest }: GlassPanelProps) {
  return (
    <Tag className={`glass-panel glass-panel--${density} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------- Button ---------- */

export type ButtonVariant = 'primary' | 'secondary' | 'quiet';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: IconName;
  iconFilled?: boolean;
  iconEnd?: IconName;
  /** Renders aria-pressed and the selected appearance (for toggle-like buttons). */
  selected?: boolean;
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  icon,
  iconFilled,
  iconEnd,
  selected,
  fullWidth,
  className = '',
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`btn btn--${variant}${fullWidth ? ' btn--full' : ''} ${className}`.trim()}
      aria-pressed={selected === undefined ? undefined : selected}
      {...rest}
    >
      {icon && <Icon name={icon} filled={iconFilled} size={18} />}
      <span className="btn__label">{children}</span>
      {iconEnd && <Icon name={iconEnd} size={18} className="btn__icon-end" />}
    </button>
  );
}

/* ---------- IconButton ---------- */

interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: IconName;
  /** Accessible name. Shown as a short visible label unless hideLabel is set. */
  label: string;
  hideLabel?: boolean;
  selected?: boolean;
  iconFilled?: boolean;
}

export function IconButton({ icon, label, hideLabel, selected, iconFilled, className = '', type = 'button', ...rest }: IconButtonProps) {
  return (
    <button
      type={type}
      className={`icon-btn${hideLabel ? ' icon-btn--bare' : ''} ${className}`.trim()}
      aria-label={hideLabel ? label : undefined}
      title={hideLabel ? label : undefined}
      aria-pressed={selected === undefined ? undefined : selected}
      {...rest}
    >
      <Icon name={icon} filled={iconFilled ?? selected} size={20} />
      {!hideLabel && <span className="icon-btn__label">{label}</span>}
    </button>
  );
}

/* ---------- Toggle (switch) ---------- */

interface ToggleProps {
  label: string;
  checked: boolean;
  onChange: (next: boolean) => void;
  disabled?: boolean;
}

export function Toggle({ label, checked, onChange, disabled }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className="toggle"
      onClick={() => onChange(!checked)}
    >
      <span className="toggle__label">{label}</span>
      <span className="toggle__track" aria-hidden="true">
        <span className="toggle__thumb" />
      </span>
    </button>
  );
}

/* ---------- Select (native) ---------- */

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label: string;
  options: ReadonlyArray<{ value: string; label: string }>;
}

export function Select({ label, options, className = '', id, ...rest }: SelectProps) {
  const autoId = useId();
  const selectId = id ?? autoId;
  return (
    <div className={`select ${className}`.trim()}>
      <label className="select__label" htmlFor={selectId}>
        {label}
      </label>
      <div className="select__field">
        <select id={selectId} className="select__control" {...rest}>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <Icon name="chevron-down" size={18} className="select__chevron" />
      </div>
    </div>
  );
}

/* ---------- Colour swatches (radio group) ---------- */

export interface SwatchOption {
  id: string;
  name: string;
  /** Any CSS background used to preview the paint. */
  preview: string;
}

interface SwatchGroupProps {
  legend: string;
  options: ReadonlyArray<SwatchOption>;
  value: string;
  onChange: (id: string) => void;
  hideLegend?: boolean;
}

/**
 * Round labelled swatches. Selected = fine white ring + small silver dot UNDER the name.
 * Never a tick over the paint sample.
 */
export function SwatchGroup({ legend, options, value, onChange, hideLegend }: SwatchGroupProps) {
  const name = useId();
  return (
    <fieldset className="swatches">
      <legend className={hideLegend ? 'visually-hidden' : 'swatches__legend'}>{legend}</legend>
      <div className="swatches__row">
        {options.map((o) => (
          <label key={o.id} className="swatch">
            <input
              type="radio"
              className="swatch__input"
              name={name}
              value={o.id}
              checked={o.id === value}
              onChange={() => onChange(o.id)}
            />
            <span className="swatch__ring" aria-hidden="true">
              <span className="swatch__paint" style={{ background: o.preview }} />
            </span>
            <span className="swatch__name">{o.name}</span>
            <span className="swatch__dot" aria-hidden="true" />
          </label>
        ))}
      </div>
    </fieldset>
  );
}
