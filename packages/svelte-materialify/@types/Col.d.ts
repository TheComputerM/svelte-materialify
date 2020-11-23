import { SvelteComponent } from 'svelte-materialify/@types/shared';

interface ColProps {
  /** cols adds class cols-true */
  cols?: boolean;
  /** sm  adds class sm-true */
  sm?: boolean;
  /** md adds class md-true */
  md?: boolean;
  /** lg  adds class lg-true */
  lg?: boolean;
  /** xl  adds class xl-true */
  xl?: boolean;
  /** offset  adds class offset-true */
  offset?: boolean;
  /** offset_sm  adds class offset_sm-true */
  offset_sm?: boolean;
  /** offset_md  adds class offset_md-true */
  offset_md?: boolean;
  /** offset_lg  adds class offset_lg-true */
  offset_lg?: boolean;
  /** offset_xl  adds class offset_xl-true */
  offset_xl?: boolean;
  /** classes added to the col */
  class?: string;
  /** styles added to the col */
  style?: string;
}

declare class Col extends SvelteComponent<ColProps> {}

export default Col;