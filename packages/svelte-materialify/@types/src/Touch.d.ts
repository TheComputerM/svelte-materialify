interface TouchReturn {
  destroy(): void;
}

declare function Touch(node: HTMLElement): TouchReturn;

export default Touch;
