import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Cargar datos de ejemplo
  await prisma.dependencia.create({
    data: {
      nombre_dependencia: 'Laboratorio de computo',
      domicilio: 'Calle Ejemplo 123',
      telefono: '123-456-7890',
      nombre_titular: 'Profe Tirado',
      cargo_puesto: 'Encargado de laboratorio',
      departamento_area: 'Sistemas Computacionales',
      personas: {
        create: [
          {
            nombre: 'Pedro López',
            puesto: 'Tecnico',
            correo: 'adrianlcp18@example.com',
          },
        ],
      },
      usuarios: {
        create: [
          {
            nombre: 'Pedro López',
            puesto: 'Tecnico',
            correo: 'adrianlcp18@example.com',
          },
        ],
      },
    },
  });

  // Crear datos de ejemplo para el modelo Login
  await prisma.login.create({
    data: {
      username: 'Pedro',
      password: '123',
    },
  });

  console.log('Datos cargados correctamente.');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
