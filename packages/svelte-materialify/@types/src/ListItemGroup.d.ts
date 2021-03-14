import { SvelteComponent } from './shared';
import { ItemGroupProps } from './ItemGroup';

interface ListItemGroupProps extends ItemGroupProps {}

declare class ListItemGroup extends SvelteComponent<ListItemGroupProps> {}

export default ListItemGroup;
