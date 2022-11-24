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
