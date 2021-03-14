type LocalSvelteProps = {
  children?: any;
  class?: string;
} & Record<string, any>;

/**
 * Local svelte class for adding typescript definitions for svelte components
 *
 */
export declare class SvelteComponent<Props = {}> {
  constructor(props: Props & LocalSvelteProps);
  $on<T = any>(event: string, callback: (event: CustomEvent<T>) => void): () => void;
  $$prop_def: Props & LocalSvelteProps;
  render: undefined;
  context: undefined;
  setState: undefined;
  forceUpdate: undefined;
  props: undefined;
  state: undefined;
  refs: undefined;
}
