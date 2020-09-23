import { SvelteComponent } from 'svelte';

declare class Card extends SvelteComponent {
  $$prop_def: {
    class?: string;
    flat?: boolean;
    tile?: boolean;
    outlined?: boolean;
    raised?: boolean;
    shaped?: boolean;
    hover?: boolean;
    link?: boolean;
    disabled?: boolean;
    style?: string;
  } & Record<string, any>;
}

export default Card;
