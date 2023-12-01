/*
  Warnings:

  - You are about to drop the `Dependencia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Persona` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuarios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DependenciaToPersona` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Dependencia";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Persona";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Usuarios";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_DependenciaToPersona";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "DatosUsuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "puesto" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "nombre_dependencia" TEXT NOT NULL,
    "domicilio" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "nombre_titular" TEXT NOT NULL,
    "cargo_puesto" TEXT NOT NULL,
    "departamento_area" TEXT NOT NULL
);
