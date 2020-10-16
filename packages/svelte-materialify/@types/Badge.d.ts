import { SvelteComponent } from './shared';
import { TransitionConfig } from 'svelte/transition';

interface BadgeProps {
  /** classes to add to avatar */
  class?: string;
  value?: string;
  active?: boolean;
  bordered?: boolean;
  dot?: boolean;
  tile?: boolean;
  bottom?: boolean;
  left?: boolean;
  label?: string;
  transition?: (node: Element, options: any) => TransitionConfig;
  offsetX?: number | string;
  offsetY?: number | string;
  /** styles applied to the avatar */
  style?: string;
}

declare class Badge extends SvelteComponent<BadgeProps> {}

export default Badge;
