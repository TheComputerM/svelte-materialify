/* eslint-disable no-param-reassign */

const themeColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error'];

/**
 * @param {string} klass
 */
function formatClass(klass) {
  return klass.split(' ').map((i) => {
    if (themeColors.includes(i)) return `${i}-color`;
    return i;
  });
}

/**
 * @param node {Element}
 * @param text {string|boolean}
 */
export default (node, text) => {
  let klass;
  if (typeof text === 'string') {
    if (/^#([0-9A-F]{3}){1,2}$/i.test(text)) {
      // This is a CSS hex.
      node.style.backgroundColor = text;
      klass = false;
    } else if (text.startsWith('--')) {
      // This is a CSS variable.
      node.style.backgroundColor = `var(${text})`;
      klass = false;
    } else {
      klass = formatClass(text);
      node.classList.add(...klass);
    }
  }

  return {
    update(newText) {
      if (klass) {
        node.classList.remove(...klass);
      } else {
        node.style.backgroundColor = null;
      }

      if (typeof newText === 'string') {
        if (/^#([0-9A-F]{3}){1,2}$/i.test(newText)) {
          // This is a CSS hex.
          node.style.backgroundColor = newText;
          klass = false;
        } else if (newText.startsWith('--')) {
          // This is a CSS variable.
          node.style.backgroundColor = `var(${newText})`;
          klass = false;
        } else {
          klass = formatClass(newText);
          node.classList.add(...klass);
        }
      }
    },
  };
};
