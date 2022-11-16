/*
  Warnings:

  - The primary key for the `Right` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Phrase` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Sentence` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Paragraph` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Part` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Right" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "partId" TEXT NOT NULL,
    CONSTRAINT "Right_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Right" ("id", "partId", "text") SELECT "id", "partId", "text" FROM "Right";
DROP TABLE "Right";
ALTER TABLE "new_Right" RENAME TO "Right";
CREATE TABLE "new_Phrase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "paragraphId" TEXT NOT NULL,
    CONSTRAINT "Phrase_paragraphId_fkey" FOREIGN KEY ("paragraphId") REFERENCES "Paragraph" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Phrase" ("id", "paragraphId", "text") SELECT "id", "paragraphId", "text" FROM "Phrase";
DROP TABLE "Phrase";
ALTER TABLE "new_Phrase" RENAME TO "Phrase";
CREATE TABLE "new_Sentence" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "isWinner" BOOLEAN NOT NULL,
    "rightId" TEXT NOT NULL,
    CONSTRAINT "Sentence_rightId_fkey" FOREIGN KEY ("rightId") REFERENCES "Right" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Sentence" ("id", "isWinner", "rightId", "text") SELECT "id", "isWinner", "rightId", "text" FROM "Sentence";
DROP TABLE "Sentence";
ALTER TABLE "new_Sentence" RENAME TO "Sentence";
CREATE TABLE "new_Paragraph" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,
    CONSTRAINT "Paragraph_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Paragraph" ("articleId", "id", "text") SELECT "articleId", "id", "text" FROM "Paragraph";
DROP TABLE "Paragraph";
ALTER TABLE "new_Paragraph" RENAME TO "Paragraph";
CREATE TABLE "new_Part" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "textAltered" BOOLEAN NOT NULL,
    "phraseId" TEXT NOT NULL,
    CONSTRAINT "Part_phraseId_fkey" FOREIGN KEY ("phraseId") REFERENCES "Phrase" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Part" ("id", "phraseId", "text", "textAltered") SELECT "id", "phraseId", "text", "textAltered" FROM "Part";
DROP TABLE "Part";
ALTER TABLE "new_Part" RENAME TO "Part";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
