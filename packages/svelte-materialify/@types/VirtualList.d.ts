import { SvelteComponent } from './shared';

interface VirtualListItem { text: string, subtitle?: string, items?: VirtualListItem[] }

interface VirtualListProps {
  /** Classes added to the footer. */
  class?: string;

  /** Whether the list group is opened */
  active?: boolean;

  /** List items */
  items?: VirtualListItem[];

  /** Classes to apply to the list items */
  iteClasses?: string;

  /** Depth of the list */
  depth?: number;

  /** Styles to add to the footer. */
  style?: string;

  /** Sets an offset on the element, takes the depth props as parameter */
  offsetFunction?: Function;
}

declare class VirtualList extends SvelteComponent<VirtualListProps> {
  $$slot_def: {
    item?: VirtualListItem,
  };
}

export default VirtualList;
