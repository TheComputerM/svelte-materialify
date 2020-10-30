/* eslint-disable */
// Shamefully ripped from https://github.com/lukeed/uid
let IDX = 36;
let HEX = '';
while (IDX--) HEX += IDX.toString(36);

export default (len) => {
  let str = '';
  let num = len || 11;
  while (num--) str += HEX[(Math.random() * 36) | 0];
  return str;
};
