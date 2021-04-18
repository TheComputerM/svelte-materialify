import { SvelteComponent } from './shared';

interface RowProps {
  /** dense reduces standard gutter */
  dense?: boolean;
  /** noGutters removes gutter completely */
  noGutters?: boolean;
  /** classes added to the row */
  class?: string;
  /** styles added to the row */
  style?: string;
}

declare class Row extends SvelteComponent<RowProps> {}

export default Row;
