import clsx from "clsx"
import React from "react"

import {PlantDto} from "~api/plants"
import {plantDetailsRoute} from "~lib/routes"
import {useUrlSync} from "~lib/url"

import {ContentPane, ImagePane} from "./components"
import {plantDetailsRootWrapper} from "./PlantDetailsView.css"
import {
  deserializePlantDetailsUrl,
  plantDetailsUrlState,
  serializePlantDetailsUrl,
} from "./state"
import {PlantDetailsUrlState} from "./types"

interface Props {
  plant: PlantDto
}

export function PlantDetailsView({plant}: Props): React.ReactElement {
  useUrlSync<PlantDetailsUrlState>({
    baseUrl: plantDetailsRoute.path,
    deserializerFn: deserializePlantDetailsUrl,
    recoilState: plantDetailsUrlState,
    serializerFn: serializePlantDetailsUrl,
  })
  return (
    <div className={clsx(plantDetailsRootWrapper)}>
      <ImagePane plant={plant} />

      <ContentPane plant={plant} />
    </div>
  )
}
