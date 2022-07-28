import {createGlobalTheme} from "@vanilla-extract/css"

const colors = {
  actionActive: "#fff",
  actionDisabled: "rgba(255, 255, 255, 0.3)",
  actionDisabledBackground: "rgba(255, 255, 255, 0.12)",
  actionFocus: "rgba(255, 255, 255, 0.12)",
  actionHover: "rgba(255, 255, 255, 0.08)",
  actionSelected: "rgba(255, 255, 255, 0.16)",

  backgroundDark: "#E0E0E0",
  backgroundElevation1:
    "linear-gradient(0deg, rgba(208, 188, 255, 0.05), rgba(208, 188, 255, 0.05)), #1C1B1F",
  backgroundElevation2:
    "linear-gradient(0deg, rgba(208, 188, 255, 0.08), rgba(208, 188, 255, 0.08)), #1C1B1F",
  backgroundElevation3:
    "linear-gradient(0deg, rgba(208, 188, 255, 0.11), rgba(208, 188, 255, 0.11)), #1C1B1F",
  backgroundElevation4:
    "linear-gradient(0deg, rgba(208, 188, 255, 0.12), rgba(208, 188, 255, 0.12)), #1C1B1F",
  backgroundElevation5:
    "linear-gradient(0deg, rgba(208, 188, 255, 0.14), rgba(208, 188, 255, 0.14)), #1C1B1F",
  backgroundMain: "#FFFFFF",

  border: "#B2BAC2",
  borderActive: "#A0AAB4",
  borderDisabled: "rgba(131, 131, 131, 0.24)",
  borderHover: "#F5F5F5",

  divider: "#EBEBEB",

  grey50: "#F3F6F9",
  grey100: "#E7EBF0",
  grey200: "#E0E3E7",
  grey300: "#CDD2D7",
  grey400: "#B2BAC2",
  grey500: "#A0AAB4",
  grey600: "#6F7E8C",
  grey700: "#3E5060",
  grey800: "#2D3843",
  grey900: "#1A2027",
  greyA100: "#f5f5f5",
  greyA200: "#eeeeee",
  greyA400: "#bdbdbd",
  greyA700: "#616161",

  primaryDark: "#2a3921",
  primaryLight: "#668950",
  primaryMain: "#425934",

  secondaryDark: "#a5b51d",
  secondaryLight: "#dfeb81",
  secondaryMain: "#cfe03f",

  textDisabled: "rgba(131, 131, 131, 0.48)",
  textPrimary: "#424242",
  textSecondary: "#838383",

  white: "#FFF",
}

export type Color = keyof typeof colors

export const theme = createGlobalTheme("#app", {
  animations: {
    easeInOut: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
  },
  color: colors,
  font: {
    body: "'Red Hat Text', sans-serif",
    headings: "'Red Hat Text', sans-serif",
  },
  shadows: {
    0: "none",
    1: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
    2: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
    3: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
    4: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
    5: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
  },
})
