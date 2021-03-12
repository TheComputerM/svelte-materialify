import { SvelteComponent } from './shared';

export interface TabProps {
  class?: string;
  value?: any;
  activeClass?: string;
  disabled?: boolean;
}

declare class Tab extends SvelteComponent<TabProps> {}

export default Tab;
