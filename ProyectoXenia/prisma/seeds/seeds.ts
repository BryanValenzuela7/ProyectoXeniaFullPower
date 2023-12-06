import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const usuario = await prisma.usuarios.create({
    data: {
      id: '1', // Ajusta el ID según tus necesidades
      nombre: 'Nombre',
      apellido: 'Apellido',
      correo: 'correo@example.com',
      telefono: '123456789',
      username: 'Pedro1',
      password: '1234',
      login: {
        create: {
          username: 'Pedro1',
          password: '1234',
        },
      },
    },
  });

  console.log('Datos de semilla creados:', usuario);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
