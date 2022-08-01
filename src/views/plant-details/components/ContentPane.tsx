import clsx from "clsx"
import React from "react"

import {PlantDto} from "~api/plants"
import {sx} from "~styles/sx.css"

import {contentPaneRootStyle} from "./ContentPane.css"

interface Props {
  plant: PlantDto
}

export function ContentPane({
  plant: {careGuide, description, id, metadata, title, variants},
}: Props): React.ReactElement {
  return (
    <section
      className={clsx(
        contentPaneRootStyle,
        sx({
          display: "flex",
          flexDirection: "column",
        }),
      )}
    >
      <h2
        className={clsx(
          sx({
            display: "inline-flex",
          }),
        )}
      >
        {title}
      </h2>
    </section>
  )
}
