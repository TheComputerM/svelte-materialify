import { SvelteComponent } from './shared';

export interface TabsContentProps {
    class?: string;
    style?: object;
}


declare class TabsContent extends SvelteComponent<TabsContentProps> { }

export default TabsContent;