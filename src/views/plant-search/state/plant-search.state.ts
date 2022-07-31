import {atom, DefaultValue, selector} from "recoil"

import {PlantFilterId, PlantFilterInputDto} from "~api/plants"

export type ActiveFilters = Record<PlantFilterId, Record<string, boolean>>

export const searchTextAtom = atom<string>({
  default: "",
  key: "searchTextAtom",
})

const defaultActiveFilters: ActiveFilters = {
  [PlantFilterId.RePotting]: {},
  [PlantFilterId.Cleaning]: {},
  [PlantFilterId.Fertilizing]: {},
  [PlantFilterId.Humidity]: {},
  [PlantFilterId.Light]: {},
  [PlantFilterId.Water]: {},
  [PlantFilterId.CareLevel]: {},
  [PlantFilterId.PetSafe]: {},
  [PlantFilterId.Size]: {},
}

Object.freeze(defaultActiveFilters)

export const activeFiltersAtom = atom<ActiveFilters>({
  default: defaultActiveFilters,
  key: "activeFiltersAtom",
})

export const toggleActiveFilter = selector<{
  active: boolean
  id: PlantFilterId
  value: string
}>({
  get: () => {
    throw new Error(
      "Not a value getter – this selector is only used for setting state.",
    )
  },
  key: "toggleActiveFilter",
  set: ({get, set}, newValue) => {
    if (newValue instanceof DefaultValue) {
      throw new Error("Resetting this selector has no effect")
    }
    const {active, id, value} = newValue
    const activeFilters = get(activeFiltersAtom)

    const group = activeFilters[id]
    if (!group) {
      set(activeFiltersAtom, {...activeFilters, [id]: {[value]: active}})
    } else {
      set(activeFiltersAtom, {
        ...activeFilters,
        [id]: {...group, [value]: active},
      })
    }
  },
})

export const getPlantFiltersInput = selector<PlantFilterInputDto[]>({
  get: ({get}) => {
    const activeFilters = get(activeFiltersAtom)
    return Object.keys(activeFilters)
      .sort()
      .map((id) => {
        const values = activeFilters[id as PlantFilterId]
        return {
          id: id as PlantFilterId,
          values: Object.keys(values).filter((key) => values[key]),
        }
      })
      .filter(({values}) => values.length)
  },
  key: "getPlantFiltersInput",
})
