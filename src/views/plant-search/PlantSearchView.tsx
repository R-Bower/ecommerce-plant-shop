import clsx from "clsx"
import React from "react"

import {usePlantSearchQuery} from "~api/plants"
import {bodyFont} from "~styles/body-font.css"
import {sx} from "~styles/sx.css"

import {PlantCard, SearchFilters} from "./components"
import {plantWrapperStyle} from "./PlantSearchView.css"

export function PlantSearchView(): React.ReactElement {
  const {data, error, loading} = usePlantSearchQuery({})

  React.useEffect(() => {
    if (error) {
      console.debug("error", error)
    } else {
      console.debug(data)
    }
  }, [data, error])

  const [page, setPage] = React.useState(0)
  const [pageSize, setPageSize] = React.useState(20)

  return (
    <div
      className={clsx(
        sx({
          display: "flex",
          flex: 1,
          flexDirection: "column",
          gap: 40,
        }),
      )}
    >
      <div
        className={sx({
          display: "flex",
          justifyContent: ["center", "center", "flex-start"],
        })}
      >
        <h2>All Plants</h2>
      </div>
      <div
        className={clsx(
          sx({
            display: "flex",
            flex: 1,
            gap: 40,
          }),
        )}
        id={"plant-search-wrapper"}
      >
        {/* Filters */}
        <div
          className={clsx(
            sx({
              display: ["none", "none", "flex"],
              flexDirection: "column",
              gap: 16,
            }),
          )}
          id={"plant-search-filter-wrapper"}
        >
          <p
            className={clsx(
              sx({
                color: "textSecondary",
              }),
              bodyFont({
                variant: "overline",
              }),
            )}
          >
            Filter By
          </p>

          <SearchFilters
            enabledValues={data.filters.enabledValues}
            filters={data.filters.filters}
          />
        </div>

        {/* Plants */}
        <div className={clsx(plantWrapperStyle)}>
          {data.plants.slice(0, (page + 1) * pageSize).map((plant) => {
            return <PlantCard key={plant.id} plant={plant} />
          })}
        </div>
      </div>
    </div>
  )
}
