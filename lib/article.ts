import db from "./db"

export async function getAllArticles() {
  const articles = await db.article.findMany()
  return articles
}
