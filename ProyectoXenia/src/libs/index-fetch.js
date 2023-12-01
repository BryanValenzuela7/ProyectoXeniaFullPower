export async function obtenerProductosDummy(){
    const nuevoUser = await fetch("http://localhost:3000/api/datosusuario");
    return nuevoUser.json();
}