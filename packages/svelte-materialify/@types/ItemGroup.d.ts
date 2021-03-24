import { SvelteComponent } from './shared';

export interface ItemGroupProps {
  /** classes added to item group */
  class?: string;
  /** class to add to item when active */
  activeClass?: string;
  /** value of the group */
  value?: any;
  /** allows to select multiple items */
  multiple?: boolean;
  /** makes sure atleast one item is selected */
  mandatory?: boolean;
  /** max number of selection */
  max?: number;
  /** styles added to item group */
  style?: string;
}

declare class ItemGroup extends SvelteComponent<ItemGroupProps> {}

export default ItemGroup;
