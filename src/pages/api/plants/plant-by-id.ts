import type {NextApiRequest, NextApiResponse} from "next"

import {plantByIdRequestSchema} from "~api/plants"

import plants from "./data/plants.json"

export default function plantById(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body

  const parsedBody = plantByIdRequestSchema.safeParse(body)

  if (!parsedBody.success) {
    return res.status(400).json({message: "Call failed due to malformed input"})
  }

  const plant = plants.plants.find((plant) => plant.id === parsedBody.data.id)

  res.status(200).json({plant})
}
