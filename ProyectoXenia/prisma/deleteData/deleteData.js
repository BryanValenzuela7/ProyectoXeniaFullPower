// scripts/deleteData.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteAllData() {
  try {
    // Eliminar todos los registros de la tabla DatosUsuario
    //await prisma.datosUsuario.deleteMany();

    // Eliminar todos los registros de la tabla Login
    await prisma.login.deleteMany();

    // Eliminar todos los registros de la tabla Usuarios
    //await prisma.usuarios.deleteMany();

    console.log('Datos eliminados exitosamente.');
  } catch (error) {
    console.error('Error al eliminar datos:', error);
  } finally {
    await prisma.$disconnect(); // Asegúrate de cerrar la conexión al finalizar
  }
}

// Llamar a la función para eliminar todos los datos
deleteAllData();
