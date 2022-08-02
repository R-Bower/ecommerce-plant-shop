import {style} from "@vanilla-extract/css"

import {breakpoints} from "~styles/system"

export const imageStyle = style({
  position: "relative",
})

export const imagePaneWrapperStyle = style({
  "@media": {
    [breakpoints.mobile]: {
      maxWidth: "calc(100vw - 40px)",
    },
    [breakpoints.tablet]: {
      minHeight: 500,
      minWidth: "calc(100vw - 120px)",
    },
    [breakpoints.laptop]: {
      maxWidth: 600,
      minHeight: 700,
      minWidth: 600,
      width: 600,
    },
  },
  minWidth: "calc(100vw - 40px)",
  position: "relative",
})
