import Ripples from "./ripplet";

export default (node, options) => {
  let isTouchable = "ontouchstart" in window;
  let handleClick = (e) => Ripples(e, options);

  node.addEventListener("mousedown", handleClick, false);
  if (isTouchable) node.addEventListener("touchstart", handleClick, false);

  return {
    destroy() {
      node.removeEventListener("mousedown", handleClick, false);
      if (isTouchable) node.removeEventListener("touchstart", handleClick, false);
    },
  };
};
