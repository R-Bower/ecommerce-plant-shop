import {useQuery} from "@tanstack/react-query"

import {queryOptions} from "../../shared.constants"
import {PlantsApi} from "../plants.api"
import {PlantSearchRequestDto, PlantSearchResponseDto} from "../plants.schemas"

interface QueryResult {
  data: PlantSearchResponseDto
  error?: any
  loading: boolean
}

const defaultResponse: PlantSearchResponseDto = {
  filters: {
    enabledValues: {},
    filters: [],
  },
  numberFound: 0,
  plants: [],
}

export function usePlantSearchQuery({
  filters,
  searchText,
}: PlantSearchRequestDto): QueryResult {
  const {data, error, isFetching} = useQuery<PlantSearchResponseDto, any>(
    ["plantSearch", searchText, filters],
    async () => {
      return PlantsApi.plantSearch({filters, searchText})
    },
    queryOptions,
  )

  return {
    data: data ?? defaultResponse,
    error,
    loading: isFetching,
  }
}
