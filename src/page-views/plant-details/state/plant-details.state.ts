import {atom, DefaultValue, selector} from "recoil"

import {PlantPotId, PlantSizeId} from "~api/plants"
import {updateReasonAtom} from "~lib/url"

import {PlantDetailsUrlState} from "../types"

export const plantSizeAtom = atom<PlantSizeId | undefined>({
  default: undefined,
  key: "plantSizeAtom",
})

export const plantSizeState = selector<PlantSizeId | undefined>({
  get: ({get}) => {
    return get(plantSizeAtom)
  },
  key: "plantSizeState",
  set: ({set}, newValue) => {
    set(plantSizeAtom, newValue)
    set(updateReasonAtom, "changed")
  },
})

export const plantPotAtom = atom<PlantPotId | undefined>({
  default: undefined,
  key: "plantPotAtom",
})

export const plantPotState = selector<PlantPotId | undefined>({
  get: ({get}) => {
    return get(plantPotAtom)
  },
  key: "plantPotState",
  set: ({set}, newValue) => {
    set(plantPotAtom, newValue)
    set(updateReasonAtom, "changed")
  },
})

export const plantDetailsUrlState = selector<PlantDetailsUrlState>({
  get: ({get}) => {
    return {
      plantSize: get(plantSizeAtom),
      plantVariant: get(plantPotAtom),
    }
  },
  key: "plantDetailsUrlState",
  set: ({set}, urlState) => {
    if (urlState instanceof DefaultValue) {
      // resetting isn't allowed with this selector
      return
    }
    set(plantSizeAtom, urlState.plantSize)
    set(plantPotAtom, urlState.plantVariant)
  },
})
