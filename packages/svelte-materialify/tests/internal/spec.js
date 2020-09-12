import Class from '@s/internal/Class';
import Style from '@s/internal/Style';
import TextColor from '@s/internal/TextColor';
import BackgroundColor from '@s/internal/BackgroundColor';

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

  test('Style', () => {
    document.body.appendChild(document.createElement('div'));

    const div = document.querySelector('div');
    const { style } = div;

    const { update } = Style(div, { test: '10px' });

    expect(style.getPropertyValue('--s-test')).toBe('10px');

    update({ test2: '20px' });
    expect(style.getPropertyValue('--s-test')).toBeFalsy();
    expect(style.getPropertyValue('--s-test2')).toBe('20px');
  });

  test('TextColor', () => {
    document.body.appendChild(document.createElement('div'));

    const div = document.querySelector('div');
    const { classList, style } = div;

    const { update } = TextColor(div, 'primary');

    expect(classList.contains('primary-text')).toBe(true);

    update('red accent-4');
    expect(classList.contains('primary-text')).toBe(false);
    expect(classList.contains('red-text')).toBe(true);
    expect(classList.contains('text-accent-4')).toBe(true);

    update('#ff0000');
    expect(classList.contains('red-text')).toBe(false);
    expect(style.color).toBeTruthy();
  });

  test('BackgroundColor', () => {
    document.body.appendChild(document.createElement('div'));

    const div = document.querySelector('div');
    const { classList, style } = div;

    const { update } = BackgroundColor(div, 'primary');

    expect(classList.contains('primary-color')).toBe(true);

    update('red accent-4');
    expect(classList.contains('primary-color')).toBe(false);
    expect(classList.contains('red')).toBe(true);
    expect(classList.contains('accent-4')).toBe(true);

    update('#ff0000');
    expect(classList.contains('red')).toBe(false);
    expect(style.backgroundColor).toBeTruthy();
  });
});
