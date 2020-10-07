import { SvelteComponent } from './shared';

export interface OverlayProps {
  /** classes added to overlay */
  class?: string;
  /** overlay is visible or not */
  active?: boolean;
  /** the opacity of the overlay */
  opacity?: number;
  /** the color of the overlay */
  color?: string;
  /** the z-index of the overlay */
  index?: number;
  /** makes the position of overlay absolute */
  absolute?: boolean;
  /** options passed to the fade transition */
  fadeOptions?: any;
  /** styles added to the overlay */
  style?: string;
}

declare class Overlay extends SvelteComponent<OverlayProps> {}

export default Overlay;
