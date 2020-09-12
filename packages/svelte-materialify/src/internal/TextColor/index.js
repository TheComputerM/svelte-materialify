/* eslint-disable no-param-reassign */

/**
 * @param {string} klass
 */
function formatClass(klass) {
  return klass.split(' ').map((i) => {
    if (/^(lighten|darken|accent)-/.test(i)) {
      return `text-${i}`;
    }
    return `${i}-text`;
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
      node.style.color = text;
      klass = false;
    } else if (text.startsWith('--')) {
      // This is a CSS variable.
      node.style.color = `var(${text})`;
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
        node.style.color = null;
      }

      if (typeof newText === 'string') {
        if (/^#([0-9A-F]{3}){1,2}$/i.test(newText)) {
          // This is a CSS hex.
          node.style.color = newText;
          klass = false;
        } else if (newText.startsWith('--')) {
          // This is a CSS variable.
          node.style.color = `var(${newText})`;
          klass = false;
        } else {
          klass = formatClass(newText);
          node.classList.add(...klass);
        }
      }
    },
  };
};
