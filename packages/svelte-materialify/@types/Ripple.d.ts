export interface RippleOptions {
  color?: string;
  class?: string;
  opacity?: number;
  centered?: boolean;
  spreadingDuration?: string;
  spreadingDelay?: string;
  spreadingTimingFunction?: string;
  clearingDuration?: string;
  clearingDelay?: string;
  clearingTimingFunction?: string;
}

interface RippleReturn {
  update(): void;
  destroy(): void;
}

declare function Ripple(node: HTMLElement, options: RippleOptions): RippleReturn;

export default Ripple;
