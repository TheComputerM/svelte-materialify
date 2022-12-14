import { render, cleanup } from '@testing-library/svelte';
import Tooltip from '@s/components/Tooltip';
import html from 'svelte-htm';

describe('Tooltip', () => {
  test('can destroy', () => {
    const noop = () => {};
    Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
    const { getByText } = render(
      html`<${Tooltip} top><span>activator</span><span slot="tip">tip</span><//>`,
    );
    const tip = getByText('tip');
    cleanup();
    expect(tip).not.toBeInTheDocument();
  });
});
