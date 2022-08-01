import React from "react"

import {PlantDto} from "~api/plants"

import {contentPaneRootStyle} from "./ContentPane.css"

interface Props {
  plant: PlantDto
}

export function ContentPane({plant}: Props): React.ReactElement {
  return <div className={contentPaneRootStyle}></div>
}
