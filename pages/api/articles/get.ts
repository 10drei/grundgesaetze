import { NextApiRequest, NextApiResponse } from "next"
import { article } from "@/lib/index"

export default async function getArticles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const articles = await article.getAll()
  res.status(200).json(articles ?? [])
}
