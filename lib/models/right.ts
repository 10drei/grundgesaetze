import db from "@/lib/db"

export async function getAll() {
  return db.right.findMany()
}

export async function search(query: string) {
  try {
    return await db.right.findMany({
      take: 10,
      where: {
        text: {
          contains: query,
        },
      },
    })
  } catch (e) {
    return e
  }
}

export async function getById(rightId: string) {
  return await db.right.findUnique({
    where: {
      id: rightId
    },
  })
}