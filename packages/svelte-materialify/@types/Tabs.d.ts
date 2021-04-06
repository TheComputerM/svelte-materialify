import { SvelteComponent } from './shared';

export interface TabsProps {
  class?: string;
  value?: number;
  centerActive?: boolean;
  showArrows?: boolean;
  fixedTabs?: boolean;
  grow?: boolean;
  centered?: boolean;
  right?: boolean;
  icons?: boolean;
  slider?: boolean;
  sliderClass?: string;
  ripple?: any;
  vertical?: boolean;
}

declare class Tabs extends SvelteComponent<TabsProps> {}

export default Tabs;
