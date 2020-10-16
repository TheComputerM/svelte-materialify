import { SvelteComponent } from './shared';

interface ProgressCircularProps {
  class?: string;
  value?: number;
  active?: boolean;
  indeterminate?: boolean;
  height?: string;
  backgroundColor?: string;
  backgroundOpacity?: number;
  color?: string;
  buffer?: number;
  reversed?: boolean;
  stream?: boolean;
  rounded?: boolean;
  striped?: boolean;
  style?: string;
}

declare class ProgressCircular extends SvelteComponent<ProgressCircularProps> {}

export default ProgressCircular;
