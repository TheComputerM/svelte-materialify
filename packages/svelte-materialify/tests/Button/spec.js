import { render, fireEvent, waitFor } from '@testing-library/svelte';
import Button from '@s/components/Button';
import html from 'svelte-htm';

describe('Button', () => {
  test('renders properly', () => {
    const { getByRole, getByText } = render(html`<${Button}>Hello World<//>`);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
    expect(button).toHaveClass('s-btn');
    expect(button).toContainElement(getByText('Hello World'));
  });

  test('ripple effect', async () => {
    const { getByRole } = render(
      html`<${Button} ripple=${{ class: 'ripple-boi' }}>Hello World<//>`,
    );
    const button = getByRole('button');

    await fireEvent.mouseDown(button);
    const ripple = button.querySelector('.ripple-boi');
    await waitFor(() => {
      expect(ripple).toBeInTheDocument();
    });

    expect(ripple).toBeVisible();
  });

  test('style', () => {
    const { container } = render(Button, { style: 'display: none;' });

    const button = container.querySelector('.s-btn');

    expect(button).toHaveStyle({ display: 'none' });
  });

  test('on:click when clicked', async () => {
    const mock = jest.fn();
    const { getByRole } = render(html`<${Button} on:click=${mock}>Hello World<//>`);
    const button = getByRole('button');

    expect(mock).not.toBeCalled();

    await fireEvent.click(button);

    expect(mock).toBeCalled();
  });
});
