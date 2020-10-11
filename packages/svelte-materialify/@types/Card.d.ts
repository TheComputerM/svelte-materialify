import { SvelteComponent } from './shared';

interface CardProps {
  /** classes added to the card */
  class?: string;
  /** remove box shadow from card */
  flat?: boolean;
  /** remove border radius */
  tile?: boolean;
  /** adds a thin border */
  outlined?: boolean;
  /** makes the card more elevated */
  raised?: boolean;
  /** add border radius to opposite corners */
  shaped?: boolean;
  /** more elevation on hover */
  hover?: boolean;
  /** card with button-like functionality */
  link?: boolean;
  /** shows the linear progress bar */
  loading?: boolean;
  /** disables the card and lowers opacity */
  disabled?: boolean;
  /** styles added the card */
  style?: string;
}

declare class Card extends SvelteComponent<CardProps> {}

export default Card;
