interface IntersectOptions {
  once?: boolean;
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number | number[];
}

interface IntersectReturn {
  destroy(): void;
}

declare function Intersect(node: HTMLElement, options: IntersectOptions): IntersectReturn;

export default Intersect;
