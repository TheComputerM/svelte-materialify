import { SvelteComponent } from './shared';

interface WindowItemProps {
  /** Classes added to the window item. */
  class?: string;

  /** Styles to add to the window item. */
  style?: string;
}

declare class WindowItem extends SvelteComponent<WindowItemProps> {}

export default WindowItem;
