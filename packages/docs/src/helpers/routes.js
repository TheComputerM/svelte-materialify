import { all as API } from 'svelte-materialify-api';
import {
  mdiSpeedometer,
  mdiPalette,
  mdiViewDashboard,
  mdiFunction,
  mdiBeaker,
} from '@mdi/js';

export default [
  {
    text: 'Getting Started',
    icon: mdiSpeedometer,
    open: false,
    items: [
      { text: 'Installation', href: '/getting-started/installation/' },
      { text: 'Usage', href: '/getting-started/usage/' },
      { text: 'Contributing', href: '/getting-started/contributing/' },
    ],
  },
  {
    text: 'Styles',
    icon: mdiPalette,
    open: false,
    items: [
      { text: 'CSS Reset', href: '/styles/reset/' },
      { text: 'Content', href: '/styles/content/' },
      { text: 'Colors', href: '/styles/colors/' },
      { text: 'Display Helpers', href: '/styles/display-helpers/' },
      { text: 'Border Radius', href: '/styles/border-radius/' },
      { text: 'Elevation', href: '/styles/elevation/' },
      { text: 'Flex', href: '/styles/flex/' },
      { text: 'Float', href: '/styles/float/' },
      { text: 'Typography', href: '/styles/text-and-typography/' },
    ],
  },
  {
    text: 'Components',
    icon: mdiViewDashboard,
    open: false,
    items: [
      { text: 'Material App', href: '/components/material-app/' },
      { text: 'Alerts', href: '/components/alerts/' },
      { text: 'App Bar', href: '/components/app-bar/' },
      { text: 'Avatars', href: '/components/avatars/' },
      { text: 'Breadcrumbs', href: '/components/breadcrumbs/' },
      { text: 'Buttons', href: '/components/buttons/' },
      {
        text: 'Groups',
        open: false,
        items: [
          { text: 'Button Groups', href: '/components/button-groups/' },
          { text: 'Slide Groups', href: '/components/slide-groups/' },
          { text: 'Windows', href: '/components/windows/' },
        ],
      },
      { text: 'Tabs', href: '/components/tabs/' },
      { text: 'Cards', href: '/components/cards/' },
      { text: 'Chips', href: '/components/chips/' },
      { text: 'Dialog', href: '/components/dialog/' },
      { text: 'Divider', href: '/components/divider/' },
      { text: 'Grid', href: '/components/grid/' },
      { text: 'Icons', href: '/components/icons/' },
      { text: 'Expansion Panels', href: '/components/expansion-panels/' },
      {
        text: 'Forms',
        open: false,
        items: [
          { text: 'Text Field', href: '/components/text-field/' },
          { text: 'Checkboxes', href: '/components/checkboxes/' },
          { text: 'Switches', href: '/components/switches/' },
          { text: 'Radio', href: '/components/radio/' },
        ],
      },
      { text: 'List', href: '/components/list/' },
      { text: 'Virtual Lists', href: '/components/virtual-lists/' },
      { text: 'Menus', href: '/components/menus/' },
      { text: 'Navigation Drawer', href: '/components/navigation-drawer/' },
      { text: 'Overlay', href: '/components/overlay/' },
      {
        text: 'Progress',
        open: false,
        items: [
          { text: 'Circular', href: '/components/progress-circular/' },
          { text: 'Linear', href: '/components/progress-linear/' },
        ],
      },
      { text: 'Subheader', href: '/components/subheader/' },
    ],
  },
  {
    text: 'Actions',
    icon: mdiFunction,
    open: false,
    items: [
      { text: 'Ripple', href: '/actions/ripple/' },
      { text: 'Intersection observer', href: '/actions/intersect/' },
      { text: 'Jump', href: '/actions/jump/' },
    ],
  },
  {
    text: 'API',
    icon: mdiBeaker,
    open: false,
    items: API.names.map((i) => ({ text: i, href: `/api/${i}/` })),
  },
];
