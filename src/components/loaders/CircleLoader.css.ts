import {keyframes} from "@vanilla-extract/css"
import {recipe} from "@vanilla-extract/recipes"

import {theme} from "~styles/theme.css"

const circleLoaderKeyframes = keyframes({
  "0%": {transform: "rotate(0deg)"},
  "100%": {transform: "rotate(360deg)"},
})

const sizes = {
  large: {
    borderRight: "3px solid transparent",
    borderTop: "3px solid",
    height: "48px",
    width: "48px",
  },
  medium: {
    borderRight: "2px solid transparent",
    borderTop: "2px solid",
    height: "36px",
    width: "36px",
  },
  small: {
    borderRight: "1px solid transparent",
    borderTop: "2px solid",
    height: "24px",
    width: "24px",
  },
}

export type CircleLoaderSize = keyof typeof sizes

const colors = {
  grey: {
    borderTopColor: `${theme.color.grey500} !important`,
  },
  primary: {
    borderTopColor: `${theme.color.primaryLight} !important`,
  },
  white: {borderTopColor: `${theme.color.white} !important`},
}
export type CircleLoaderColor = keyof typeof colors

export const circleLoaderStyle = recipe({
  base: {
    animation: `${circleLoaderKeyframes} 0.9s linear infinite`,
    borderRadius: "50%",
    boxSizing: "border-box",
    display: "inline-block",
    height: "48px",
    width: "48px",
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
  },
  variants: {
    color: colors,
    size: sizes,
  },
})
