import { TransitionConfig } from 'svelte/transition';
import { SvelteComponent } from './shared';

interface SnackbarProps {
  /** absolute sets the snackbar with position absolute otherwise it is fixed */
  absolute?: boolean;
  /** active shows or hides the snackbar */
  active?: boolean;
  /** top shows the snackbar on the top side of the page */
  top?: boolean;
  /** top shows the snackbar on the left side of the page */
  left?: boolean;
  /** top shows the snackbar on the bottom side of the page */
  bottom?: boolean;
  /** top shows the snackbar on the right side of the page */
  right?: boolean;
  /** top shows the snackbar on the centered of the page */
  center?: boolean;
  /** offsetY defines the offset from the left or right side of the page */
  offsetX?: string;
  /** offsetY defines the offset from the top or bottom side of the page */
  offsetY?: string;
  /** outlined gives the snackbar a outlined style */
  outlined?: boolean;
  /** text gives the snackbar a text style */
  text?: boolean;
  /** rounded gives the snackbar a rounded style */
  rounded?: boolean;
  /** tile gives the snackbar a tile style */
  tile?: boolean;
  /** timout is the delay before the snackar hides away */
  timeout?: number;
  /** transiton function for the snackbar */
  transition?: (node: Element, options: any) => TransitionConfig;
  /** classes added to the snackbar */
  class?: string;
  /** styles added to the snackbar */
  style?: string;
}

declare class Snackbar extends SvelteComponent<SnackbarProps> {}

export default Snackbar;
