import {
  ComplexStyleRule,
  globalFontFace,
  globalStyle,
} from "@vanilla-extract/css"

import {theme} from "./theme.css"

export const fontFamily = `'Avenir Next', sans-serif`

const commonTextProps: ComplexStyleRule = {
  color: theme.color.text.primary,
  fontFamily,
}

globalStyle("html", {
  fontFamily: "'Red Hat Text', sans-serif",
  fontSize: 16,
})

globalStyle("html, body, div, span, li", {
  boxSizing: "border-box",
})

globalStyle("h1, h2, h3, h4, h5, h6, p", {
  margin: 0,
  padding: 0,
})

globalStyle("h1, h2, h3, h4, h5", {
  fontWeight: 400,
  lineHeight: 1.3,
})

globalStyle("body", {
  margin: 0,
})

globalStyle("html, body, ul, li", {
  color: theme.color.text.primary,
  fontFamily,
  margin: 0,
  padding: 0,
})

globalFontFace(fontFamily, {
  fontDisplay: "fallback",
  src: "local(Proxima Nova)",
})

globalStyle("#app", {
  backgroundColor: theme.color.background.dark,
  color: theme.color.text.primary,
  margin: 0,
  minHeight: "100vh",
  minWidth: "100vw",
  padding: 0,
})

const h1: ComplexStyleRule = {
  ...commonTextProps,
  fontSize: "3.052rem",
}

const h2: ComplexStyleRule = {
  ...commonTextProps,
  fontSize: "2.441rem",
}

const h3: ComplexStyleRule = {
  ...commonTextProps,
  fontSize: "1.953rem",
}

const h4: ComplexStyleRule = {
  ...commonTextProps,
  fontSize: "1.563rem",
}

const h5: ComplexStyleRule = {
  ...commonTextProps,
  fontSize: "1.25rem",
}

const h6: ComplexStyleRule = {
  ...commonTextProps,
  fontSize: "1.25rem",
  fontWeight: 500,
  letterSpacing: "0.0075em",
  lineHeight: 1.6,
}

const body: ComplexStyleRule = {
  ...commonTextProps,
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.5,
}

const button: ComplexStyleRule = {
  fontFamily,
}

globalStyle("h1", h1)
globalStyle("h2", h2)
globalStyle("h3", h3)
globalStyle("h4", h4)
globalStyle("h5", h5)
globalStyle("h6", h6)
globalStyle("p, span, output", body)
globalStyle("button", button)
