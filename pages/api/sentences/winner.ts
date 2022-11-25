import { NextApiRequest, NextApiResponse } from "next"
import { sentence } from "@/lib/index"

export default async function getWinnerSentences(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sentences = await sentence.getWinners()
  console.log("Requesting...")
  res.status(200).json(sentences ?? [])
}
