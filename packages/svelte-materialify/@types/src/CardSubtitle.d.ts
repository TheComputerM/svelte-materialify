import { SvelteComponent } from './shared';

interface CardSubtitleProps {
  class?: string;
  style?: string;
}

declare class CardSubtitle extends SvelteComponent<CardSubtitleProps> {}
export default CardSubtitle;
