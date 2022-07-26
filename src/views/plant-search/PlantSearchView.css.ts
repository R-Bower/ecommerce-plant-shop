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
