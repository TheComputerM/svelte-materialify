import { SvelteComponent } from './shared';
import { RippleOptions } from './Ripple';
import { TransitionConfig } from 'svelte/transition';

interface ListGroupProps {
  /** classes added to the listgroup */
  class?: string;
  /** toggle the active state */
  active?: boolean;
  /** will force the components content to render on mount */
  eager?: boolean;
  /** transition when open or close */
  transition?: (node: Element, options: any) => TransitionConfig;
  /** options for transiton */
  transitionOpts?: any;
  /** offset of the listgroup */
  offset?: boolean | string | number;
  /** disables the listgroup */
  disabled?: boolean;
  /** options for the ripple action */
  ripple?: RippleOptions;
  /** styles added to the listgroup */
  style?: string;
}

declare class ListGroup extends SvelteComponent<ListGroupProps> {}

export default ListGroup;
