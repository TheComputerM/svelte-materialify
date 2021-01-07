import { render } from '@testing-library/svelte';
import Breadcrumbs from '@s/components/Breadcrumbs';
import CustomDivider from './custom_divider.svelte';

function testBreadcrumbs(items = [], divider = '/', component = null) {
  const { getByRole } =
    component === null ?
      render(Breadcrumbs, { items }) :
      render(component, { Breadcrumbs, items });

  const list = getByRole('list');
  expect(list).toHaveClass('s-breadcrumbs');

  const bcItems = list.querySelectorAll('.s-breadcrumb-item');
  const dividers = list.querySelectorAll('.divider');
  const listItems = list.querySelectorAll('li');

  expect(bcItems).toHaveLength(items.length);
  expect(dividers).toHaveLength(Math.max(items.length - 1, 0));
  expect(listItems).toHaveLength(bcItems.length + dividers.length);

  bcItems.forEach((elem, idx) => {
    const item = items[idx];

    if (!item.disabled) expect(elem.href).toContain(item.href);

    expect(elem).toBeVisible();
    expect(elem).toHaveTextContent(item.text);
  });

  dividers.forEach((elem) => {
    expect(elem).toBeVisible();
    expect(elem).toHaveTextContent(divider);
  });
}

const testItems = [
  { text: 'Dashboard', href: '/components/breadcrumbs/' },
  { text: 'Link 1', href: '/components/breadcrumbs/' },
  { text: 'Link 2', disabled: true },
];

describe('Breadcrumbs', () => {
  test('renders properly', () => {
    testBreadcrumbs(testItems);
  });

  test('renders properly with custom divider', () => {
    testBreadcrumbs(testItems, '-', CustomDivider);
  });

  test('renders properly with empty items', () => {
    testBreadcrumbs();
  });
});
