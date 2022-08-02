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
      justifyContent: "center",
    },
  },
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: 32,
  justifyContent: "flex-start",
  width: "100%",
})
