import kyBase from "ky-universal"

import {kyOpts} from "../shared.constants"
import {
  PlantByIdRequestDto,
  PlantDto,
  plantSchema,
  PlantSearchRequestDto,
  PlantSearchResponseDto,
  plantSearchResponseSchema,
} from "./plants.schemas"

const ky = kyBase.extend({
  ...kyOpts,
  prefixUrl: "/api/plants",
})

export const PlantsApi = {
  plantById: async (input: PlantByIdRequestDto): Promise<PlantDto> => {
    const result = await ky
      .post(`plant-by-id`, {
        json: input,
      })
      .json()
    const parsed = plantSchema.safeParse(result)
    if (!parsed.success) {
      throw new Error("Data validation failed")
    }
    return parsed.data
  },
  plantSearch: async (
    input: PlantSearchRequestDto,
  ): Promise<PlantSearchResponseDto> => {
    const result = await ky
      .post(`plant-search`, {
        json: input,
      })
      .json()

    const parsed = plantSearchResponseSchema.safeParse(result)
    if (!parsed.success) {
      throw new Error("Data validation failed")
    }
    return parsed.data
  },
}
