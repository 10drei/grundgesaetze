import db from "@/lib/db"
import * as fs from "fs"

export async function migrate() {
  const data = fs.readFileSync(
    "C:\\Programming\\grundgesaetze\\rights.txt",
    "utf8"
  )
  console.log("Data:", data)
  const lines = data.split("\r\n")
  console.log(lines)
  for await (let line of lines) {
    const [rightName, path] = line.split("|")
    const right = await db.right.findFirst({ where: { text: rightName } })
    // const right = await db.right.update({ where: {  } })
    if (!right) continue
    await db.right.update({
      where: { id: right.id },
      data: { articlePath: path },
    })
  }
  // const data = fs.readFileSync(
  //   "C:\\Programming\\grundgesaetze\\sentences.txt",
  //   "utf8"
  // )
  //
  // console.log("Data:", data.split("\r\n"))
  // const arr = data.split("\r\n")
  // const separators = []
  //
  // const rights = await db.right.findMany()
  //
  // for (let item of arr) {
  //   if (item.startsWith("//")) {
  //     separators.push(arr.indexOf(item))
  //   }
  // }
  //
  // console.log(separators)
  // const groups = []
  // for (let i = 0; i < separators.length; i++) {
  //   const start = separators[i]
  //   const end = separators[i + 1]
  //   const items = arr.slice(start + 1, end)
  //   groups.push({ right: arr[start].replace("//", "").trim(), items })
  // }
  // console.log(groups)
  // console.log(rights)
  //
  // for await (let group of groups) {
  //   const rightId = rights.find((r) => r.text === group.right)?.id
  //
  //   if (!rightId) {
  //     console.log("Right not found:", group.right)
  //     continue
  //   }
  //
  //   const createdItems = []
  //   for await (let item of group.items) {
  //     if (createdItems.indexOf(item) > -1) continue
  //     await db.sentence.create({
  //       data: {
  //         text: item.trim(),
  //         rightId,
  //         isWinner: group.items.indexOf(item) === 0,
  //       },
  //     })
  //
  //     createdItems.push(item)
  //   }
  // }

  // Artikel,Paragraph,Phrase (0 = alle)
  // const phraseText = await db.phraseRight.findMany({
  //   where: {
  //     rightId: "95018715-81ea-4bc6-aa40-4b255d9305d1",
  //   },
  // })
  // console.log(phraseText)
  //
  // for (let phrase of phraseText) {
  //   const p = await db.phrase.findUnique({
  //     where: {
  //       id: phrase.phraseId,
  //     },
  //   })
  //   console.log(p.text)
  // }
  // console.log("-------------------")
  // const rightsData = fs
  //   .readFileSync("C:\\Programming\\grundgesaetze\\rights.txt")
  //   .toString()
  // const data = fs
  //   .readFileSync("C:\\Programming\\grundgesaetze\\phrase-rights.txt")
  //   .toString()
  // const lines = data.split("\r\n")
  // const rightsLines = rightsData.split("\r\n")
  //
  // for (let i = 0; i < lines.length; i++) {
  //   // for (let text of lines) {
  //   const text = lines[i]
  //   const rightsText = rightsLines[i]
  //   const articles = text.split(";")
  //   const paragraphs: Paragraph[] = []
  //   const phrases: Phrase[] = []
  //
  //   for await (let article of articles) {
  //     const [articleId, paragraphId] = article.split(",")
  //     const ps = await db.paragraph.findMany({
  //       where: {
  //         articleNumber: articleId,
  //       },
  //     })
  //     const p = ps.find((p) => p.number === parseInt(paragraphId))
  //     paragraphs.push(p!)
  //   }
  //
  //   for await (let p of paragraphs) {
  //     const art = articles.find((a) =>
  //       a.startsWith(p.articleNumber + "," + p.number)
  //     )!
  //     const [articleId, paragraphId, phraseId] = art.split(",")
  //     const tempPhrases = await db.phrase.findMany({
  //       where: {
  //         paragraphId: p.id,
  //       },
  //     })
  //     for (let tp of tempPhrases) {
  //       if (!tp) {
  //         console.log("HASHDAHSDJAHSDJHAJSDHJASHD")
  //       }
  //     }
  //     if (phraseId === "0") {
  //       phrases.push(...tempPhrases)
  //       continue
  //     }
  //     if (
  //       tempPhrases.find((tp) => tp.number === parseInt(phraseId))! == undefined
  //     ) {
  //       console.log(tempPhrases, parseInt(phraseId))
  //     }
  //     phrases.push(tempPhrases.find((tp) => tp.number === parseInt(phraseId))!)
  //   }
  //   const right = (await db.right.findFirst({
  //     where: {
  //       text: rightsText,
  //     },
  //   })) as Right
  //
  //   // console.log(phrases)
  //   for (let phrase of phrases) {
  //     // if (!phrase?.id) {
  //     //   console.log("Phrase not found", phrase)
  //     // } else {
  //     //   console.log(phrase.id)
  //     // }
  //     // console.log("Phrase", phrase?.id, phrase.text, right.text)
  //     await db.phraseRight.create({
  //       data: {
  //         rightId: right.id,
  //         phraseId: phrase.id,
  //       },
  //     })
  //   }
  // }

  // console.log(paragraphs, phrases)
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
