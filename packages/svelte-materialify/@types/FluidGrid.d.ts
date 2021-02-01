import { SvelteComponent } from 'svelte-materialify/@types/shared';

interface FluidGridProps {
  /** whether this is a container */
  container?: boolean;
  /** whether this is an item */
  item?: boolean;
  /** amount of grid spacing */
  spacing?: number;
  /** sets direction of grid grid */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  /** sets justification of grid items */
  justify?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  /** sets alignment of grid items */
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /** sets column size at xs-breakpoint */
  xs?: number | boolean;
  /** sets column size at sm-breakpoint */
  sm?: number | boolean;
  /** sets column size at md-breakpoint */
  md?: number | boolean;
  /** sets column size at lg-breakpoint */
  lg?: number | boolean;
  /** sets column size at xl-breakpoint */
  xl?: number | boolean;
  /** classes added to the grid */
  class?: string;
  /** styles added to the grid */
  style?: string;
}

declare class FluidGrid extends SvelteComponent<FluidGridProps> {}

export default FluidGrid;
