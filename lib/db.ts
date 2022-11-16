import { PrismaClient } from "@prisma/client"

let db = null as unknown as PrismaClient

if (!db) {
  db = new PrismaClient()
}

export default db
