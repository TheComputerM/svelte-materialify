import { SvelteComponent } from 'svelte-materialify/@types/shared';

interface ColProps {
<<<<<<< HEAD
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
=======
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
>>>>>>> 328f231d28203ed4df50999b5c772f38862b73a6
  /** classes added to the col */
  class?: string;
  /** styles added to the col */
  style?: string;
}

declare class Col extends SvelteComponent<ColProps> {}

export default Col;