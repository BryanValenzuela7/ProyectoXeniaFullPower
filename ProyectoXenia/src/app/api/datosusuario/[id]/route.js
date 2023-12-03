import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function DELETE(request, {params:{id}}){
    const datosusuario = await prisma.datosUsuario.delete(
        {
            where: {id},
        }
    )
    return NextResponse.json(datosusuario)
}

export async function PUT(request, {params:{id}}){
    const {nombre, puesto, correo, nombre_dependencia, domicilio, telefono, nombre_titular, cargo_puesto, departamento_area} = await request.json()
    const datosusuario = await prisma.datosUsuario.update(
        {
            where:{id},
            data:{
                nombre,
                puesto,
                correo,
                nombre_dependencia,
                domicilio,
                telefono,
                nombre_titular,
                cargo_puesto,
                departamento_area
            }
        }
    )
    return NextResponse.json(datosusuario)
}