import { LocalSvelteComponent } from '../shared';

interface IconProps {
  size?: string;
  rotate?: number;
  spin?: boolean;
  disabled?: boolean;
  path?: any;
  label?: any;
  style?: string;
}

declare class Icon extends LocalSvelteComponent<IconProps> {}

export default Icon;
