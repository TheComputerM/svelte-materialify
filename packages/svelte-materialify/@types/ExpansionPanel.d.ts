import { SvelteComponent } from './shared';

interface ExpansionPanelProps {
  /** classes added to the ExpansionPanel */
  class?: string;

  // Options for the slide transition.
  slideOpts?: Object;

  // Make the panel readonly.
  readonly?: boolean;

  // Disable the panel.
  disabled?: boolean;

  // Styles to add to the panel.
  style?: string;

}

declare class ExpansionPanel extends SvelteComponent<ExpansionPanelProps> {
  $$slot_def: {
    active?: boolean,
  };
}

export default ExpansionPanel;
