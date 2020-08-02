let vars = getComputedStyle(document.documentElement);
let xs = parseInt(vars.getPropertyValue("--theme-bp-xs")),
  sm = parseInt(vars.getPropertyValue("--theme-bp-sm")),
  md = parseInt(vars.getPropertyValue("--theme-bp-md")),
  lg = parseInt(vars.getPropertyValue("--theme-bp-lg")),
  xl = parseInt(vars.getPropertyValue("--theme-bp-xl"));

export const breakpoints = { xs, sm, md, lg, xl };

let displayBreakpoints = {
  "xs-only": `only screen and (max-width: ${sm - 1}px)`,
  "sm-only": `only screen and (min-width: ${sm}px) and (max-width: ${md - 1}px)`,
  "sm-and-down": `only screen and (max-width: ${md - 1}px)`,
  "sm-and-up": `only screen and (min-width: ${sm}px)`,
  "md-only": `only screen and (min-width: ${md}px) and (max-width: ${lg - 1}px)`,
  "md-and-down": `only screen and (max-width: ${lg - 1}px)`,
  "md-and-up": `only screen and (min-width: ${md}px)`,
  "lg-only": `only screen and (min-width: ${lg}px) and (max-width: ${xl - 1}px)`,
  "lg-and-down": `only screen and (max-width: ${xl - 1}px)`,
  "lg-and-up": `only screen and (min-width: ${lg}px)`,
  "xl-only": `only screen and (min-width: ${xl}px)`,
}

export default displayBreakpoints;
