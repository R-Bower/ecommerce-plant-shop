import clsx from "clsx"
import React from "react"

import {sx} from "~styles/sx.css"

export function PlantSearchView(): React.ReactElement {
  return (
    <div
      className={clsx(
        sx({
          display: "flex",
          flex: 1,
        }),
      )}
    ></div>
  )
}
