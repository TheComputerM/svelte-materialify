/**
 * Click Outside
 * @param {Node} node
 */
export default (node, options = {}) => {
  const { include } = { include: [], ...options };

  function detect({ target }) {
    if (!node.contains(target) || include.some((i) => target.isSameNode(i))) {
      node.dispatchEvent(new CustomEvent('clickOutside'));
    }
  }
  document.addEventListener('click', detect, { passive: true });
  return {
    destroy() {
      document.removeEventListener('click', detect);
    },
  };
};
