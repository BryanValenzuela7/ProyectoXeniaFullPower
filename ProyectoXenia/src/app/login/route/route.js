import {NextResponse} from "next/server"
import { prisma } from "@/libs/prisma"

export async function GET(){
    const login = await prisma.login.findMany()
    return NextResponse.json(login)
}

export async function POST(request){
    try{
        const {username, password} = await request.json()

        if(!username || !password){
            return NextResponse.error('Es obligatorio llenar los campos')
        }

        const usuarioExistente = await prisma.login.findUnique({
            where:{ username },
        })

        const autenticacionExitosa = usuarioExistente && usuarioExistente.password === password;

        return NextResponse.json({
            mensaje: autenticacionExitosa ? "Autenticación exitosa" : "Datos incorrectos",
        })

        /*if (usuarioExistente && usuarioExistente.password === password){
            return NextResponse.json({mensaje: 'Autenticación exitosa'})
        }else{
            return NextResponse.error('Datos incorrectos')
        }*/

     } catch (error){
        console.error('Error al procesar la soliciturd: ', error)
        return NextResponse.error('Error interno del servidor')
   
    }
}