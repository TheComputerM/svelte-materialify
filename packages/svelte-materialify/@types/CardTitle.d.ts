import { SvelteComponent } from './shared';

interface CardTitleProps {
  class?: string;
  style?: string;
}

declare class CardTitle extends SvelteComponent<CardTitleProps> {}
export default CardTitle;
