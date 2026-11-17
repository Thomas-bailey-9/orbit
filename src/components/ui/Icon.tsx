import type { SVGProps } from 'react';

/**
 * Fine outline icon set: 24px grid, 1.5 stroke, rounded caps and joins.
 * Save is ALWAYS the bookmark (never a heart). Compare has its own two-arrow symbol.
 */
const paths = {
  bookmark: <path d="M7 3.75h10c.41 0 .75.34.75.75v15.8L12 16.4l-5.75 3.9V4.5c0-.41.34-.75.75-.75Z" />,
  compare: (
    <>
      <path d="M4 8h15" />
      <path d="m15.5 4.5 3.5 3.5-3.5 3.5" />
      <path d="M20 16H5" />
      <path d="M8.5 12.5 5 16l3.5 3.5" />
    </>
  ),
  'arrow-right': (
    <>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </>
  ),
  'chevron-down': <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />,
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="m20 4-8.5 8.5" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M12 11v5.5" />
      <path d="M12 7.6v.1" />
    </>
  ),
  replay: (
    <>
      <path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3" />
      <path d="M4.5 4v4h4" />
    </>
  ),
  share: (
    <>
      <path d="M12 14.5V3.5" />
      <path d="m8 7.5 4-4 4 4" />
      <path d="M5.5 12.5V19c0 .55.45 1 1 1h11c.55 0 1-.45 1-1v-6.5" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  size?: number;
  filled?: boolean;
}

export function Icon({ name, size = 20, filled = false, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
