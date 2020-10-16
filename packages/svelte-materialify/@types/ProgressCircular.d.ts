import { SvelteComponent } from './shared';

interface ProgressCircularProps {
  class?: string;
  indeterminate?: boolean;
  color?: string;
  rotate?: number;
  size?: number;
  value?: number;
  width?: number;
  style?: string;
}

declare class ProgressCircular extends SvelteComponent<ProgressCircularProps> {}

export default ProgressCircular;
