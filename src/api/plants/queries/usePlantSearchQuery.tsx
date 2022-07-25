import {useQuery} from "@tanstack/react-query"

import {queryOptions} from "../../shared.constants"
import {PlantSearchInputDto} from "../plant.types"
import {PlantsApi} from "../plants.api"
import {PlantSearchResponseDto} from "../plants.schemas"

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
  searchText,
}: PlantSearchInputDto): QueryResult {
  const {data, error, isFetching} = useQuery<PlantSearchResponseDto, any>(
    ["plantSearch", searchText],
    async () => {
      return PlantsApi.plantSearch({searchText})
    },
    queryOptions,
  )

  return {
    data: data ?? defaultResponse,
    error,
    loading: isFetching,
  }
}
