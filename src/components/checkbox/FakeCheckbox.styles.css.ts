import {style} from "@vanilla-extract/css"

import {theme} from "~styles/theme.css"

export const fakeCheckboxWrapperStyle = style({
  borderRadius: "3px",
  transition: `background-color 161ms ${theme.animations.easing.easeInOut}`,
})
