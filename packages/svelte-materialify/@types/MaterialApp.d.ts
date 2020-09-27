import { SvelteComponent } from './shared';

interface MaterialAppProps {
  theme?: string;
}

declare class MaterialApp extends SvelteComponent<MaterialAppProps> {}

export default MaterialApp;
