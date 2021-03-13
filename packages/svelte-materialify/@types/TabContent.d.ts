import { SvelteComponent } from './shared';

export interface TabContentProps {
  class?: string;
  style?: string;
}

declare class TabContent extends SvelteComponent<TabContentProps> {}

export default TabContent;
