import db from "@/lib/db"
import {
  Phrase,
  Right,
  Sentence,
  PhraseRight,
  Paragraph,
  Article
} from "@prisma/client"

export async function getAll() {
  return db.right.findMany()
}

export interface FullRight extends Right {
  sentences: Sentence[]
  phraseRights: (PhraseRight & {
    phrase: Phrase & {
      paragraph: Paragraph & {
        article: Article
      }
    }
  })[]
}

export async function getByNumber(number: number): Promise<FullRight | null> {
  return db.right.findUnique({
    where: {
      rightNumber: number
    },
    include: {
      sentences: true,
      phraseRights: {
        include: {
          phrase: {
            include: {
              paragraph: {
                include: {
                  article: true
                }
              }
            }
          }
        }
      }
    }
  })
}
