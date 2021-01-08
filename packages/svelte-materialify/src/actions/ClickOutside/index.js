/**
 * Click Outside
 * @param {Node} node
 */
export default (node, _options = {}) => {
  const options = { include: [], ..._options };

  function detect({ target }) {
    if (!node.contains(target) || options.include.some((i) => target.isSameNode(i))) {
      node.dispatchEvent(new CustomEvent('clickOutside'));
    }
  }
  document.addEventListener('click', detect, { passive: true, capture: true });
  return {
    destroy() {
      document.removeEventListener('click', detect);
    },
  };
};
