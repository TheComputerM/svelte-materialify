import { RippleBind } from 'material-ripple-effect';

export default (node, options) => {
  if (typeof options === 'boolean' && !options) {
    return null;
  }
  return RippleBind(node, options);
};
