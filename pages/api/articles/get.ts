import { getAllArticles } from "@/lib/article"
import { NextApiRequest, NextApiResponse } from "next"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const articles = await getAllArticles()
  res.status(200).json({ articles: articles ?? [] })
}
