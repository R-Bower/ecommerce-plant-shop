import {createSprinkles, defineProperties} from "@vanilla-extract/sprinkles"

import {
  conditions,
  defaultCondition,
  leftTopRightBottom,
  systemFlex,
  systemSize,
  systemSpace,
} from "./system"
import {theme} from "./theme.css"

/*
 * Common CSS properties for layout components.
 */
const sxProperties = defineProperties({
  conditions,
  defaultCondition,
  properties: {
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    alignSelf: ["stretch", "flex-start", "center", "flex-end"],
    backgroundColor: theme.color,
    bottom: leftTopRightBottom,
    boxShadow: theme.shadows,
    color: theme.color,
    columnGap: systemSpace,
    cursor: ["initial", "pointer"],
    display: ["flex", "inline-flex", "none"],
    fill: theme.color,
    flex: systemFlex,
    flexDirection: ["row", "column", "column-reverse", "row-reverse"],
    height: systemSize,
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    left: leftTopRightBottom,
    marginBottom: systemSpace,
    marginLeft: systemSpace,
    marginRight: systemSpace,
    marginTop: systemSpace,
    maxHeight: systemSize,
    maxWidth: systemSize,
    minHeight: systemSize,
    minWidth: systemSize,
    paddingBottom: systemSpace,
    paddingLeft: systemSpace,
    paddingRight: systemSpace,
    paddingTop: systemSpace,
    position: ["fixed", "absolute", "relative", "static", "sticky"],
    right: leftTopRightBottom,
    rowGap: systemSpace,
    top: leftTopRightBottom,
    whiteSpace: ["nowrap", "normal", "pre"],
    width: systemSize,
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

export const sx = createSprinkles(sxProperties)
