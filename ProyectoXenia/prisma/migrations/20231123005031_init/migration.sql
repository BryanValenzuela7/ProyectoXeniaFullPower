-- CreateTable
CREATE TABLE "Dependencia" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre_dependencia" TEXT NOT NULL,
    "domicilio" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "nombre_titular" TEXT NOT NULL,
    "cargo_puesto" TEXT NOT NULL,
    "departamento_area" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Persona" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "puesto" TEXT NOT NULL,
    "correo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DependenciaToPersona" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_DependenciaToPersona_A_fkey" FOREIGN KEY ("A") REFERENCES "Dependencia" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DependenciaToPersona_B_fkey" FOREIGN KEY ("B") REFERENCES "Persona" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_DependenciaToPersona_AB_unique" ON "_DependenciaToPersona"("A", "B");

-- CreateIndex
CREATE INDEX "_DependenciaToPersona_B_index" ON "_DependenciaToPersona"("B");
