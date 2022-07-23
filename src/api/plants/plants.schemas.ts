import {z} from "zod"

import {filterOptionSchema} from "../shared.schemas"

export const plantSize = z.enum([
  "oneGallon",
  "fiveGallon",
  "small",
  "medium",
  "large",
  "extra-large",
])

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
  planterId: z.enum([
    "grower",
    "planter-eco-planter",
    "planter-naturals-basket",
    "planter-ceramic",
  ]),
  planterLabel: z.string(),
  price: z.string(),
})

export type PlanterDto = z.infer<typeof planterSchema>

// #################
// # PLANT VARIANT #
// #################
export const plantVariantSchema = z.union([
  z.object({
    planters: z.array(planterSchema),
    sizeId: plantSize,
    sizeLabel: z.string(),
  }),
  z.object({imgSrc: z.string().optional(), price: z.string()}),
])

export type PlantVariantDto = z.infer<typeof plantVariantSchema>

// #########
// # PLANT #
// #########
export const plantSchema = z.object({
  careGuide: z.array(plantMetadataSchema),
  description: z.array(z.string()),
  id: z.string(),
  metadata: z.array(plantMetadataSchema),
  title: z.string(),
  variants: z.array(plantVariantSchema),
})

export type PlantDto = z.infer<typeof plantSchema>

export const plantSearchResponseSchema = z.object({
  filters: z.array(filterOptionSchema),
  numberFound: z.number(),
  plants: z.array(plantSchema),
})

export type PlantSearchResponseDto = z.infer<typeof plantSearchResponseSchema>
