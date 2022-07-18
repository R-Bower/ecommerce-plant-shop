import {globalStyle} from "@vanilla-extract/css"

globalStyle(".cls-1", {isolation: "isolate"})
globalStyle(".cls-2", {mixBlendMode: "multiply"})
globalStyle(".cls-3", {fontFamily: "AlwynNew-Thin, Alwyn New", fontSize: 18})
globalStyle(".cls-3,.cls-4", {fontWeight: 200})
globalStyle(".cls-4", {
  fontFamily: "ProximaNovaT-Thin, Proxima Nova",
  fontSize: 12,
})
globalStyle(".cls-5", {letterSpacing: "-0.13em"})
