import clsx from "clsx"
import React from "react"
import {useRecoilState, useRecoilValue} from "recoil"

import {usePlantSearchQuery} from "~api/plants"
import {CircleLoader} from "~components/loaders"
import {useUrlSync} from "~lib/url"
import {font} from "~styles/font.css"
import {sx} from "~styles/sx.css"

import {PlantCard, SearchFilters} from "./components"
import {loaderWrapperStyle, plantWrapperStyle} from "./PlantSearchView.css"
import {
  deserializePlantSearchUrl,
  getPlantFiltersInput,
  pageState,
  plantSearchUrlState,
  searchTextAtom,
  serializePlantSearchUrl,
} from "./state"
import {PlantSearchUrlState} from "./types"

const pageSize = 20

export function PlantSearchView(): React.ReactElement {
  const filters = useRecoilValue(getPlantFiltersInput)
  const [searchText, setSearchText] = useRecoilState(searchTextAtom)
  const [page, setPage] = useRecoilState(pageState)

  useUrlSync<PlantSearchUrlState>({
    baseUrl: "/plants/search",
    deserializerFn: deserializePlantSearchUrl,
    recoilState: plantSearchUrlState,
    serializerFn: serializePlantSearchUrl,
  })

  const {data, error, loading} = usePlantSearchQuery({
    filters,
    searchText,
  })

  React.useEffect(() => {
    if (error) {
      console.debug({apiError: error})
    }
  }, [error])

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
              font({
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
          {loading ? (
            <div
              className={clsx(
                loaderWrapperStyle,
                sx({
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                }),
              )}
            >
              <CircleLoader color={"primary"} size={"medium"} />
            </div>
          ) : null}
          {data.plants.slice(0, (page + 1) * pageSize).map((plant) => {
            return <PlantCard key={plant.id} plant={plant} />
          })}
        </div>
      </div>
    </div>
  )
}
