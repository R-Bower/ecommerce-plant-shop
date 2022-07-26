import {globalStyle, style} from "@vanilla-extract/css"

export const plantImageWrapperStyle = style({
  borderRadius: 6,
})

globalStyle(`${plantImageWrapperStyle} img`, {
  borderRadius: 6,
})
