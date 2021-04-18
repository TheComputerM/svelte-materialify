import { SvelteComponent } from './shared';

interface ColProps {
  /** cols adds class cols-<number> */
  cols?: number;
  /** sm  adds class sm-<number> */
  sm?: number;
  /** md adds class md-<number> */
  md?: number;
  /** lg  adds class lg-<number> */
  lg?: number;
  /** xl  adds class xl-<number> */
  xl?: number;
  /** offset  adds class offset-<number> */
  offset?: number;
  /** offset_sm  adds class offset-sm-<number> */
  offset_sm?: number;
  /** offset_md  adds class offset-md-<number> */
  offset_md?: number;
  /** offset_lg  adds class offset-lg-<number> */
  offset_lg?: number;
  /** offset_xl  adds class offset-xl-<number> */
  offset_xl?: number;
  /** classes added to the col */
  class?: string;
  /** styles added to the col */
  style?: string;
}

declare class Col extends SvelteComponent<ColProps> {}

export default Col;
