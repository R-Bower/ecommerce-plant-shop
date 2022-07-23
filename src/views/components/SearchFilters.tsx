import clsx from "clsx"
import React from "react"

import {sx} from "~styles/sx.css"

export function SearchFilters(): React.ReactElement {
  return (
    <div
      className={clsx(
        sx({
          display: "flex",
          flexDirection: "column",
        }),
      )}
    ></div>
  )
}
