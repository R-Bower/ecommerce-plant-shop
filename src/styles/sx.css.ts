import {createSprinkles, defineProperties} from "@vanilla-extract/sprinkles"

import {
  conditions,
  defaultCondition,
  flex,
  fontSize,
  fontWeight,
  leftTopRightBottom,
  letterSpacing,
  lineHeight,
  size,
  space,
} from "./system"
import {theme} from "./theme.css"

const fontProperties = defineProperties({
  conditions,
  defaultCondition,
  properties: {
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    textTransform: ["inherit", "capitalize", "uppercase", "lowercase"],
  },
  responsiveArray: ["default", "mobile", "tablet", "desktop"],
})

/*
 * Common CSS properties for layout components.
 */
const sxProperties = defineProperties({
  conditions,
  defaultCondition,
  properties: {
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    alignSelf: ["stretch", "flex-start", "center", "flex-end"],
    bottom: leftTopRightBottom,
    boxShadow: theme.shadows,
    columnGap: space,
    display: [
      "flex",
      "inline-flex",
      "grid",
      "block",
      "inline-block",
      "inline",
      "none",
    ],
    flex,
    flexDirection: ["row", "column", "column-reverse", "row-reverse"],
    height: size,
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    left: leftTopRightBottom,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    marginTop: space,
    maxHeight: size,
    maxWidth: size,
    minHeight: size,
    minWidth: size,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    paddingTop: space,
    position: ["fixed", "absolute", "relative", "static", "sticky"],
    right: leftTopRightBottom,
    rowGap: space,
    top: leftTopRightBottom,
    whiteSpace: ["nowrap", "normal", "pre"],
    width: size,
  },
  responsiveArray: ["default", "mobile", "tablet", "desktop"],
  shorthands: {
    gap: ["columnGap", "rowGap"],
    m: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
    mb: ["marginBottom"],
    ml: ["marginLeft"],
    mr: ["marginRight"],
    mt: ["marginTop"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    p: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    pb: ["paddingBottom"],
    pl: ["paddingLeft"],
    pr: ["paddingRight"],
    pt: ["paddingTop"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    size: ["width", "height"],
  },
})

export const font = createSprinkles(fontProperties)
export const sx = createSprinkles(sxProperties)
