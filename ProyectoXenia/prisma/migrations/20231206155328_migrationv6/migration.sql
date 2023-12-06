/*
  Warnings:

  - Added the required column `usuarioId` to the `Login` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Login" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "Login_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Login" ("id", "password", "username") SELECT "id", "password", "username" FROM "Login";
DROP TABLE "Login";
ALTER TABLE "new_Login" RENAME TO "Login";
CREATE UNIQUE INDEX "Login_username_key" ON "Login"("username");
CREATE UNIQUE INDEX "Login_usuarioId_key" ON "Login"("usuarioId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_id_key" ON "Usuarios"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_username_key" ON "Usuarios"("username");
