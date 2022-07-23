import clsx from "clsx"
import React from "react"

import {usePlantSearchQuery} from "~api/plants"
import {bodyFont} from "~styles/body-font.css"
import {sx} from "~styles/sx.css"

import {SearchFilters} from "./components"

export function PlantSearchView(): React.ReactElement {
  const {data, loading} = usePlantSearchQuery({})

  React.useEffect(() => {
    console.debug(data)
  }, [data])

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
        <div
          className={clsx(
            sx({display: "flex", flex: 1, flexDirection: "column", width: 300}),
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
        </div>
        <SearchFilters />
      </div>
    </div>
  )
}
