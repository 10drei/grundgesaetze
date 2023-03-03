import db from "@/lib/db"

export async function getAll() {
  return await db.sentence.findMany()
}

export async function getWinners() {
  return await db.sentence.findMany({
    where: {
      isWinner: true
    }
  })
}

export async function search(query: string) {
  try {
    return await db.sentence.findMany({
      take: 30,
      where: {
        OR: [
          {
            text: {
              contains: query
            }
          },
          {
            right: {
              text: {
                contains: query
              }
            }
          },
          {
            right: {
              articlePath: {
                contains:
                  query.toLowerCase().replaceAll("artikel", "art").trimEnd() +
                  " "
              }
            }
          }
        ]
      }
    })
  } catch (e) {
    console.log("Fehler geschmissen", e)
    return e
  }
}
