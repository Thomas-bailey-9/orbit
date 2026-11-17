import { AnimatedNumber, AnimatedText } from './AnimatedValues';
import type { ValueAnimationOptions } from './useValueProgress';

type StatContent =
  | { kind: 'number'; value: number; decimals?: number; prefix?: string; unit?: string }
  | { kind: 'text'; value: string }
  | { kind: 'unavailable' };

interface StatValueProps extends ValueAnimationOptions {
  label: string;
  content: StatContent;
  /** Optional basis/footnote, e.g. "WLTP combined". */
  note?: string;
  align?: 'start' | 'center';
}

/** Label + value presentation. Units and labels stay static; only the value animates. */
export function StatValue({ label, content, note, align = 'start', ...anim }: StatValueProps) {
  return (
    <div className={`stat stat--${align}`}>
      <div className="stat__value t-stat">
        {content.kind === 'number' && (
          <>
            <AnimatedNumber value={content.value} decimals={content.decimals} prefix={content.prefix} {...anim} />
            {content.unit && <span className="stat__unit">{content.unit}</span>}
          </>
        )}
        {content.kind === 'text' && <AnimatedText text={content.value} {...anim} />}
        {content.kind === 'unavailable' && <span className="stat__unavailable">Not available</span>}
      </div>
      <div className="stat__label">{label}</div>
      {note && <div className="stat__note">{note}</div>}
    </div>
  );
}
