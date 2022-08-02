import {recipe} from "@vanilla-extract/recipes"

export const font = recipe({
  variants: {
    variant: {
      body: {
        fontSize: "1rem",
        fontWeight: 400,
        letterSpacing: "0.03em",
        lineHeight: 1.5,
      },
      button: {
        fontSize: "0.875rem",
        fontWeight: 400,
        letterSpacing: "0.03em",
        lineHeight: "normal",
      },
      buttonLarge: {
        fontSize: "1.125rem",
        fontWeight: 400,
        letterSpacing: "0.03em",
        lineHeight: "normal",
      },
      caption: {
        fontSize: "0.75rem",
        fontWeight: 400,
        letterSpacing: "0.03333em",
        lineHeight: 1.66,
      },
      overline: {
        fontSize: "0.625rem",
        fontWeight: 400,
        letterSpacing: "0.08333em",
        lineHeight: 1.5,
        textTransform: "uppercase",
      },
      subtitle: {
        fontSize: "0.875rem",
        fontWeight: 400,
        letterSpacing: "0em",
        lineHeight: 1.57,
      },
    },
  },
})
