import clsx from "clsx"
import React from "react"
import {useRecoilState} from "recoil"

import {PlantDto, PlantSizeId, PlantVariantId} from "~api/plants"
import {sx} from "~styles/sx.css"

import {plantSizeState, plantVariantState} from "../state"
import {contentPaneRootStyle} from "./ContentPane.css"

interface Props {
  plant: PlantDto
}

export function ContentPane({
  plant: {careGuide, description, id, metadata, title, variants},
}: Props): React.ReactElement {
  const [size, setSize] = useRecoilState(plantSizeState)
  const [variant, setVariant] = useRecoilState(plantVariantState)

  const planters = variants[0]?.planters

  function getActiveSize(): PlantSizeId | undefined {
    if (size) {
      return size
    }
    if (!planters) {
      return
    }
    return variants[0].sizeId
  }

  const plantSize = getActiveSize()

  function getActiveVariant(): PlantVariantId | undefined {
    if (variant) {
      return variant
    }
    if (plantSize) {
      const targetVariant = variants.find((variant) => {
        if (variant.planters) {
          return variant.sizeId === plantSize
        } else {
          return false
        }
      })
      if (!targetVariant) {
        return
      }
    }
    if (!variant && planters?.length) {
      return planters[0].planterId
    }
  }

  const plantVariant = getActiveVariant()

  function getActivePrice(): string {
    if (!planters) {
      return variants[0].price
    }

    const targetPlanter = plantVariant
      ? planters.find((planter) => planter.planterId === plantVariant)
      : planters[0]

    return "0"
  }

  const plantPrice = getActivePrice()

  return (
    <section
      className={clsx(
        contentPaneRootStyle,
        sx({
          display: "flex",
          flexDirection: "column",
          gap: 16,
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
      <div>{plantSize}</div>
      <div>{plantVariant}</div>
      <div>{plantPrice}</div>
    </section>
  )
}
