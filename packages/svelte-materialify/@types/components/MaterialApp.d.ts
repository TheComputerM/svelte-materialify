import { LocalSvelteComponent } from '../shared';

interface MaterialAppProps {
  theme?: string;
}

declare class MaterialApp extends LocalSvelteComponent<MaterialAppProps> {}

export default MaterialApp;
