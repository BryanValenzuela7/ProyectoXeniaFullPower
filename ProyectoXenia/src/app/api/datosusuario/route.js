import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(){
    const datosuser = await prisma.datosUsuario.findMany()
    return NextResponse.json(datosuser)
}

export async function POST(request){
    try{
        const {nombre, puesto, correo, nombre_dependencia, domicilio, telefono, nombre_titular, cargo_puesto, departamento_area} = await request.json();
        const nuevoUsuario = await prisma.datosUsuario.create({
            data: {
                nombre,
                puesto,
                correo, 
                nombre_dependencia,
                domicilio,
                telefono,
                nombre_titular,
                cargo_puesto,
                departamento_area
            },
        });
        return NextResponse.json(nuevoUsuario);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    mensaje: "Hubo un error"
                },
                {
                    status: 500,
                }
            )
        }
    }
}
export async function PUT(request) {
    try {
      const { id, nombre, puesto, correo, nombre_dependencia, domicilio, telefono, nombre_titular, cargo_puesto, departamento_area } = await request.json();
      const usuarioActualizado = await prisma.datosUsuario.update({
        where: { id },
        data: {
          nombre,
          puesto,
          correo,
          nombre_dependencia,
          domicilio,
          telefono,
          nombre_titular,
          cargo_puesto,
          departamento_area,
        },
      });
      return NextResponse.json(usuarioActualizado);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    mensaje: "Hubo un error"
                },
                {
                    status: 500,
                }
            )
        }
    }
  }
  
  export async function DELETE(request) {
    try {
      const { id } = await request.json();
      await prisma.datosUsuario.delete({
        where: { id },
      });
      return NextResponse.json({ mensaje: "Usuario eliminado correctamente" });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    mensaje: "Hubo un error"
                },
                {
                    status: 500,
                }
            )
        }
    }
  }