import { SvelteComponent } from './shared';

interface CardActionsProps {
  class?: string;
  style?: string;
}

declare class CardActions extends SvelteComponent<CardActionsProps> {}
export default CardActions;
