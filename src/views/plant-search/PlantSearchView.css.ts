import {style} from "@vanilla-extract/css"

import {breakpoints} from "~styles/system"

export const plantWrapperStyle = style({
  "@media": {
    [breakpoints.mobile]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [breakpoints.tablet]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [breakpoints.laptop]: {
      gridTemplateColumns: "repeat(3, 1fr)",
      maxWidth: 800,
    },
  },
  alignItems: "start",
  display: "grid",
  gridColumnGap: "2.25rem",
  gridRowGap: "2.25rem",
  gridTemplateColumns: "repeat(2, 1fr)",
  justifyContent: "center",
})

export const loaderWrapperStyle = style({
  "@media": {
    [breakpoints.mobile]: {
      gridColumn: "1 / span 2",
    },
    [breakpoints.tablet]: {
      gridColumn: "1 / span 3",
    },
    [breakpoints.laptop]: {
      maxWidth: 800,
    },
  },
  gridColumn: "1 / span 2",
})
