import { SvelteComponent } from './shared';
import { OverlayProps } from './Overlay';
import { TransitionConfig } from 'svelte/transition';

interface DialogProps {
  class?: string;
  /** controls whether the dialog is visible or hidden */
  active?: boolean;
  /** clicking outside of the dialog will not deactivate it */
  persistent?: boolean;
  /** disables the ability to open the dialog */
  disabled?: boolean;
  /** sets the width for the dialog */
  width?: string | number;
  /** changes dialog for fullscreen display */
  fullscreen?: boolean;
  /** transition of the dialog */
  transition?: (node: Element, options: any) => TransitionConfig;
  /** props for the overlay */
  overlay?: OverlayProps;
}

declare class Dialog extends SvelteComponent<DialogProps> {}

export default Dialog;
