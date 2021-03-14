import { SvelteComponent } from './shared';

interface AvatarProps {
  /** classes to add to avatar */
  class?: string;
  /** height and width of the avatar. */
  size?: string | number;
  /** removes border radius */
  tile?: boolean;
  /** styles applied to the avatar */
  style?: string;
}

declare class Avatar extends SvelteComponent<AvatarProps> {}

export default Avatar;
