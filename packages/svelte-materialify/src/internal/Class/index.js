/**
 * @param node {Element}
 * @param classes {Array<string>}
 */
export default (node, classes) => {
  classes.forEach((klass) => {
    if (klass) node.classList.add(klass);
  });
  return {
    update(newClasses) {
      newClasses.forEach((klass) => {
        if (klass) node.classList.add(klass);
        else node.classList.remove(klass);
      });
    },
  };
};
