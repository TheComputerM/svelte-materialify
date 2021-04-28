import { SvelteComponent } from './shared';

export interface ChipProps {
  /** Classes to add to checkbox wrapper. */
  class?: string;
  /** Determines whether the chip is visible or not. */
  active?: boolean;
  /** selected state */
  selected?: boolean;
  /** Specifies the size of chip. */
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large';
  /** specifies if the chip is outlined */
  outlined?: boolean;
  /** specifies if the avatar will fill the chip in height */
  pill?: boolean;
  /** determines if the chip is a link, making it clickable */
  link?: boolean;
  /** specifies if the chip is a label, making it less rounded */
  label?: boolean;
  /** determines if a close button will appear */
  close?: boolean;
}

declare class Chip extends SvelteComponent<ChipProps> {}

export default Chip;
