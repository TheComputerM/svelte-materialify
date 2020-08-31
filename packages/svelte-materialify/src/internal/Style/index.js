/**
 * @param node {Element}
 * @param styles {Object}
 */
export default (node, _styles) => {
  let styles = _styles;
  Object.entries(styles).forEach(([key, value]) => {
    node.style.setProperty(`--s-${key}`, value);
  });

  return {
    update(newStyles) {
      Object.entries(newStyles).forEach(([key, value]) => {
        node.style.setProperty(`--s-${key}`, value);
        delete styles[key];
      });

      Object.keys(styles).forEach((name) => node.style.removeProperty(`--s-${name}`));

      styles = newStyles;
    },
  };
};
