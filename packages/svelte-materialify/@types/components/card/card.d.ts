import { LocalSvelteComponent } from '../../shared';

interface CardProps {
  flat?: boolean;
  tile?: boolean;
  outlined?: boolean;
  raised?: boolean;
  shaped?: boolean;
  hover?: boolean;
  link?: boolean;
  disabled?: boolean;
  style?: string;
}

declare class Card extends LocalSvelteComponent<CardProps> {}

export default Card;
