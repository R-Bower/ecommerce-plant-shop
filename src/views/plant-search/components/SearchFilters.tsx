import clsx from "clsx"
import React from "react"
import {useRecoilValue, useSetRecoilState} from "recoil"

import {EnabledFilterValuesDto, SearchFilterDto} from "~api/shared.schemas"
import {sx} from "~styles/sx.css"

import {activeFiltersAtom, toggleActiveFilter} from "../state"
import {FilterValueCheckbox} from "./FilterValueCheckbox"

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

  React.useEffect(() => {
    console.debug(activeFilters)
  }, [activeFilters])

  const onFilterChange = React.useCallback(
    (id: string, value: string, active: boolean) => {
      console.debug({id, value})
      toggleFilter({active, id, value})
    },
    [toggleFilter],
  )

  return (
    <div
      className={clsx(
        sx({
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }),
      )}
    >
      {filters.map((filter) => {
        const activeGroupFilters = activeFilters[filter.id] ?? {}
        const enabledGroupFilters = enabledValues[filter.id]
        return (
          <div
            key={filter.id}
            className={clsx(
              sx({display: "flex", flexDirection: "column", gap: 2}),
            )}
          >
            <div
              className={clsx(
                sx({display: "flex", flexDirection: "column", gap: 2}),
              )}
            >
              <h6>{filter.label}</h6>
              <div
                className={clsx(
                  sx({display: "flex", flexDirection: "column", gap: 2}),
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
          </div>
        )
      })}
    </div>
  )
}
