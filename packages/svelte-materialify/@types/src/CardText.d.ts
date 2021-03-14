import { SvelteComponent } from './shared';

interface CardTextProps {
  class?: string;
  style?: string;
}

declare class CardText extends SvelteComponent<CardTextProps> {}
export default CardText;
