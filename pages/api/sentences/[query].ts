import { NextApiRequest, NextApiResponse } from "next"
import db from "@/lib/db"

export default async function getSentences(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { query } = req.query
    // const sentences = await search(query as string)
    const sentences = await db.sentence.findMany({
      take: 10,
      where: {
        text: {
          contains: query as string,
        },
      },
    })
    res.status(200).json(sentences ?? [])
  } catch (e) {
    res.status(501).json({ error: e })
  }
}
