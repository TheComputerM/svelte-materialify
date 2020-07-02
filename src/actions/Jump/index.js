import jump from "./jump";

export default (node, options = {}) => {
  let target = options.target || node.getAttribute("data-target") || node.href;
  let isTouchable = "ontouchstart" in window;
  let Jump = () => {jump(target, options)}

  node.addEventListener("mousedown", Jump)
  if (isTouchable) node.addEventListener("touchstart", Jump)

  return {
    destroy() {
      node.removeEventListener("mousedown", Jump)
      if (isTouchable) node.removeEventListener("touchstart", Jump)
    }
  }
}
