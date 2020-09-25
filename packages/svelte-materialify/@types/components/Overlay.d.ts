import { LocalSvelteComponent } from '../shared';

interface OverlayProps {
  active?: boolean;
  opacity?: number;
  color?: string;
  index?: number;
  absolute?: boolean;
  fadeOptions?: any;
  style?: string;
}

declare class Overlay extends LocalSvelteComponent<OverlayProps> {}

export default Overlay;
