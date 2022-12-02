import db from "@/lib/db"

export async function getAll() {
  return await db.sentence.findMany()
}

export async function getWinners() {
  return await db.sentence.findMany({
    where: {
      isWinner: true,
    },
  })
}

export async function search(query: string) {
  try {
    return await db.sentence.findMany({
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
