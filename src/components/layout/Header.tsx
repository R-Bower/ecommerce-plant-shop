import React from "react"

import {sx} from "../../styles/sx.css"

export function Header(): React.ReactElement {
  return (
    <div
      className={sx({
        display: "flex",
        flex: 1,
      })}
    ></div>
  )
}
