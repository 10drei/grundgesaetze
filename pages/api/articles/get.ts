import { getAllArticles } from "@/lib/article"
import { NextApiRequest, NextApiResponse } from "next"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const articles = await getAllArticles()
  if (articles && articles.length > 0) {
    res.status(200).json({ articles })
  } else {
    res.status(400).send("Couldn't find user with that id")
  }
}
