function setCustomProperties(node, styles) {
  Object.entries(styles).forEach(([key, value]) => {
    node.style.setProperty(`--s-${key}`, value);
  });
}

/**
 * @param node {Element}
 * @param styles {Object}
 */
export default (node, styles) => {
  setCustomProperties(node, styles);

  return {
    update(newStyles) {
      setCustomProperties(node, newStyles);
    },
  };
};
