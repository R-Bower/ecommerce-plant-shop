interface Condition {
  "@media"?: string
  "@supports"?: string
  selector?: string
}

interface Breakpoints {
  desktop: string
  mobile: string
  tablet: string
}

export const breakpoints: Breakpoints = {
  desktop: "screen and (min-width: 1024px)",
  mobile: "screen and (min-width: 414px)",
  tablet: "screen and (min-width: 768px)",
}

export const conditions: Record<string, Condition> = {
  default: {},
  desktop: {"@media": breakpoints.desktop},
  mobile: {"@media": breakpoints.mobile},
  tablet: {"@media": breakpoints.tablet},
}

export const defaultCondition = "default"

export const responsiveArray = ["default", "mobile", "tablet", "desktop"]
