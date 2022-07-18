import {createGlobalTheme} from "@vanilla-extract/css"

export const theme = createGlobalTheme("#app", {
  color: {
    action: {
      active: "#fff",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      focus: "rgba(255, 255, 255, 0.12)",
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "rgba(255, 255, 255, 0.16)",
    },
    background: {
      dark: "#E0E0E0",
      elevation: {
        1: "linear-gradient(0deg, rgba(208, 188, 255, 0.05), rgba(208, 188, 255, 0.05)), #1C1B1F",
        2: "linear-gradient(0deg, rgba(208, 188, 255, 0.08), rgba(208, 188, 255, 0.08)), #1C1B1F",
        3: "linear-gradient(0deg, rgba(208, 188, 255, 0.11), rgba(208, 188, 255, 0.11)), #1C1B1F",
        4: "linear-gradient(0deg, rgba(208, 188, 255, 0.12), rgba(208, 188, 255, 0.12)), #1C1B1F",
        5: "linear-gradient(0deg, rgba(208, 188, 255, 0.14), rgba(208, 188, 255, 0.14)), #1C1B1F",
      },
      main: "#FFFFFF",
    },
    border: {
      active: "#E0E0E0",
      disable: "rgba(131, 131, 131, 0.24)",
      hover: "#F5F5F5",
    },
    common: {
      white: "#FFF",
    },
    divider: "#EBEBEB",
    grey: {
      "50": "#F3F6F9",
      "100": "#E7EBF0",
      "200": "#E0E3E7",
      "300": "#CDD2D7",
      "400": "#B2BAC2",
      "500": "#A0AAB4",
      "600": "#6F7E8C",
      "700": "#3E5060",
      "800": "#2D3843",
      "900": "#1A2027",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
    },
    primary: {
      dark: "#2a3921",
      light: "#668950",
      main: "#425934",
    },
    secondary: {
      dark: "#a5b51d",
      light: "#dfeb81",
      main: "#cfe03f",
    },
    text: {
      disabled: "rgba(131, 131, 131, 0.48)",
      primary: "#424242",
      secondary: "#838383",
    },
  },
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
