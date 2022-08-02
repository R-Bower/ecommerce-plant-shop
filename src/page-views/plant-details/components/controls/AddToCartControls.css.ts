import {style} from "@vanilla-extract/css"

import {font} from "~styles/font.css"
import {sx} from "~styles/sx.css"
import {breakpoints} from "~styles/system"
import {theme} from "~styles/theme.css"

export const addToCartButtonWrapperStyle = style({
  "@media": {
    [breakpoints.mobile]: {flex: 2},
    [breakpoints.tablet]: {
      flex: 1,
    },
    [breakpoints.laptop]: {
      flex: 1,
    },
    [breakpoints.desktop]: {
      flex: 2,
    },
  },
  flex: 1,
})

export const counterStyle = style({
  "@media": {
    [breakpoints.laptop]: {
      maxWidth: 150,
    },
  },
  border: "1px solid",
  borderColor: theme.color.border,
  display: "flex",
  flex: 1,
})

export const addToCartButtonStyle = style([
  font({variant: "buttonLarge"}),
  sx({
    py: 12,
    width: "100%",
  }),
  {
    ":hover": {
      backgroundColor: theme.color.secondaryMain,
      color: theme.color.primaryMain,
    },
    backgroundColor: theme.color.primaryMain,
    border: 0,
    color: theme.color.white,
    cursor: "pointer",
    transition: ["background-color", "color"].map(
      (value) => `${value} 200ms ${theme.animations.easing.easeInOut}`,
    ),
  },
])

export const countButtonStyle = style({
  alignItems: "center",
  backgroundColor: theme.color.backgroundMain,
  border: 0,
  color: theme.color.primaryMain,
  cursor: "pointer",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  minHeight: 48,
  padding: 0,
  width: "100%",
})

export const plusIconStyle = style({
  transform: "rotate(45deg)",
})
