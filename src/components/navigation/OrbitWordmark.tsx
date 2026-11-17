import { useId } from 'react';
import './orbit-wordmark.css';

/**
 * Static ORBIT wordmark. The O is almost closed: a tiny upper-right gap and a thicker
 * crescent-like silver edge on the left (moon/planet). Scales with font-size.
 * The opening animation (B02) will build on this markup; do not fork it.
 */
export function OrbitMark({ className = '' }: { className?: string }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg className={`orbit-mark ${className}`.trim()} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6f7f9" />
          <stop offset="0.55" stopColor="#c3c8cd" />
          <stop offset="1" stopColor="#7f858c" />
        </linearGradient>
        <mask id={`${id}-m`}>
          <rect width="100" height="100" fill="#fff" />
          {/* Offset inner circle → thicker left edge (crescent) */}
          <circle cx="55" cy="50" r="39" fill="#000" />
          {/* Tiny intentional gap at upper right */}
          <rect x="50" y="48.4" width="52" height="3.2" fill="#000" transform="rotate(-52 50 50)" />
        </mask>
      </defs>
      <circle cx="50" cy="50" r="47" fill={`url(#${id}-g)`} mask={`url(#${id}-m)`} />
    </svg>
  );
}

interface OrbitWordmarkProps {
  className?: string;
  /** Visual size preset; the wordmark also scales with the parent font-size. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function OrbitWordmark({ className = '', size = 'md' }: OrbitWordmarkProps) {
  return (
    <span className={`orbit-wordmark orbit-wordmark--${size} ${className}`.trim()} role="img" aria-label="ORBIT">
      <OrbitMark />
      <span className="orbit-wordmark__letters" aria-hidden="true">
        RBIT
      </span>
    </span>
  );
}
