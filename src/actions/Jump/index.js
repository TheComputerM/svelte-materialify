import jump from './jump';

export default (node, options = {}) => {
  const target = options.target || node.getAttribute('data-target') || node.href;
  const isTouchable = 'ontouchstart' in window;
  const Jump = () => { jump(target, options); };

  node.addEventListener('mousedown', Jump);
  if (isTouchable) node.addEventListener('touchstart', Jump);

  return {
    destroy() {
      node.removeEventListener('mousedown', Jump);
      if (isTouchable) node.removeEventListener('touchstart', Jump);
    },
  };
};
