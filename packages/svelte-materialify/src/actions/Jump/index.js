import jump from './jump';

export default (node, _options = {}) => {
  let options = _options;
  let target = options.target || node.getAttribute('data-target') || node.href;
  const Jump = () => {
    jump(target, options);
  };

  node.addEventListener('pointerdown', Jump);

  return {
    update(newOptions) {
      options = newOptions;
      target = options.target || node.getAttribute('data-target') || node.href;
      if (!options) node.removeEventListener('pointerdown', Jump);
    },
    destroy() {
      node.removeEventListener('pointerdown', Jump);
    },
  };
};
