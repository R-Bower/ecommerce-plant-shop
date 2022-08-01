import {style} from "@vanilla-extract/css"

import {breakpoints} from "~styles/system"

export const plantDetailsRootWrapper = style({
  "@media": {
    [breakpoints.mobile]: {},
    [breakpoints.tablet]: {
      flexDirection: "column",
    },
    [breakpoints.laptop]: {
      flexDirection: "row",
    },
  },
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: 32,
  justifyContent: "center",
  width: "100%",
})
