import { DesignCheck } from '../features/design-check/DesignCheck';

/**
 * App shell. B00 renders the internal design-check screen at the root.
 * Routing (src/app/routing) arrives with the first real screens (B02/B03).
 */
export function App() {
  return <DesignCheck />;
}
