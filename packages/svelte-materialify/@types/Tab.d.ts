import { SvelteComponent } from './shared';

export interface TabProps {
    class?: string;
    value?: any;
    activeClass?: any;
    disabled?: object;
}

declare class Tab extends SvelteComponent<TabProps> { }

export default Tab;
