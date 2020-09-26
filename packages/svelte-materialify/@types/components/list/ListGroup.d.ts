import { LocalSvelteComponent } from '../../shared';

interface ListGroupProps {
  active?: boolean;
  eager?: boolean;
  transition?: any;
  transitionOpts?: Record<string, any>;
  offset?: boolean;
  disabled?: boolean;
  ripple?: any;
  style?: string;
}

declare class ListGroup extends LocalSvelteComponent<ListGroupProps> {}

export default ListGroup;
