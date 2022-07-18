import React from "react"

import {sx} from "../../styles/sx.css"

interface Props {
  children: React.ReactNode
}

export function Layout({children}: Props): React.ReactElement {
  return (
    <div
      className={sx({
        display: "flex",
        flex: 1,
        minHeight: "100vh",
        minWidth: "100vw",
        width: "100%",
      })}
      id={"app"}
    >
      <p>test</p>
      {children}
    </div>
  )
}
