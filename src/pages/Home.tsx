import React from "react"

import {sx} from "../styles/sx.css"

export default function HomePage() {
  return (
    <section
      className={sx({
        alignItems: "center",
        display: "flex",
        flexDirection: ["column-reverse", "column-reverse", "column"],
        justifyContent: "center",
        mx: [1, 36, 64, 72],
        p: 48,
      })}
    >
      <h2>Home</h2>
      <p>This is the home page.</p>

      <div
        className={sx({
          display: "flex",
          gap: 16,
        })}
      ></div>
    </section>
  )
}
