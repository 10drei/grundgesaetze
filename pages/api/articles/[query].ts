import { NextApiRequest, NextApiResponse } from "next"
import { article } from "@/lib/index"

export default async function getArticles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { query } = req.query
    const articles = await article.search(query as string)
    res.status(200).json(articles ?? [])
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
