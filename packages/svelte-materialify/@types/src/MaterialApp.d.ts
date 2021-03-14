import { SvelteComponent } from './shared';

interface MaterialAppProps {
  /** theme for the app */
  theme?: 'light' | 'dark';
}

declare class MaterialApp extends SvelteComponent<MaterialAppProps> {}

export default MaterialApp;
