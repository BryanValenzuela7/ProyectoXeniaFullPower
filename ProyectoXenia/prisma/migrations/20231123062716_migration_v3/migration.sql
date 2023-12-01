/*
  Warnings:

  - You are about to drop the column `dependenciaId` on the `Persona` table. All the data in the column will be lost.
  - You are about to drop the column `personaId` on the `Login` table. All the data in the column will be lost.
  - Added the required column `usuariosId` to the `Login` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "puesto" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "dependenciaId" TEXT NOT NULL,
    CONSTRAINT "Usuarios_dependenciaId_fkey" FOREIGN KEY ("dependenciaId") REFERENCES "Dependencia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_DependenciaToPersona" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_DependenciaToPersona_A_fkey" FOREIGN KEY ("A") REFERENCES "Dependencia" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DependenciaToPersona_B_fkey" FOREIGN KEY ("B") REFERENCES "Persona" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Persona" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "puesto" TEXT NOT NULL,
    "correo" TEXT NOT NULL
);
INSERT INTO "new_Persona" ("correo", "id", "nombre", "puesto") SELECT "correo", "id", "nombre", "puesto" FROM "Persona";
DROP TABLE "Persona";
ALTER TABLE "new_Persona" RENAME TO "Persona";
CREATE TABLE "new_Login" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "usuariosId" TEXT NOT NULL,
    CONSTRAINT "Login_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Login" ("id", "password", "username") SELECT "id", "password", "username" FROM "Login";
DROP TABLE "Login";
ALTER TABLE "new_Login" RENAME TO "Login";
CREATE UNIQUE INDEX "Login_usuariosId_key" ON "Login"("usuariosId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_DependenciaToPersona_AB_unique" ON "_DependenciaToPersona"("A", "B");

-- CreateIndex
CREATE INDEX "_DependenciaToPersona_B_index" ON "_DependenciaToPersona"("B");
