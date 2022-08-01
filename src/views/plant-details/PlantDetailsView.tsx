import clsx from "clsx"
import React from "react"

import {PlantDto} from "~api/plants"
import {sx} from "~styles/sx.css"

import {ContentPane} from "./components"

interface Props {
  plant: PlantDto
}

export function PlantDetailsView({plant}: Props): React.ReactElement {
  return (
    <div
      className={clsx(
        sx({
          display: "flex",
          flexDirection: ["column", "column", "column", "row"],
        }),
      )}
    >
      <ContentPane plant={plant}></ContentPane>
    </div>
  )
}
