/**
 * Click Outside
 * @param {Node} node
 */
export default (node, options = {}) => {
  const { exclude } = { exclude: [], ...options };

  function checkIfNotClickedOnNode(target) {
    for (let el = target; el && el !== document; el = el.parentNode) {
      if (node.isSameNode(el) || exclude.some((x) => x.isSameNode(el))) return false;
    }
    return true;
  }

  function detect({ target }) {
    const check = checkIfNotClickedOnNode(target);
    if (check) {
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
