import clsx from "clsx"
import React from "react"
import {useRecoilValue, useSetRecoilState} from "recoil"

import {
  EnabledFilterValuesDto,
  isFilterId,
  PlantFilterId,
  SearchFilterDto,
} from "~api/plants"
import {
  CareLevelIcon,
  CleaningIcon,
  FertilizingIcon,
  HumidityIcon,
  LightLevelIcon,
  PetFriendlyFilterIcon,
  RePottingIcon,
  WaterIcon,
} from "~components/icons"
import {sx} from "~styles/sx.css"

import {activeFiltersAtom, toggleActiveFilter} from "../state"
import {FilterValueCheckbox} from "./FilterValueCheckbox"

const filterIcons: Record<PlantFilterId, React.ElementType> = {
  [PlantFilterId.RePotting]: RePottingIcon,
  [PlantFilterId.Cleaning]: CleaningIcon,
  [PlantFilterId.Fertilizing]: FertilizingIcon,
  [PlantFilterId.Humidity]: HumidityIcon,
  [PlantFilterId.Light]: LightLevelIcon,
  [PlantFilterId.Water]: WaterIcon,
  [PlantFilterId.CareLevel]: CareLevelIcon,
  [PlantFilterId.PetSafe]: PetFriendlyFilterIcon,
  [PlantFilterId.Size]: FertilizingIcon,
}

interface Props {
  enabledValues: EnabledFilterValuesDto
  filters: SearchFilterDto[]
}

export function SearchFilters({
  enabledValues,
  filters,
}: Props): React.ReactElement {
  const activeFilters = useRecoilValue(activeFiltersAtom)
  const toggleFilter = useSetRecoilState(toggleActiveFilter)

  const onFilterChange = React.useCallback(
    (id: string, value: string, active: boolean) => {
      if (isFilterId(id)) {
        toggleFilter({active, id, value})
      } else {
        console.debug(`Unsupported filter: ${id}`)
      }
    },
    [toggleFilter],
  )

  return (
    <div
      className={clsx(
        sx({
          display: "flex",
          flexDirection: "column",
          gap: 24,
          minWidth: 250,
        }),
      )}
    >
      {filters.map((filter) => {
        const Icon = filterIcons[filter.id]
        const activeGroupFilters = activeFilters[filter.id] ?? {}
        const enabledGroupFilters = enabledValues[filter.id] ?? {}
        return (
          <div
            key={filter.id}
            className={clsx(
              sx({display: "flex", flexDirection: "column", gap: 8}),
            )}
          >
            <div
              className={clsx(
                sx({
                  alignItems: "center",
                  display: "flex",
                  gap: 8,
                }),
              )}
            >
              {Icon ? <Icon height={20} width={20} /> : null}
              <h6>{filter.label}</h6>
            </div>

            <div
              className={clsx(
                sx({display: "flex", flexDirection: "column", gap: 4}),
              )}
            >
              {filter.values.map((value) => {
                const enabled = enabledGroupFilters[value]
                return (
                  <FilterValueCheckbox
                    key={`${filter.id}${value}`}
                    checked={Boolean(activeGroupFilters[value])}
                    disabled={!enabled}
                    filterGroupId={filter.id}
                    onChange={onFilterChange}
                    value={value}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
