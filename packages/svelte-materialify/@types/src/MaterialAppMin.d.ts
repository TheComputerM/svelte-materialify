import { SvelteComponent } from './shared';

interface MaterialAppMinProps {
  /** theme for the app */
  theme?: 'light' | 'dark';
}

declare class MaterialAppMin extends SvelteComponent<MaterialAppMinProps> {}

export default MaterialAppMin;
