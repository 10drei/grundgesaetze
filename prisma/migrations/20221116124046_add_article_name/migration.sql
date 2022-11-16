/*
  Warnings:

  - You are about to drop the column `articleId` on the `Paragraph` table. All the data in the column will be lost.
  - Added the required column `articleName` to the `Paragraph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paragraph" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "articleName" TEXT NOT NULL,
    CONSTRAINT "Paragraph_articleName_fkey" FOREIGN KEY ("articleName") REFERENCES "Article" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Paragraph" ("id", "text") SELECT "id", "text" FROM "Paragraph";
DROP TABLE "Paragraph";
ALTER TABLE "new_Paragraph" RENAME TO "Paragraph";
CREATE TABLE "new_Article" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Article" ("id") SELECT "id" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
CREATE UNIQUE INDEX "Article_name_key" ON "Article"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
