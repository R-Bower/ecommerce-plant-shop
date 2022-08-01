import {globalStyle, style} from "@vanilla-extract/css"

import {theme} from "~styles/theme.css"

export const plantImageWrapperStyle = style({
  borderRadius: 6,
  cursor: "pointer",
  position: "relative",
  userSelect: "none",
})

globalStyle(`${plantImageWrapperStyle} img`, {
  borderRadius: 6,
})

// apply style when the card is hovered
export const plantCardViewNowStyle = style({
  backgroundColor: theme.color.primaryMain,
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  bottom: 0,
  height: 0,
  position: "absolute",
  selectors: {
    [`${plantImageWrapperStyle}:hover &`]: {
      height: 38,
      transition: `height 250ms ${theme.animations.easeInOut}`,
    },
  },
  transition: `height 150ms ${theme.animations.easeInOut}`,
  width: "100%",
  willChange: "transform",
})

export const viewNowTextStyle = style({
  display: "none",
  selectors: {
    [`${plantImageWrapperStyle}:hover &`]: {
      color: theme.color.white,
      display: "block",
    },
  },
})

export const plantLinkStyle = style({
  ":hover": {
    textDecoration: "none",
  },
  ":link": {
    textDecoration: "none",
  },
})
