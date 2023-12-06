import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';

export async function GET() {
  const usuarios = await prisma.usuarios.findMany();
  return NextResponse.json(usuarios);
}

export async function POST(request) {
    try {
      const {
        id,
        nombre,
        apellido,
        correo,
        telefono,
        username,
        password,
      } = await request.json();
  
      const nuevoUsuario = await prisma.$transaction([
        prisma.usuarios.create({
          data: {
            id,
            nombre,
            apellido,
            correo,
            telefono,
            username,
            password,
            login: {
              create: {
                username,
                password,
              },
            },
          },
        }),
      ]);
  
      return NextResponse.json({ message: 'Usuario creado con éxito.', usuario: nuevoUsuario[0] });
    } catch (error) {
      console.error('Error al crear usuario:', error);
  
      return NextResponse.json(
        {
          error: 'Error al crear usuario.',
        },
        {
          status: 500,
        }
      );
    } finally {
      await prisma.$disconnect();
    }
  }
  