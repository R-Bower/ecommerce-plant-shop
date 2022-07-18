import {style} from "@vanilla-extract/css"

import {theme} from "../../styles/theme.css"

export const headerStyle = style({
  backgroundColor: theme.color.primary.main,
})

export const logoStyle = style({
  color: theme.color.common.white,
  cursor: "pointer",
  fill: theme.color.common.white,
})
