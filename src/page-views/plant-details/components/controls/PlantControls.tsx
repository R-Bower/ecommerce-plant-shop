import clsx from "clsx"
import React from "react"
import {useRecoilState} from "recoil"

import {PlantVariantDto} from "~api/plants"
import {sx} from "~styles/sx.css"

import {plantPotState, plantSizeState} from "../../state"

interface Props {
  variants: PlantVariantDto[]
}

export function PlantControls({variants}: Props): React.ReactElement {
  const [size, setSize] = useRecoilState(plantSizeState)
  const [pot, setPot] = useRecoilState(plantPotState)
  return (
    <div
      className={clsx(
        sx({
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }),
      )}
    ></div>
  )
}
