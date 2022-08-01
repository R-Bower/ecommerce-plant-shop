import {UrlFilterState} from "~api/plants"

export interface PlantSearchUrlState {
  activeFilters: UrlFilterState
  page: number
  searchText: string
}
