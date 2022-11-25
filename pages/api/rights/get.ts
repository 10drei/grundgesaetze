import { NextApiRequest, NextApiResponse } from "next"
import { right } from "@/lib/index"

export default async function getRights(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sentences = await right.getAll()
  res.status(200).json(sentences ?? [])
}
