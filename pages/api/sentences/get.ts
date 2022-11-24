import { NextApiRequest, NextApiResponse } from "next"
import { getAll } from "@/lib/models/sentence"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const sentences = await getAll()
  res.status(200).json(sentences ?? [])
}
