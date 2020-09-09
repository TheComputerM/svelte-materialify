const filter = (classes) => classes.filter((x) => !!x);
const format = (classes) => classes.split(' ').filter((x) => !!x);

/**
 * @param node {Element}
 * @param classes {Array<string>}
 */
export default (node, _classes) => {
  let classes = _classes;
  node.classList.add(...format(filter(classes).join(' ')));
  return {
    update(_newClasses) {
      const newClasses = _newClasses;
      newClasses.forEach((klass, i) => {
        if (klass) node.classList.add(...format(klass));
        else if (classes[i]) node.classList.remove(...format(classes[i]));
      });
      classes = newClasses;
    },
  };
};
