export default (node, options) => {
  const settings = { once: false, observer: {}, ...options };
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    const intersecting = entry.isIntersecting;
    if (intersecting) {
      node.dispatchEvent(new CustomEvent('intersect', {
        detail: entry,
      }));
      if (settings.once) {
        observer.unobserve(node);
      }
    }
  },
  settings.observer);
  observer.observe(node);
  return {
    destroy() {
      observer.unobserve(node);
    },
  };
};
