interface JumpOptions {
  target?: HTMLElement;
  duration?: number;
  offset?: number;
  callback?(): void;
  easing?(): number;
}

interface JumpReturn {
  update(): void;
  destroy(): void;
}

declare function Jump(node: HTMLElement, options: JumpOptions): JumpReturn;

export default Jump;
