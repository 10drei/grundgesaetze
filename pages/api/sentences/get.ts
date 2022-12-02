import { NextApiRequest, NextApiResponse } from "next"
import { sentence } from "@/lib/index"

export default async function getSentences(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sentences = await sentence.getAll()
  res.status(200).json(sentences ?? [])
}
