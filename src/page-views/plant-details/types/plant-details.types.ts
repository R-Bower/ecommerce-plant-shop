import React from "react"

import {PlantPotId, PlantSizeId} from "~api/plants"

export type PlantDetailsUrlState = {
  plantSize?: PlantSizeId
  plantVariant?: PlantPotId
}

export interface ButtonListOption {
  icon?: React.ElementType
  id: string
  label: string
}
