/*
  Warnings:

  - You are about to drop the column `name` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `articleName` on the `Paragraph` table. All the data in the column will be lost.
  - Added the required column `number` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `articleNumber` to the `Paragraph` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" TEXT NOT NULL
);
INSERT INTO "new_Article" ("id") SELECT "id" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
CREATE UNIQUE INDEX "Article_number_key" ON "Article"("number");
CREATE TABLE "new_Paragraph" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "articleNumber" TEXT NOT NULL,
    CONSTRAINT "Paragraph_articleNumber_fkey" FOREIGN KEY ("articleNumber") REFERENCES "Article" ("number") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Paragraph" ("id", "text") SELECT "id", "text" FROM "Paragraph";
DROP TABLE "Paragraph";
ALTER TABLE "new_Paragraph" RENAME TO "Paragraph";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
