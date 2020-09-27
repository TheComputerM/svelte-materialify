import { SvelteComponent } from './shared';
import { RippleOptions } from './Ripple';

interface ListGroupProps {
  active?: boolean;
  eager?: boolean;
  transition?: any;
  transitionOpts?: Record<string, any>;
  offset?: boolean;
  disabled?: boolean;
  ripple?: RippleOptions;
  style?: string;
}

declare class ListGroup extends SvelteComponent<ListGroupProps> {}

export default ListGroup;
