import { SvelteComponent } from './shared';

interface ContainerProps {
  /** classes added to the container */
  class?: string;
  /** styles added to the container */
  style?: string;
  /** fluid extends the container across all viewports and device sizes*/
  fluid?: boolean;
}

declare class Container extends SvelteComponent<ContainerProps> {}

export default Container;
