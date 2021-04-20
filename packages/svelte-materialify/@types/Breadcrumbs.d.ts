import { SvelteComponent } from './shared';

interface BreadcrumbItem {
  disabled?: boolean;
  href?: string;
  text: string;
  class?: string;
  props?: object;
}

interface BreadcrumbsProps {
  /** classes added to the component */
  class?: string;
  /** array of objects for each breadcrumb */
  items: BreadcrumbItem[];
  /** makes the breadcrumb large */
  large?: boolean;
  /** styles to add to the breadcrumb */
  style?: string;
}

declare class Breadcrumbs extends SvelteComponent<BreadcrumbsProps> {
  $$slot_def: {
    item?: BreadcrumbItem,
  };
}

export default Breadcrumbs;
