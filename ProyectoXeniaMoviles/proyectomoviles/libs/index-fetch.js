import axios from 'axios';

export async function obtenerProductosDummy() {
  try {
    const response = await axios.get('http://192.168.1.69:3000/api/datosusuario');
    return response.data;
  } catch (error) {
    console.error('Error al obtener productos dummy:', error);
    throw error; // Puedes manejar el error según tus necesidades
  }
}
