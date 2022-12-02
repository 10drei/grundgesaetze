import { NextApiRequest, NextApiResponse } from "next"
import { sentence } from "@/lib/index"

export default async function getSentences(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { query } = req.query
    const sentences = await sentence.search(query as string)
    res.status(200).json(sentences ?? [])
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
