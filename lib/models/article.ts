import db from "../db"

export async function getAll() {
  return await db.article.findMany()
}
