import { render, fireEvent } from '@testing-library/svelte';
import Alert from '@s/components/Alert';
import html from 'svelte-htm';

describe('Alert', () => {
  test('renders properly', () => {
    const { getByRole, getByText } = render(html`<${Alert}>Warning<//>`);
    const alert = getByRole('alert');

    expect(alert).toBeInTheDocument();
    expect(alert).toBeVisible();
    expect(alert).toHaveClass('s-alert');
    expect(alert).toContainElement(getByText('Warning'));
  });

  test('border renders', () => {
    const { getByRole } = render(html`<${Alert} border='top'>Border<//>`);
    const alert = getByRole('alert');
    const border = alert.querySelector('.s-alert__border');

    expect(border).toBeVisible();
    expect(border).toHaveClass('border-top');
  });

  test('closes when close button clicked', async () => {
    const mock = jest.fn();
    const { getByRole } = render(html`<${Alert} on:dismiss=${mock} dismissible>Bye Bye<//>`);
    const alert = getByRole('alert');
    const dismissBtn = getByRole('button');

    expect(dismissBtn).toBeInTheDocument();
    expect(mock).not.toBeCalled();

    await fireEvent.click(dismissBtn);

    expect(alert).not.toBeInTheDocument();
  });
});
