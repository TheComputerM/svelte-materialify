// Thanks https://github.com/luncheon/ripplet.js

// Modified for better readability

let _defaults = {
  classes: "",
  color: "currentcolor",
  opacity: 0.1,
  spreadingDuration: "400ms",
  spreadingDelay: "0s",
  spreadingTimingFunction: "linear",
  clearingDuration: "1s",
  clearingDelay: "0s",
  clearingTimingFunction: "ease-in-out",
  centered: false,
  appendTo: "body",
};

function copyStyles(destination, source, properties) {
  for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
    var property = properties_1[_i];
    destination[property] = source[property];
  }
}

export function StartRipple(e, _options = {}) {
  var currentTarget = e.currentTarget,
    clientX = e.clientX,
    clientY = e.clientY;
  if (!(currentTarget instanceof Element)) return;
  var opts = { ..._defaults, ..._options };
  var targetRect = currentTarget.getBoundingClientRect();
  if (opts.centered && opts.centered !== "false") {
    clientX = targetRect.left + targetRect.width / 2;
    clientY = targetRect.top + targetRect.height / 2;
  } else if (typeof clientX !== "number" || typeof clientY !== "number") return;

  var targetStyl = getComputedStyle(currentTarget);
  var doc = document.documentElement;
  var container = document.createElement("div");
  var remover = container;
  {
    var appendToParent = opts.appendTo === "parent";
    var containerStyl = container.style;
    if (
      targetStyl.position === "fixed" ||
      (targetStyl.position === "absolute" && appendToParent)
    ) {
      if (appendToParent) {
        currentTarget.parentElement.insertBefore(container, currentTarget);
      } else {
        document.body.appendChild(container);
      }
      copyStyles(containerStyl, targetStyl, [
        "position",
        "left",
        "top",
        "right",
        "bottom",
        "marginLeft",
        "marginTop",
        "marginRight",
        "marginBottom",
      ]);
    } else if (appendToParent) {
      var parentStyle = getComputedStyle(currentTarget.parentElement);
      if (
        parentStyle.display === "flex" ||
        parentStyle.display === "inline-flex"
      ) {
        currentTarget.parentElement.insertBefore(container, currentTarget);
        containerStyl.position = "absolute";
        containerStyl.left = currentTarget.offsetLeft + "px";
        containerStyl.top = currentTarget.offsetTop + "px";
      } else {
        var parent = (remover = currentTarget.parentElement.insertBefore(
          document.createElement("div"),
          currentTarget
        ));
        var parentStyl = parent.style;
        parentStyl.display = "inline-block";
        parentStyl.position = "relative";
        parentStyl.width = parentStyl.height = "0";
        parentStyl.cssFloat = targetStyl.cssFloat;
        var parentRect = parent.getBoundingClientRect(); // this may be a slow operation...
        parent.appendChild(container);
        containerStyl.position = "absolute";
        containerStyl.top = targetRect.top - parentRect.top + "px";
        containerStyl.left = targetRect.left - parentRect.left + "px";
      }
    } else {
      document.body.appendChild(container);
      containerStyl.position = "absolute";
      containerStyl.left =
        targetRect.left + doc.scrollLeft + document.body.scrollLeft + "px";
      containerStyl.top =
        targetRect.top + doc.scrollTop + document.body.scrollTop + "px";
    }
    containerStyl.overflow = "hidden";
    containerStyl.pointerEvents = "none";
    containerStyl.width = targetRect.width + "px";
    containerStyl.height = targetRect.height + "px";
    containerStyl.zIndex = (+targetStyl.zIndex || 0) + 1;
    containerStyl.opacity = opts.opacity;
    copyStyles(containerStyl, targetStyl, [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
      "webkitClipPath",
      "clipPath",
    ]);
  }
  {
    var distX = Math.max(clientX - targetRect.left, targetRect.right - clientX);
    var distY = Math.max(clientY - targetRect.top, targetRect.bottom - clientY);
    var radius = Math.sqrt(distX * distX + distY * distY);
    var ripple = container.appendChild(document.createElement("div"));
    var rippleStyl = ripple.style;
    ripple.className = opts.classes;
    rippleStyl.backgroundColor = /^currentcolor$/i.test(opts.color)
      ? targetStyl.color
      : opts.color;
    rippleStyl.width = rippleStyl.height = radius * 2 + "px";
    rippleStyl.marginLeft = clientX - targetRect.left - radius + "px";
    rippleStyl.marginTop = clientY - targetRect.top - radius + "px";
    rippleStyl.borderRadius = "50%";
    rippleStyl.transition =
      "transform " +
      opts.spreadingDuration +
      " " +
      opts.spreadingTimingFunction +
      " " +
      opts.spreadingDelay +
      (",opacity " +
        opts.clearingDuration +
        " " +
        opts.clearingTimingFunction +
        " " +
        opts.clearingDelay);
    rippleStyl.transform = "scale(0)";
    // reflect styles by force layout
    ripple.offsetTop;
    rippleStyl.transform = "";
  }
  return { ripple, remover };
}

export function StopRipple({ ripple, remover }) {
  ripple.addEventListener("transitionend", function (e) {
    if (e.propertyName === "opacity" && remover.parentElement) {
      remover.parentElement.removeChild(remover);
    }
  });
  ripple.style.opacity = "0";
}
