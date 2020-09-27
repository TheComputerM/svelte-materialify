import { SvelteComponent } from './shared';

interface OverlayProps {
  active?: boolean;
  opacity?: number;
  color?: string;
  index?: number;
  absolute?: boolean;
  fadeOptions?: any;
  style?: string;
}

declare class Overlay extends SvelteComponent<OverlayProps> {}

export default Overlay;
