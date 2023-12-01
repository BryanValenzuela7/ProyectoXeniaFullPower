/*
  Warnings:

  - You are about to drop the `_DependenciaToPersona` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `dependenciaId` to the `Persona` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_DependenciaToPersona_B_index";

-- DropIndex
DROP INDEX "_DependenciaToPersona_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_DependenciaToPersona";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Login" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    CONSTRAINT "Login_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Persona" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "puesto" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "dependenciaId" TEXT NOT NULL,
    CONSTRAINT "Persona_dependenciaId_fkey" FOREIGN KEY ("dependenciaId") REFERENCES "Dependencia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Persona" ("correo", "id", "nombre", "puesto") SELECT "correo", "id", "nombre", "puesto" FROM "Persona";
DROP TABLE "Persona";
ALTER TABLE "new_Persona" RENAME TO "Persona";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Login_personaId_key" ON "Login"("personaId");
