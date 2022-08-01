import {style} from "@vanilla-extract/css"

import {breakpoints} from "~styles/system"

export const contentPaneRootStyle = style({
  "@media": {
    [breakpoints.mobile]: {
      maxWidth: 500,
      width: `calc(100vw - 80px)`,
    },
    [breakpoints.tablet]: {
      width: `calc(100vw - 120px)`,
    },
    [breakpoints.laptop]: {
      maxWidth: 500,
    },
  },
  width: `calc(100vw - 120px)`,
})
