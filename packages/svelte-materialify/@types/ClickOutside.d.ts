interface ClickOutsideOptions {
  include?: HTMLElement[];
}

interface ClickOutsideReturn {
  destroy(): void;
}

declare function ClickOutside(
  node: HTMLElement,
  options: ClickOutsideOptions,
): ClickOutsideReturn;

export default ClickOutside;
