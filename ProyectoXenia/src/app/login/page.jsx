'use client'
import React from 'react'
import Modal from 'react-modal';
import '../globals.css'
import { useState } from 'react'

const page = ({ mostrarMenuPrincipal, mostrarNuevoUsuario}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const abrirModal = (contenido) => {
      setModalContent(contenido);
      setModalIsOpen(true);
    }

    const cerrarModal = () => {
      setModalIsOpen(false);
      setError(null);
    }
    
    const handleIngresar = async () => {
      if(username === '' | password === ''){
        abrirModal('Se deben llenar todos los campos.');
      }

      try {
        const response = await fetch('/login/route', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
  
        const data = await response.json();
  
        if (data.mensaje === 'Autenticación exitosa') {
          abrirModal('Autenticación exitosa!')
        } else {
          setError('Datos incorrectos');
          abrirModal('Error: Datos incorrectos')
        }
      } catch (error) {
        console.error('Error al procesar la solicitud: ', error);
        setError('Error interno del servidor');
      }
    }

  return (
    <div className='font-poppins flex items-center justify-center min-h-screen bg-gradient-to-r from-blueClaro to-blueOscuro'>
        <div className='mt-4 mb-4 p-6 md:p-12 rounded shadow-md max-w-md w-full bg-white flex flex-col'>
            <img
            src={'http://ead.itsaonline.com.mx/pluginfile.php/2/course/section/1/tecnm.png'}
            alt='Login'
            className='mb-1 w-full h-auto md:w-150 md:h-150'
            />
      
            <h1 className='text-black text-center text-2xl md:text-3xl font-semibold mb-6'>INICIO SESIÓN</h1>

            <label htmlFor='InputUser' className='text-gray-600 block text-sm font-medium mb-2'>Usuario:</label>
            <input
            type="text"
            className='border border-gray-300 rounded p-2 w-full mb-2 text-gray-700 focus:outline-none focus:border-blue-500'
            id='InputUser'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor='InputPassword' className='text-gray-600 block text-sm font-medium mb-2'>Contraseña:</label>
            <input
            type='password'
            className='border border-gray-300 rounded p-2 w-full mb-2 text-gray-700 focus:outline-none focus:border-blue-500'
            id='InputPassword'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button 
            className='text-white bg-blue-500 rounded py-2 hover:bg-blue-600 shadow-md focus:shadow-outline w-full'
            onClick={handleIngresar}
            >
              Ingresar
            </button>
            <button
            className='text-white bg-green-500 rounded py-2 shadow-md focus:shadow-outline w-full mt-2'
            onClick={() => {
              cerrarModal();
              mostrarNuevoUsuario();
            }}
            >
              Crear Cuenta
            </button>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={cerrarModal}
              contentLabel='Modal'
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-white p-8 rounded shadow-md w-96 md:w-1/2 border border-gray-300'
              overlayClassName='insert-0 bg-black bg-opacity-50'
              ariaHideApp={false}
            >
              <div className='text-center'>
                <p className='text-black mb-2'>{modalContent}</p>
                {error && (
                  <button
                    className='text-white bg-red-500 rounded py-2 hover:bg-red-600 focus:shadow-outline w-full'
                    onClick={cerrarModal}
                  >
                      Cerrar
                  </button>
                )}
                {modalContent === 'Autenticación exitosa!' && !error && (
                  <button
                    className='text-white bg-green-500 rounded py-2 hover:bg-green-600 focus:shadow-outline w-full mt-2'
                    onClick={() => {
                      //setMenuPrincipal(true);
                      mostrarMenuPrincipal(false)
                      cerrarModal();
                    }}
                  >
                    Continuar
                  </button>
                )}
                </div>
            </Modal>
        </div>
    </div>
  )

}

export default page