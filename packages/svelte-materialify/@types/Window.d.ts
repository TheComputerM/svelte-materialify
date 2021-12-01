import { SvelteComponent } from './shared';

interface WindowProps {
  /** Classes added to the window. */
  class?: string;

  /** Class to add to the activated window item */
  activeClass?: string;

  /** Value of the window */
  value?: number;

  /** Whether orientation of the window is vertical. Defaults to `false`. */
  vertical?: boolean;

  /** Whether the window is reverse. Defaults to `false`. */
  reverse?: boolean;

  /** Whether the window is continuous. Defaults to `true`. */
  continuous?: boolean;
}

declare class Window extends SvelteComponent<WindowProps> {}

export default Window;
