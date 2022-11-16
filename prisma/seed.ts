import db from "@/lib/db"

export async function migrate() {
  const gewollterArticle = "16a"
  const gewollterParagraph = 4
  const gewolltePhrase = 2

  const paragraph = await db.paragraph.findMany({
    where: {
      articleNumber: gewollterArticle,
      number: gewollterParagraph,
    },
  })

  const phrases = await db.phrase.findMany({
    where: {
      paragraphId: paragraph[0].id,
      number: gewolltePhrase,
    },
  })

  console.log("Deine Phrase:", phrases[0])
}

/*
const paragraphs = await db.paragraph.findMany()

  console.log(paragraphs)

  for await (let p of paragraphs) {
    const text = p.text.replace(" Abs.", "^_^")
    const parts = text.split(".")

    let count = 1
    for await (let part of parts) {
      if (part.trim().length == 0) continue
      const pt = (part.trim() + ".").replace("^_^", " Abs.")
      console.log(pt)
      console.log(p.id)
      await db.phrase.create({
        data: {
          text: pt,
          number: count,
          paragraphId: p.id,
        },
      })
      count++
    }
  }
 */
