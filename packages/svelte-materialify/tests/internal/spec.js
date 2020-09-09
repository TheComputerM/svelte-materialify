import Class from '@s/internal/Class';

describe('internal actions', () => {
  test('Class', () => {
    document.body.appendChild(document.createElement('div'));

    const div = document.querySelector('div');
    const { classList } = div;

    const initial = [true && 'a', false && 'b'];
    const { update } = Class(div, initial);
    expect(classList.contains('a')).toBe(true);

    update([true && 'a', true && 'b']);
    expect(classList.contains('a')).toBe(true);
    expect(classList.contains('b')).toBe(true);

    update([false && 'a', true && 'b']);
    expect(classList.contains('b')).toBe(true);
    expect(classList.contains('a')).toBe(false);

    update([false && 'a', false && 'b']);
    expect(classList.contains('a')).toBe(false);
    expect(classList.contains('b')).toBe(false);
  });
});
