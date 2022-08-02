import {style, styleVariants} from "@vanilla-extract/css"
import {ComplexStyleRule} from "@vanilla-extract/css/dist/declarations/src/types"

import {theme} from "~styles/theme.css"

const activeStyle: ComplexStyleRule = {
  backgroundColor: theme.color.black,
  border: "1px solid",
  borderColor: theme.color.border,
  color: theme.color.white,
}

const baseStyle = style({
  ":hover": {
    ...activeStyle,
  },
  alignItems: "center",
  borderRadius: "50%",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  height: 36,
  justifyContent: "center",
  padding: 0,
  width: 36,
})

export const circleButtonStyle = styleVariants({
  active: [baseStyle, style(activeStyle)],
  default: [
    baseStyle,
    style({
      backgroundColor: theme.color.white,
      border: "1px solid",
      borderColor: theme.color.border,
    }),
  ],
})
