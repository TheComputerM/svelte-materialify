import { SvelteComponent } from './shared';
import { TransitionConfig } from 'svelte/transition';

interface AlertProps {
  /** classes added to the alert */
  class?: string;
  /** is the alert active/dismissed. */
  visible?: boolean;
  /** the transition for the alert */
  transition?: (node: Element, options: any) => TransitionConfig;
  /** transition options */
  transitionOpts?: any;
  /** makes the alert dense */
  dense?: boolean;
  /** adds a thin outline */
  outlined?: boolean;
  /** applies the defined color to text and a low opacity background of the same */
  text?: boolean;
  /** removes the border radius */
  tile?: boolean;
  /** adds a close icon that can hide the alert */
  dismissible?: boolean;
  /** location of the border */
  border?: 'left' | 'right' | 'top' | 'bottom' | false;
  /** applies the defined color to the alert's border */
  coloredBorder?: boolean;
}

declare class Alert extends SvelteComponent<AlertProps> {}

export default Alert;
