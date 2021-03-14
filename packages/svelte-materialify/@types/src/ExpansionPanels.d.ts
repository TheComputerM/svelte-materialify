import { SvelteComponent } from './shared';

interface ExpansionPanelsProps {
  /** classes added to the ExpansionPanels */
  class?: string;

  // 0 based indices of the active panels.
  value?: number[];

  // Make multiple panels active at the same time.
  multiple?: boolean;

  // Make is necessary for at least one panel to be selected.
  mandatory?: boolean;

  // Accordion style panels.
  accordion?: boolean;

  // Make panels popout when active.
  popout?: boolean;

  // Make panels inset when active.
  inset?: boolean;

  // Remove shadow from panels.
  flat?: boolean;

  // Remove border radius from panels.
  tile?: boolean;

  // Disable all the panels.
  disabled?: boolean;

  // Styles to add to the panel container.
  style?: string;
}

declare class ExpansionPanels extends SvelteComponent<ExpansionPanelsProps> { }

export default ExpansionPanels;
