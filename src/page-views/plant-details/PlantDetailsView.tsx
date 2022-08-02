import clsx from "clsx"
import {useRouter} from "next/router"
import React from "react"
import {useSetRecoilState} from "recoil"

import {PlantDto} from "~api/plants"
import {useUrlSync} from "~lib/url"

import {ContentPane, ImagePane} from "./components"
import {useActivePlantStats} from "./hooks"
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
  const router = useRouter()

  function makeSerializerFunction(): (state: PlantDetailsUrlState) => string {
    return (state) => serializePlantDetailsUrl(state, router.query.id as string)
  }

  const setState = useSetRecoilState(plantDetailsUrlState)

  React.useEffect(() => {
    const urlState = deserializePlantDetailsUrl(window.location.search)
    setState(urlState)
  }, [setState])

  useUrlSync<PlantDetailsUrlState>({
    baseUrl: router.pathname.replace("[id]", router.query.id as string),
    deserializerFn: deserializePlantDetailsUrl,
    recoilState: plantDetailsUrlState,
    serializerFn: makeSerializerFunction(),
  })

  const {activePot, activeSize, imgSrc, price} = useActivePlantStats(plant)

  return (
    <div className={clsx(plantDetailsRootWrapper)}>
      <ImagePane imgSrc={imgSrc} plant={plant} />

      <ContentPane
        activePot={activePot}
        activeSize={activeSize}
        plant={plant}
        price={price}
      />
    </div>
  )
}
