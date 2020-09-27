import { SvelteComponent } from './shared';

interface IconProps {
  size?: string;
  rotate?: number;
  spin?: boolean;
  disabled?: boolean;
  path?: any;
  label?: any;
  style?: string;
}

declare class Icon extends SvelteComponent<IconProps> {}

export default Icon;
