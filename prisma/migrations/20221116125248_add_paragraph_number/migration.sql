/*
  Warnings:

  - Added the required column `number` to the `Paragraph` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paragraph" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "articleNumber" TEXT NOT NULL,
    CONSTRAINT "Paragraph_articleNumber_fkey" FOREIGN KEY ("articleNumber") REFERENCES "Article" ("number") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Paragraph" ("articleNumber", "id", "text") SELECT "articleNumber", "id", "text" FROM "Paragraph";
DROP TABLE "Paragraph";
ALTER TABLE "new_Paragraph" RENAME TO "Paragraph";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
