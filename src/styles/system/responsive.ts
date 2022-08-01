interface Condition {
  "@media"?: string
  "@supports"?: string
  selector?: string
}

interface Breakpoints {
  desktop: string
  laptop: string
  mobile: string
  tablet: string
}

export type Breakpoint = keyof Breakpoints

export const breakpoints: Breakpoints = {
  desktop: "screen and (min-width: 1400px)",
  laptop: "screen and (min-width: 1024px)",
  mobile: "screen and (min-width: 414px)",
  tablet: "screen and (min-width: 768px)",
}

export const conditions: Record<string, Condition> = {
  default: {},
  desktop: {"@media": breakpoints.desktop},
  laptop: {"@media": breakpoints.laptop},
  mobile: {"@media": breakpoints.mobile},
  tablet: {"@media": breakpoints.tablet},
}

export const defaultCondition = "default"
