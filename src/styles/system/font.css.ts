import {createSprinkles, defineProperties} from "@vanilla-extract/sprinkles"

import {conditions, defaultCondition} from "./responsive"
import {fontSize, fontWeight, letterSpacing, lineHeight} from "./typography"

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

export const fontSx = createSprinkles(fontProperties)
