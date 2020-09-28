const vars = getComputedStyle(document.documentElement);
const xs = parseInt(vars.getPropertyValue('--theme-bp-xs'), 10);
const sm = parseInt(vars.getPropertyValue('--theme-bp-sm'), 10);
const md = parseInt(vars.getPropertyValue('--theme-bp-md'), 10);
const lg = parseInt(vars.getPropertyValue('--theme-bp-lg'), 10);
const xl = parseInt(vars.getPropertyValue('--theme-bp-xl'), 10);

export const breakpoints = {
  xs,
  sm,
  md,
  lg,
  xl,
};

export default {
  'xs-only': `only screen and (max-width: ${sm - 1}px)`,
  'sm-only': `only screen and (min-width: ${sm}px) and (max-width: ${md - 1}px)`,
  'sm-and-down': `only screen and (max-width: ${md - 1}px)`,
  'sm-and-up': `only screen and (min-width: ${sm}px)`,
  'md-only': `only screen and (min-width: ${md}px) and (max-width: ${lg - 1}px)`,
  'md-and-down': `only screen and (max-width: ${lg - 1}px)`,
  'md-and-up': `only screen and (min-width: ${md}px)`,
  'lg-only': `only screen and (min-width: ${lg}px) and (max-width: ${xl - 1}px)`,
  'lg-and-down': `only screen and (max-width: ${xl - 1}px)`,
  'lg-and-up': `only screen and (min-width: ${lg}px)`,
  'xl-only': `only screen and (min-width: ${xl}px)`,
};
