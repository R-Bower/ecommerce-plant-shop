import type {NextApiRequest, NextApiResponse} from "next"

import {plants} from "./data/all-plants.json"

export default async function plantSearch(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  console.debug(req.body)

  // TODO: replace with DB

  return res.status(200).json({filters: [], numberFound: 0, plants})
}
