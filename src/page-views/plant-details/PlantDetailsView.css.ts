import {style} from "@vanilla-extract/css"

import {breakpoints} from "~styles/system"

export const plantDetailsRootWrapper = style({
  "@media": {
    [breakpoints.mobile]: {},
    [breakpoints.tablet]: {
      alignItems: "center",
      flexDirection: "column",
    },
    [breakpoints.laptop]: {
      alignItems: "flex-start",
      flexDirection: "row",
      justifyContent: "center",
    },
  },
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: 32,
  justifyContent: "flex-start",
  width: "100%",
})
