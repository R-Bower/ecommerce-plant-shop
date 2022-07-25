import {createSprinkles, defineProperties} from "@vanilla-extract/sprinkles"
import {Property} from "csstype"

import {
  conditions,
  defaultCondition,
  leftTopRightBottom,
  systemFlex,
  systemSize,
  systemSpace,
} from "./system"
import {theme} from "./theme.css"

const borders: Property.BorderTop<any> = [
  "1px solid",
  "1px dashed",
  "1px dotted",
]

/*
 * Common CSS properties for layout components.
 */
const sxProperties = defineProperties({
  conditions,
  defaultCondition,
  properties: {
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    alignSelf: ["stretch", "flex-start", "center", "flex-end"],
    appearance: ["none"],
    backgroundColor: theme.color,
    borderBottom: borders,
    borderBottomColor: theme.color,
    borderLeft: borders,
    borderLeftColor: theme.color,
    borderRight: borders,
    borderRightColor: theme.color,
    borderTop: borders,
    borderTopColor: theme.color,
    bottom: leftTopRightBottom,
    boxShadow: theme.shadows,
    color: theme.color,
    columnGap: systemSpace,
    cursor: ["pointer"],
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
    overflowX: ["visible", "hidden", "clip", "scroll"],
    overflowY: ["visible", "hidden", "clip", "scroll"],
    paddingBottom: systemSpace,
    paddingLeft: systemSpace,
    paddingRight: systemSpace,
    paddingTop: systemSpace,
    position: ["fixed", "absolute", "relative", "static", "sticky"],
    right: leftTopRightBottom,
    rowGap: systemSpace,
    top: leftTopRightBottom,
    userSelect: ["none", "contain", "text"],
    whiteSpace: ["nowrap", "normal", "pre"],
    width: systemSize,
  },
  responsiveArray: ["default", "mobile", "tablet", "desktop"],
  shorthands: {
    border: ["borderTop", "borderRight", "borderBottom", "borderLeft"],
    borderColor: [
      "borderTopColor",
      "borderRightColor",
      "borderBottomColor",
      "borderLeftColor",
    ],
    gap: ["columnGap", "rowGap"],
    m: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
    mb: ["marginBottom"],
    ml: ["marginLeft"],
    mr: ["marginRight"],
    mt: ["marginTop"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    overflow: ["overflowX", "overflowY"],
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
