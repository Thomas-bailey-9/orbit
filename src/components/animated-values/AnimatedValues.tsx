import { useValueProgress, type ValueAnimationOptions } from './useValueProgress';
import './animated-values.css';

/**
 * Animated values reserve their final width (an invisible copy of the final text) so
 * layouts never jump. Screen readers receive only the final value, never each tick.
 */
function Reserved({ final, live, className = '' }: { final: string; live: string; className?: string }) {
  return (
    <span className={`anim-value ${className}`.trim()}>
      <span className="anim-value__ghost" aria-hidden="true">{final}</span>
      <span className="anim-value__live" aria-hidden="true">{live}</span>
      <span className="visually-hidden">{final}</span>
    </span>
  );
}

const formatters = new Map<number, Intl.NumberFormat>();
export function formatNumber(value: number, decimals: number): string {
  let f = formatters.get(decimals);
  if (!f) {
    f = new Intl.NumberFormat('en-GB', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    formatters.set(decimals, f);
  }
  return f.format(value);
}

interface AnimatedNumberProps extends ValueAnimationOptions {
  value: number;
  decimals?: number;
  /** e.g. "£" for prices. Static — never animated. */
  prefix?: string;
  className?: string;
}

/** Counts up from zero to the final value with gentle easing. Use for stats AND prices. */
export function AnimatedNumber({ value, decimals = 0, prefix = '', className, ...anim }: AnimatedNumberProps) {
  const p = useValueProgress(anim);
  const factor = Math.pow(10, decimals);
  const current = p >= 1 ? value : Math.round(value * p * factor) / factor;
  return <Reserved className={`t-num ${className ?? ''}`} final={prefix + formatNumber(value, decimals)} live={prefix + formatNumber(current, decimals)} />;
}

interface AnimatedTextProps extends ValueAnimationOptions {
  text: string;
  className?: string;
}

/** Types short text values (RWD, Automatic) into place. No blinking cursor. */
export function AnimatedText({ text, className, duration, ...anim }: AnimatedTextProps) {
  const p = useValueProgress({ duration: duration ?? Math.min(900, 120 + text.length * 70), ...anim });
  const shown = text.slice(0, Math.round(text.length * p));
  return <Reserved className={className} final={text} live={shown} />;
}
