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

function setBackgroundColor(node, text) {
  if (/^(#|rgb|hsl|currentColor)/.test(text)) {
    // This is a CSS hex.
    node.style.backgroundColor = text;
    return false;
  }

  if (text.startsWith('--')) {
    // This is a CSS variable.
    node.style.backgroundColor = `var(${text})`;
    return false;
  }

  const klass = formatClass(text);
  node.classList.add(...klass);
  return klass;
}

/**
 * @param node {Element}
 * @param text {string|boolean}
 */
export default (node, text) => {
  let klass;
  if (typeof text === 'string') {
    klass = setBackgroundColor(node, text);
  }

  return {
    update(newText) {
      if (klass) {
        node.classList.remove(...klass);
      } else {
        node.style.backgroundColor = null;
      }

      if (typeof newText === 'string') {
        klass = setBackgroundColor(node, newText);
      }
    },
  };
};
