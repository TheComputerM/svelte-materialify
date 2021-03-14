import { SvelteComponent } from './shared';

interface IconProps {
  /** classes added to the icon */
  class?: string;
  /** size of the icon */
  size?: string | number;
  /** degress by which to rotate the icon */
  rotate?: number;
  /** makes the icon spin */
  spin?: boolean;
  /** disables the icon */
  disabled?: boolean;
  /** svg path for the icon */
  path?: any;
  /** label for the icon */
  label?: any;
  /** styles added to the icon */
  style?: string;
}

declare class Icon extends SvelteComponent<IconProps> {}

export default Icon;
