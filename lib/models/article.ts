import db from "../db"

export async function getAll() {
  return await db.article.findMany()
}

export async function search(query: string) {
  try {
    return await db.article.findMany({
      take: 10,
      where: {
        id: {
          contains: query,
        },
      },
    })
  } catch (e) {
    return e
  }
}


export async function getById(articleId: string) {
  return await db.article.findUnique({
    where: {
      id: articleId
    },
  })
}