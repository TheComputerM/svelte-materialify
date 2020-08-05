// NOTE: original code from https://testing-library.com/docs/svelte-testing-library/example
// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.

import { render } from '@testing-library/svelte';

import Button from './button.svelte';

describe('Button', () => {
  it('exists in document', () => {
    const { getByText } = render(Button, { text: 'Hello World' });
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
