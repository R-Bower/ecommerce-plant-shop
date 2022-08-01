import {ComplexStyleRule, styleVariants} from "@vanilla-extract/css"

import {Breakpoint, breakpoints} from "~styles/system/responsive"

const showStyle: ComplexStyleRule = {
  display: "block",
}

const hideStyle: ComplexStyleRule = {
  display: "none",
}

export const greaterThanOrEqualStyle = styleVariants<
  Record<Breakpoint, ComplexStyleRule>
>({
  desktop: {
    "@media": {
      [breakpoints.desktop]: showStyle,
    },
    ...hideStyle,
  },
  laptop: {
    "@media": {
      [breakpoints.laptop]: showStyle,
    },
    ...hideStyle,
  },
  mobile: {
    "@media": {
      [breakpoints.mobile]: showStyle,
    },
    ...hideStyle,
  },
  tablet: {
    "@media": {
      [breakpoints.tablet]: showStyle,
    },
    ...hideStyle,
  },
})

export const atStyle = styleVariants<Record<Breakpoint, ComplexStyleRule>>({
  desktop: {
    "@media": {
      [breakpoints.desktop]: showStyle,
    },
    ...hideStyle,
  },
  laptop: {
    "@media": {
      [breakpoints.laptop]: showStyle,
      [breakpoints.desktop]: hideStyle,
    },
    ...hideStyle,
  },
  mobile: {
    "@media": {
      [breakpoints.mobile]: showStyle,
      [breakpoints.tablet]: hideStyle,
    },
    ...hideStyle,
  },
  tablet: {
    "@media": {
      [breakpoints.tablet]: showStyle,
      [breakpoints.laptop]: hideStyle,
    },
    ...hideStyle,
  },
})

export const lessThanStyle = styleVariants<
  Record<Breakpoint, ComplexStyleRule>
>({
  desktop: {
    "@media": {
      [breakpoints.desktop]: hideStyle,
    },
    ...showStyle,
  },
  laptop: {
    "@media": {
      [breakpoints.laptop]: hideStyle,
    },
    ...showStyle,
  },
  mobile: {
    "@media": {
      [breakpoints.mobile]: hideStyle,
    },
    ...showStyle,
  },
  tablet: {
    "@media": {
      [breakpoints.tablet]: hideStyle,
    },
    ...showStyle,
  },
})

type Between =
  | "mobile-tablet"
  | "mobile-laptop"
  | "mobile-desktop"
  | "tablet-laptop"
  | "tablet-desktop"
  | "laptop-desktop"

export const betweenStyle = styleVariants<Record<Between, ComplexStyleRule>>({
  "laptop-desktop": {
    "@media": {
      [breakpoints.laptop]: showStyle,
      [breakpoints.desktop]: hideStyle,
    },
    ...hideStyle,
  },
  "mobile-desktop": {
    "@media": {
      [breakpoints.mobile]: showStyle,
      [breakpoints.desktop]: hideStyle,
    },
    ...hideStyle,
  },
  "mobile-laptop": {
    "@media": {
      [breakpoints.mobile]: showStyle,
      [breakpoints.laptop]: hideStyle,
    },
    ...hideStyle,
  },
  "mobile-tablet": {
    "@media": {
      [breakpoints.mobile]: showStyle,
      [breakpoints.tablet]: hideStyle,
    },
    ...hideStyle,
  },
  "tablet-desktop": {
    "@media": {
      [breakpoints.tablet]: showStyle,
      [breakpoints.desktop]: hideStyle,
    },
    ...hideStyle,
  },
  "tablet-laptop": {
    "@media": {
      [breakpoints.tablet]: showStyle,
      [breakpoints.laptop]: hideStyle,
    },
    ...hideStyle,
  },
})
