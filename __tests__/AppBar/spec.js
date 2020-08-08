import { render } from '@testing-library/svelte';
import AppBar from '@s/components/AppBar';
import html from 'svelte-htm';
import SlotsAreProper from './slots_are_proper.svelte';

describe('AppBar', () => {
  test('renders properly', () => {
    const { container, getByText } = render(html`<${AppBar}>Hello<//>`);
    const appbar = container.querySelector('.s-app-bar');
    const wrapper = appbar.querySelector('.s-app-bar__wrapper');

    expect(appbar).toBeInTheDocument();
    expect(appbar).toBeVisible();
    expect(wrapper).toBeInTheDocument();
    expect(appbar).toContainElement(getByText('Hello'));
    expect(getByText('Hello')).toBeVisible();
  });

  test('slots are proper', () => {
    const { container, getByTestId } = render(SlotsAreProper, { AppBar });
    const appbar = container.querySelector('.s-app-bar');
    const title = getByTestId('title');
    const icon = getByTestId('icon');
    const extension = getByTestId('extension');

    expect(appbar).toContainElement(title);
    expect(appbar).toContainElement(icon);
    expect(appbar).toContainElement(extension);

    expect(title).toHaveTextContent('Title');
    expect(icon).toHaveTextContent('X');
    expect(extension).toHaveTextContent('Extension');
  });

  test('check heights', async () => {
    const { component, container } = render(AppBar);
    const appbar = container.querySelector('.s-app-bar');
    expect(appbar).toHaveStyle({ height: '56px' });

    await component.$set({ dense: true, prominent: false });
    expect(appbar).toHaveStyle({ height: '48px' });

    await component.$set({ dense: false, prominent: true });
    expect(appbar).toHaveStyle({ height: '128px' });
  });
});
