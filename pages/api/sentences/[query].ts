import { NextApiRequest, NextApiResponse } from "next"
import { search } from "@/lib/models/sentence"

export default async function getSentences(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query
  const sentences = await search(query as string)
  res.status(200).json(sentences ?? [])
}
