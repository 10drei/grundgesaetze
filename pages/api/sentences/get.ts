import { NextApiRequest, NextApiResponse } from "next"
import db from "@/lib/db"

export default async function getSentences(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const sentences = await getAll()
  const sentences = db.sentence.findMany()
  res.status(200).json(sentences ?? [])
}
