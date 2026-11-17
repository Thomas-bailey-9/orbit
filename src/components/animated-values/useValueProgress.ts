import { useEffect, useState } from 'react';
import { useReducedMotion } from '../../utilities/useReducedMotion';

/** Gentle ease-out used for every animated value. */
export const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export interface ValueAnimationOptions {
  /** Total duration in ms (approved range ~1000–1500). */
  duration?: number;
  /** Stagger delay in ms. */
  delay?: number;
  /** Change this to replay; values do NOT replay on ordinary re-renders. */
  playKey?: string | number;
  /** Set false to render the final value without animating. */
  animate?: boolean;
  /** Hold at zero until true (e.g. until the value first scrolls into view). */
  active?: boolean;
}

/**
 * Eased 0→1 progress driven by requestAnimationFrame (which browsers pause in hidden
 * tabs). Reduced motion or animate=false returns 1 immediately.
 */
export function useValueProgress({ duration = 1200, delay = 0, playKey = 0, animate = true, active = true }: ValueAnimationOptions): number {
  const reduced = useReducedMotion();
  const skip = reduced || !animate;
  const [progress, setProgress] = useState(skip ? 1 : 0);

  useEffect(() => {
    if (skip) {
      setProgress(1);
      return;
    }
    setProgress(0);
    if (!active) return;
    let frame = 0;
    let start: number | null = null;
    const tick = (now: number) => {
      if (start === null) start = now + delay;
      const t = Math.min(1, Math.max(0, (now - start) / duration));
      setProgress(easeOutCubic(t));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [skip, active, duration, delay, playKey]);

  return progress;
}
