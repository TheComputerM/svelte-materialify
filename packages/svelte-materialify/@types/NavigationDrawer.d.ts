import { SvelteComponent } from './shared';
import { TransitionConfig } from 'svelte/transition';

interface NavigationDrawerProps {
  /** classes added to the drawer */
  class?: string;
  /** width of the drawer */
  width?: string | number;
  /** sets the state of the drawer */
  active?: boolean;
  /** changes position of drawer to fixed */
  fixed?: boolean;
  /** changes position of drawer to absolute */
  absolute?: boolean;
  /** places the navigation drawer on the right */
  right?: boolean;
  /** condenses navigation drawer width */
  mini?: boolean;
  /** a clipped drawer rests under the AppBar */
  clipped?: boolean;
  /** removes the border */
  borderless?: boolean;
  /** width assigned when the mini prop is turned on */
  miniWidth?: string;
  /** height assigned when the clipped prop is turned on */
  clippedHeight?: string;
  /** transiton function for the drawer */
  transition?: (node: Element, options: any) => TransitionConfig;
  /** options for the transition */
  transitionOpts?: any;
  /** The z-index of the drawer */
  index?: number;
  /** styles added to the drawer */
  style?: string;
}

declare class NavigationDrawer extends SvelteComponent<NavigationDrawerProps> {}

export default NavigationDrawer;
