import { StartRipple, StopRipple } from "./ripplet";

export default (node, options) => {
  let isTouchable = "ontouchstart" in window;
  let ripple;
  let handleClick = (e) => {
    ripple = StartRipple(e, options);
  };
  let handleLift = () => {
    StopRipple(ripple);
  };
  let active = options.active ?? true;

  if (active) {
    node.addEventListener("mousedown", handleClick);
    node.addEventListener("mouseup", handleLift);
    if (isTouchable) {
      node.addEventListener("touchstart", handleClick, { passive: true });
      node.addEventListener("touchend", handleLift, { passive: true });
    }
  }

  return {
    destroy() {
      if (active) {
        node.removeEventListener("mousedown", handleClick);
        node.removeEventListener("mouseup", handleLift);
        if (isTouchable) {
          node.removeEventListener("touchstart", handleClick, {
            passive: true,
          });
          node.removeEventListener("touchend", handleLift, { passive: true });
        }
      }
    },
  };
};
