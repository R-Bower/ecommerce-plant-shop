import {style} from "@vanilla-extract/css"

import {sx} from "./sx.css"
import {breakpoints} from "./system"

export const sitePaddingX = style({
  "@media": {
    [breakpoints.mobile]: {paddingLeft: "20px", paddingRight: "20px"},
    [breakpoints.tablet]: {paddingLeft: "40px", paddingRight: "40px"},
    [breakpoints.laptop]: {paddingLeft: "60px", paddingRight: "60px"},
    [breakpoints.desktop]: {},
  },
  paddingLeft: "20px",
  paddingRight: "20px",
})

export const siteContentWrapper = style({
  "@media": {
    [breakpoints.desktop]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "1337px",
      width: "100%",
    },
  },
  maxWidth: "auto",
})

export const contentPaddingY = sx({
  pt: [40, 40, 80],
})
