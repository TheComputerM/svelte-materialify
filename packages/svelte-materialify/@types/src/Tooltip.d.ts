import { SvelteComponent } from './shared';

interface TooltipProps {
  /** classes added to the tooltip */
  class?: string;
  /** color of the tooltip when active */
  color?: string;
  /** controls whether the component is visible or hidden */
  active?: boolean;
  /** aligns the component towards the top */
  top?: boolean;
  /** aligns the component towards the bottom */
  bottom?: boolean;
  /** aligns the component towards the left */
  left?: boolean;
  /** aligns the component towards the right */
  right?: boolean;
}

declare class Tooltip extends SvelteComponent<TooltipProps> {}

export default Tooltip;
