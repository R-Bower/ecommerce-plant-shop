import {style} from "@vanilla-extract/css"

import {breakpoints} from "~styles/system"

export const contentPaneRootStyle = style({
  "@media": {
    [breakpoints.mobile]: {
      maxWidth: 675,
      width: `calc(100vw - 80px)`,
    },
    [breakpoints.tablet]: {
      maxWidth: 675,
      width: `calc(100vw - 120px)`,
    },
    [breakpoints.laptop]: {
      maxWidth: 450,
    },
  },
  width: `calc(100vw - 60px)`,
})
