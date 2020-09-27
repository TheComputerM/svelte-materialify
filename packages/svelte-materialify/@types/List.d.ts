import { SvelteComponent } from './shared';

interface ListProps {
  dense?: boolean;
  disabled?: boolean;
  flat?: boolean;
  rounded?: boolean;
  nav?: boolean;
  outlined?: boolean;
  style?: string;
}

declare class List extends SvelteComponent<ListProps> {}

export default List;
