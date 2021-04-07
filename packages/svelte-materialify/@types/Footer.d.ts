import { SvelteComponent } from './shared';

interface FooterProps {
  /** Classes added to the footer. */
  class?: string;

  /** Position the footer absolutely at the bottom of its parent container. */
  absolute?: boolean;

  /** Removes all default padding from the footer component. */
  paddless?: boolean;

  /** Prevent the footer from being as large as its container when the absolute prop is present. */
  inset?: boolean;

  /** Fix footer at the bottom of its parent container. */
  fixed?: boolean;

  /** Styles to add to the footer. */
  style?: string;
}

declare class Footer extends SvelteComponent<FooterProps> { }

export default Footer;
