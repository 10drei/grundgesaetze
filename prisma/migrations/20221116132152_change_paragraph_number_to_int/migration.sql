/*
  Warnings:

  - You are about to alter the column `number` on the `Paragraph` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paragraph" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "articleNumber" TEXT NOT NULL,
    CONSTRAINT "Paragraph_articleNumber_fkey" FOREIGN KEY ("articleNumber") REFERENCES "Article" ("number") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Paragraph" ("articleNumber", "id", "number", "text") SELECT "articleNumber", "id", "number", "text" FROM "Paragraph";
DROP TABLE "Paragraph";
ALTER TABLE "new_Paragraph" RENAME TO "Paragraph";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
