import { NextApiRequest, NextApiResponse } from "next"
import { article } from "@/lib/index"

export default async function getById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const foundArticle = await article.getById(req.query.id as string)
  res.status(200).json(foundArticle ?? {})
}
