import { NextApiRequest, NextApiResponse } from "next"
import { migrate } from "../../prisma/seed"

export default async function migrateDb(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await migrate()

  res.status(200).send("Hello")
}
