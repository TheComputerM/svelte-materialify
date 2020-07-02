// Thanks https://github.com/luncheon/ripplet.js

// Modified for better readability

let _defaults = {
  classes: '',
  color: 'currentcolor',
  opacity: .1,
  spreadingDuration: '400ms',
  spreadingDelay: '0s',
  spreadingTimingFunction: 'linear',
  clearingDuration: '1s',
  clearingDelay: '0s',
  clearingTimingFunction: 'ease-in-out',
  centered: false,
  appendTo: 'body',
};

export default function ripplet(e, _options = {}) {
  var currentTarget = e.currentTarget, clientX = e.clientX, clientY = e.clientY;
  if (!(currentTarget instanceof Element)) return;
  var options = {..._defaults, ..._options};
  var targetRect = currentTarget.getBoundingClientRect();
  if (options.centered && options.centered !== 'false') {
      clientX = targetRect.left + targetRect.width / 2;
      clientY = targetRect.top + targetRect.height / 2;
  }
  else if (typeof clientX !== 'number' || typeof clientY !== 'number') return;


  var targetStyle = getComputedStyle(currentTarget);
  var doc = document.documentElement, body = document.body;
  var containerElement = document.createElement('div');
  var removingElement = containerElement;
  {
      var appendToParent = options.appendTo === 'parent';
      var containerStyle = containerElement.style;
      if (targetStyle.position === 'fixed' || (targetStyle.position === 'absolute' && appendToParent)) {
          if (appendToParent) {
              currentTarget.parentElement.insertBefore(containerElement, currentTarget);
          }
          else {
              body.appendChild(containerElement);
          }
          copyStyles(containerStyle, targetStyle, ['position', 'left', 'top', 'right', 'bottom', 'marginLeft', 'marginTop', 'marginRight', 'marginBottom']);
      }
      else if (appendToParent) {
          var parentStyle = getComputedStyle(currentTarget.parentElement);
          if (parentStyle.display === 'flex' || parentStyle.display === 'inline-flex') {
              currentTarget.parentElement.insertBefore(containerElement, currentTarget);
              containerStyle.position = 'absolute';
              containerStyle.left = currentTarget.offsetLeft + "px";
              containerStyle.top = currentTarget.offsetTop + "px";
          }
          else {
              var parentContainer = removingElement
                  = currentTarget.parentElement.insertBefore(document.createElement('div'), currentTarget);
              var parentContainerStyle = parentContainer.style;
              parentContainerStyle.display = 'inline-block';
              parentContainerStyle.position = 'relative';
              parentContainerStyle.width = parentContainerStyle.height
                  = '0';
              parentContainerStyle.cssFloat = targetStyle.cssFloat;
              var parentContainerRect = parentContainer.getBoundingClientRect(); // this may be a slow operation...
              parentContainer.appendChild(containerElement);
              containerStyle.position = 'absolute';
              containerStyle.top = targetRect.top - parentContainerRect.top + "px";
              containerStyle.left = targetRect.left - parentContainerRect.left + "px";
          }
      }
      else {
          body.appendChild(containerElement);
          containerStyle.position = 'absolute';
          containerStyle.left = targetRect.left + doc.scrollLeft + body.scrollLeft + "px";
          containerStyle.top = targetRect.top + doc.scrollTop + body.scrollTop + "px";
      }
      containerStyle.overflow = 'hidden';
      containerStyle.pointerEvents = 'none';
      containerStyle.width = targetRect.width + "px";
      containerStyle.height = targetRect.height + "px";
      containerStyle.zIndex = (+targetStyle.zIndex || 0) + 1;
      containerStyle.opacity = options.opacity;
      copyStyles(containerStyle, targetStyle, ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'webkitClipPath', 'clipPath']);
  }
  {
      var distanceX = Math.max(clientX - targetRect.left, targetRect.right - clientX);
      var distanceY = Math.max(clientY - targetRect.top, targetRect.bottom - clientY);
      var radius = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      var rippletElement = containerElement.appendChild(document.createElement('div'));
      var rippletStyle = rippletElement.style;
      rippletElement.className = options.classes;
      rippletStyle.backgroundColor = /^currentcolor$/i.test(options.color) ? targetStyle.color : options.color;
      rippletStyle.width = rippletStyle.height
          = radius * 2 + "px";
      rippletStyle.marginLeft = clientX - targetRect.left - radius + "px";
      rippletStyle.marginTop = clientY - targetRect.top - radius + "px";
      rippletStyle.borderRadius = '50%';
      rippletStyle.transition =
          "transform " + options.spreadingDuration + " " + options.spreadingTimingFunction + " " + options.spreadingDelay +
              (",opacity " + options.clearingDuration + " " + options.clearingTimingFunction + " " + options.clearingDelay);
      rippletStyle.transform = 'scale(0)';
      // reflect styles by force layout
      // tslint:disable-next-line:no-unused-expression
      rippletElement.offsetTop;
      rippletElement.addEventListener('transitionend', function (event) {
          if (event.propertyName === 'opacity' && removingElement.parentElement) {
              removingElement.parentElement.removeChild(removingElement);
          }
      });
      rippletStyle.transform = '';
      rippletStyle.opacity = '0';
  }
  return containerElement;
}

function copyStyles(destination, source, properties) {
  for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
      var property = properties_1[_i];
      destination[property] = source[property];
  }
}
