import { RippleStart, RippleStop } from './material-ripple';

/**
 * @param node {Element}
 */
export default (node, options = {}) => {
  if (options) {
    let ripple;
    let keyboardActive = false;
    const handleStart = (e) => {
      ripple = RippleStart(e, options);
    };
    const handleStop = () => RippleStop(ripple);
    const handleRemove = () => ripple.remove();
    const handleKeyboardStart = (e) => {
      if (!keyboardActive && (e.keyCode === 13 || e.keyCode === 32)) {
        ripple = RippleStart(e, { ...options, centered: true });
        keyboardActive = true;
      }
    };
    const handleKeyboardStop = () => {
      keyboardActive = false;
      handleStop();
    };

    node.classList.add('s-ripple-container');
    node.addEventListener('touchstart', handleStart, { passive: true });
    node.addEventListener('touchmove', handleRemove, { passive: true });
    node.addEventListener('touchcancel', handleRemove, false);
    node.addEventListener('touchend', handleStop, { passive: true });
    node.addEventListener('mousedown', handleStart);
    node.addEventListener('mouseup', handleStop);
    node.addEventListener('mouseleave', handleStop);
    node.addEventListener('keydown', handleKeyboardStart);
    node.addEventListener('keyup', handleKeyboardStop);

    return {
      destroy() {
        node.classList.remove('s-ripple-container');
        node.removeEventListener('touchstart', handleStart);
        node.removeEventListener('touchmove', handleRemove);
        node.removeEventListener('touchcancel', handleRemove);
        node.removeEventListener('touchend', handleStop);
        node.removeEventListener('mousedown', handleStart);
        node.removeEventListener('mouseup', handleStop);
        node.removeEventListener('mouseleave', handleStop);
        node.removeEventListener('keydown', handleKeyboardStart);
        node.removeEventListener('keyup', handleKeyboardStop);
      },
    };
  }
  return null;
};
