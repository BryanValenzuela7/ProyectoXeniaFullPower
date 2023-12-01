/*
  Warnings:

  - You are about to drop the column `usuariosId` on the `Login` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Login" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_Login" ("id", "password", "username") SELECT "id", "password", "username" FROM "Login";
DROP TABLE "Login";
ALTER TABLE "new_Login" RENAME TO "Login";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
