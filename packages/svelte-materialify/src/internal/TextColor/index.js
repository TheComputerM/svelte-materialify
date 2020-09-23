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

function setTextColor(node, text) {
  if (/^(#|rgb|hsl|currentColor)/.test(text)) {
    // This is a CSS hex.
    node.style.color = text;
    return false;
  }
  if (text.startsWith('--')) {
    // This is a CSS variable.
    node.style.color = `var(${text})`;
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
    klass = setTextColor(node, text);
  }

  return {
    update(newText) {
      if (klass) {
        node.classList.remove(...klass);
      } else {
        node.style.color = null;
      }

      if (typeof newText === 'string') {
        klass = setTextColor(node, newText);
      }
    },
  };
};
