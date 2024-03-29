import {z} from "zod"

import {PlantFilterId, PlantPotId, PlantSizeId} from "./plants.enums"

export const plantSize = z.nativeEnum(PlantSizeId)

export const filterItemSchema = z.object({
  id: z.string(),
  label: z.string().optional(),
})

export type FilterItemDto = z.infer<typeof filterItemSchema>

export const filterGroupSchema = z.object({
  id: z.nativeEnum(PlantFilterId),
  label: z.string(),
  values: z.array(filterItemSchema),
})

export type FilterGroupDto = z.infer<typeof filterGroupSchema>

export const enabledFilterValuesSchema = z.record(z.record(z.boolean()))

export type EnabledFilterValuesDto = z.infer<typeof enabledFilterValuesSchema>

// ############
// # METADATA #
// ############
export const plantMetadataSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.union([z.string(), z.array(z.string())]),
})

export type PlantMetadataDto = z.infer<typeof plantMetadataSchema>

// ###########
// # PLANTER #
// ###########
export const planterSchema = z.object({
  imgSrc: z.string().optional(),
  planterId: z.nativeEnum(PlantPotId),
  planterLabel: z.string(),
  price: z.string(),
})

export type PlanterDto = z.infer<typeof planterSchema>

const plantVariantSchema = z.object({
  planters: z.array(planterSchema),
  sizeId: plantSize,
  sizeLabel: z.string(),
})

export type PlantVariantDto = z.infer<typeof plantVariantSchema>

const plantBasicVariantSchema = z.object({
  imgSrc: z.string(),
  price: z.string(),
})

export type PlantBasicVariantDto = z.infer<typeof plantBasicVariantSchema>

// #########
// # PLANT #
// #########
export const plantSchema = z.object({
  careGuide: z.array(plantMetadataSchema),
  description: z.array(z.string()),
  id: z.string(),
  metadata: z.array(plantMetadataSchema),
  title: z.string(),
  variant: plantBasicVariantSchema.optional(),
  variants: z.array(plantVariantSchema),
})

export type PlantDto = z.infer<typeof plantSchema>

export const plantSearchResponseSchema = z.object({
  filters: z.object({
    enabledValues: enabledFilterValuesSchema,
    filters: z.array(filterGroupSchema),
  }),
  numberFound: z.number(),
  plants: z.array(plantSchema),
})

export type PlantSearchResponseDto = z.infer<typeof plantSearchResponseSchema>

export const plantFilterInputSchema = z.object({
  id: z.nativeEnum(PlantFilterId),
  values: z.array(z.string()),
})

export type PlantFilterInputDto = z.infer<typeof plantFilterInputSchema>

export const plantSearchRequestSchema = z.object({
  filters: z.array(plantFilterInputSchema),
  searchText: z.string().optional(),
})

export type PlantSearchRequestDto = z.infer<typeof plantSearchRequestSchema>

export const plantByIdRequestSchema = z.object({
  id: z.string(),
})

export type PlantByIdRequestDto = z.infer<typeof plantByIdRequestSchema>
