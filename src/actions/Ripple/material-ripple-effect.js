/**
 * Options for customizing ripples
 */
let defaults = {
  color: "currentColor",
  class: "",
  opacity: 0.1,
  centered: false,
  spreadingDuration: ".4s",
  spreadingDelay: "0s",
  spreadingTimingFunction: "linear",
  clearingDuration: "1s",
  clearingDelay: "0s",
  clearingTimingFunction: "ease-in-out",
};

/**
 * Creates a ripple element but does not destroy it (use RippleStop for that)
 *
 * @param {Event} e
 * @param {*} options
 * @returns Ripple element
 */
export function RippleStart(e, options = {}) {
  e.stopImmediatePropagation();
  let opts = { ...defaults, ...options };

  // Parent element
  let target =
    e.currentTarget ?? e.touches?.[0].currentTarget ?? e.relatedTarget;
  target.style.overflow = "hidden";
  target.style.position = target.style.position || "relative";

  // Create ripple
  let ripple = document.createElement("div");
  let rippleStyle = ripple.style;

  // Adding default stuff
  ripple.className = `s-material-ripple ${opts.class}`;
  rippleStyle.position = "absolute";
  rippleStyle.color = "inherit";
  rippleStyle.borderRadius = "50%";
  rippleStyle.pointerEvents = "none";
  rippleStyle.width = "100px";
  rippleStyle.height = "100px";
  rippleStyle.marginTop = "-50px";
  rippleStyle.marginLeft = "-50px";
  target.appendChild(ripple);
  rippleStyle.opacity = opts.opacity;
  rippleStyle.transition = `transform ${opts.spreadingDuration} ${opts.spreadingTimingFunction} ${opts.spreadingDelay},opacity ${opts.clearingDuration} ${opts.clearingTimingFunction} ${opts.clearingDelay}`;
  rippleStyle.transform = "scale(0) translate(0,0)";
  rippleStyle.background = opts.color;

  // Positioning ripple
  let targetRect = target.getBoundingClientRect();
  if (opts.centered) {
    rippleStyle.top = `${targetRect.height / 2}px`;
    rippleStyle.left = `${targetRect.width / 2}px`;
  } else {
    let distY = e.clientY ?? e.touches[0].clientY;
    let distX = e.clientX ?? e.touches[0].clientX;
    rippleStyle.top = `${distY - targetRect.top}px`;
    rippleStyle.left = `${distX - targetRect.left}px`;
  }

  // Enlarge ripple
  rippleStyle.transform = `scale(${targetRect.width * 0.02}) translate(0,0)`;
  return ripple;
}

/**
 * Destroys the ripple, slowly fading it out.
 *
 * @param {Element} ripple
 */
export function RippleStop(ripple) {
  if (ripple?.tagName) {
    ripple.addEventListener("transitionend", (e) => {
      if (e.propertyName === "opacity") ripple.remove();
    });
    ripple.style.opacity = 0;
  }
}

/**
 * Binds event listeners to add and remove ripples when user interacts with the element.
 *
 * @param {Element} node
 * @param {*} options
 * @returns destroy() to destroy event listeners
 */
export function RippleBind(node, options = {}) {
  let isTouchable = "ontouchstart" in window;
  let ripple;

  let handleStart = (e) => (ripple = RippleStart(e, options));
  let handleStop = () => RippleStop(ripple);
  let handleRemove = () => ripple.remove();

  if (isTouchable) {
    node.addEventListener("touchstart", handleStart, false);
    node.addEventListener("touchmove", handleRemove, false);
    node.addEventListener("touchcancel", handleRemove, false);
    node.addEventListener("touchend", handleStop, false);
  } else {
    node.addEventListener("mousedown", handleStart);
    node.addEventListener("mouseup", handleStop);
    node.addEventListener("mouseleave", handleStop);
  }

  return {
    destroy() {
      if (isTouchable) {
        node.removeEventListener("touchstart", handleStart);
        node.removeEventListener("touchmove", handleRemove);
        node.removeEventListener("touchcancel", handleRemove);
        node.removeEventListener("touchend", handleStop);
      } else {
        node.removeEventListener("mousedown", handleStart);
        node.removeEventListener("mouseup", handleStop);
        node.removeEventListener("mouseleave", handleStop);
      }
    },
  };
}

/**
 * Create a ripple programmatically
 *
 * @param {Element} node
 * @param {*} options
 */
export function Ripple(node, options = {}) {
  let rect = node.getBoundingClientRect();
  let clientX = rect.left + rect.width / 2;
  let clientY = rect.top + rect.height / 2;
  let event = new MouseEvent("mousedown", {
    clientX,
    clientY,
    relatedTarget: node,
  });
  let ripple = RippleStart(event, options);
  RippleStop(ripple);
}
