import type {NextApiRequest, NextApiResponse} from "next"

export default function plantById(req: NextApiRequest, res: NextApiResponse) {
  console.debug(req.body)

  res.status(200).json({})
}