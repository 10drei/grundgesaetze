import db from "@/lib/db"

export async function getAll() {
  return db.right.findMany()
}
