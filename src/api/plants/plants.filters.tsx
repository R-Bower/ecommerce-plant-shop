import {sort} from "rambda"

import {ensureArray} from "~lib/utils"

import {PlantFilterId} from "./plants.enums"
import {PlantDto, PlantFilterInputDto, SearchFilterDto} from "./plants.schemas"

type EnabledFilterValues = Partial<
  Record<PlantFilterId, Record<string, boolean>>
>

const enabledFilters = new Set<PlantFilterId>([
  PlantFilterId.CareLevel,
  PlantFilterId.Cleaning,
  PlantFilterId.Fertilizing,
  PlantFilterId.Humidity,
  PlantFilterId.Light,
  PlantFilterId.PetSafe,
  PlantFilterId.RePotting,
  PlantFilterId.Size,
  PlantFilterId.Water,
])

export function isFilterId(id: string | PlantFilterId): id is PlantFilterId {
  return enabledFilters.has(id as any)
}

const filterLabels: Record<string, string> = {
  [PlantFilterId.CareLevel]: "Care Level",
  [PlantFilterId.PetSafe]: "Pet Safe",
  [PlantFilterId.Size]: "Size",
}

const filterSortOrder: Record<PlantFilterId, Record<string, number>> = {
  [PlantFilterId.Size]: {},
  [PlantFilterId.Cleaning]: {
    __SIDEBAR: 8,
    "After bloom begins to die": 3,
    "As needed": 4,
    "Bi-annually": 2,
    Monthly: 1,
  },
  [PlantFilterId.Fertilizing]: {
    __SIDEBAR: 7,
    "Every two weeks": 2,
    "Every two years": 6,
    Monthly: 3,
    Seasonally: 4,
    Weekly: 1,
    Yearly: 5,
  },
  [PlantFilterId.Humidity]: {
    __SIDEBAR: 6,
    High: 3,
    Low: 1,
    Medium: 2,
  },
  [PlantFilterId.Light]: {__SIDEBAR: 4, High: 3, Low: 1, Medium: 2},
  [PlantFilterId.RePotting]: {
    "2 Years": 3,
    "3 Years": 4,
    "4 Years": 5,
    Rarely: 1,
    Yearly: 2,
  },
  [PlantFilterId.Water]: {__SIDEBAR: 5, High: 3, Low: 1, Medium: 2},
  [PlantFilterId.CareLevel]: {
    __SIDEBAR: 3,
    "High Maintenance": 2,
    "I'm Easy": 1,
    "Plays Hard to Get": 3,
  },
  [PlantFilterId.PetSafe]: {__SIDEBAR: 2, No: 2, Yes: 1},
}

/*
 * A function that constructs the available filters from the properties in each
 * plant from the parameters.  If a plant in the results has a property, the
 * filter will be enabled.  Otherwise, disabled.
 */
export function getPlantFilters(plants: PlantDto[]): {
  enabledValues: EnabledFilterValues
  filters: SearchFilterDto[]
} {
  const filterGroups: EnabledFilterValues = plants.reduce(
    (acc: EnabledFilterValues, {careGuide, metadata}: PlantDto) => {
      // the pet-safe field may not be present if the plant isn't pet-safe.
      // We account for this manually.
      let petSafe = false
      careGuide.forEach(({id, label, value}) => {
        if (!isFilterId(id)) {
          return
        }
        if (!enabledFilters.has(id)) {
          return
        }

        if (value.length) {
          if (!acc[id]) {
            acc[id] = {}
          }
          // @ts-expect-error typescript drudgery
          acc[id][label] = true
        }
      })
      metadata.forEach(({id, value}) => {
        if (!isFilterId(id)) {
          return
        }
        if (!enabledFilters.has(id)) {
          return
        }
        if (id === "pet-safe") {
          petSafe = value === "Yes"
          // @ts-expect-error typescript drudgery
          acc[PlantFilterId.PetSafe]["Yes"] = true
        } else {
          if (!acc[id]) {
            acc[id] = {}
          }
          // this is an interface issue – the value field's type is always a
          // string.  TODO: update interface
          // @ts-expect-error typescript drudgery
          acc[id][value as string] = true
        }
      })

      if (!petSafe) {
        // @ts-expect-error typescript drudgery
        acc[PlantFilterId.PetSafe]["No"] = true
      }
      return acc
    },
    {[PlantFilterId.PetSafe]: {}},
  )

  return {
    enabledValues: filterGroups,
    filters: Object.keys(filterGroups)
      .map((_id) => {
        const id = _id as PlantFilterId
        const valueSet = filterGroups[id]
        const values = sort((val1, val2) => {
          return filterSortOrder[id][val1] - filterSortOrder[id][val2]
        }, Object.keys(valueSet as Record<string, boolean>))
        return {
          id,
          label: filterLabels[id] || id,
          values,
        }
      })
      .sort((val1, val2) => {
        return (
          filterSortOrder[val1.id as PlantFilterId].__SIDEBAR -
          filterSortOrder[val2.id as PlantFilterId].__SIDEBAR
        )
      }),
  }
}

export function filterPlants(
  filters: PlantFilterInputDto[],
  searchText: string,
  plants: PlantDto[],
): PlantDto[] {
  if (!filters.length) {
    return plants
  }

  return plants.reduce((acc: PlantDto[], currentValue: PlantDto) => {
    const {careGuide, metadata} = currentValue
    const plantFilterOptions = [
      ...careGuide.map((val) => {
        return {id: val.id, value: [val.label]}
      }),
      ...metadata,
    ]
    const matchesFilters = filters.every((filter) => {
      if (filter.id === PlantFilterId.Size) {
        // TODO: handle size
        return true
      }
      const target = plantFilterOptions.find(
        (option) => option.id === filter.id,
      )
      if (!target) {
        return false
      }
      return filter.values.every((value) => {
        return ensureArray(target.value).includes(value)
      })
    })
    if (matchesFilters) {
      acc.push(currentValue)
    }
    return acc
  }, [])
}
