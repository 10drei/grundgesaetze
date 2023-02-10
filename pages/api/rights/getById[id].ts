import { NextApiRequest, NextApiResponse } from "next"
import { right } from "@/lib/index"

export default async function getById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rights = await right.getById(req.query.key as string)
  res.status(200).json(rights ?? [])
}
