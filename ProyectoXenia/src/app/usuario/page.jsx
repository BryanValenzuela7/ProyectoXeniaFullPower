'use client'
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../globals.css'

const NuevoUsuario = ({ mostrarMenuPrincipal, regresarAInicioSesion }) => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const abrirModal = (contenido) => {
    setModalContent(contenido);
    setModalIsOpen(true);
  };

  const cerrarModal = () => {
    setModalIsOpen(false);
    setError(null);
  };

  const handleRegresar = () => {
    regresarAInicioSesion();
  }

  const validarId = () => {
    const regexId = /^(?=.*\d)[a-zA-Z\d]{1,5}$/;
    return regexId.test(id);
  };

  const validarCorreo = () => {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  };

  const validarContraseña = () => {
    const regexContraseña = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regexContraseña.test(password);
  };
  

  const handleCrearCuenta = async () => {
    try {

      if (!id || !nombre || !apellido || !correo || !telefono || !username || !password) {
        abrirModal('Por favor, complete todos los campos.');
        return;
      }

      if (!validarId()) {
        abrirModal('Asegúrese de poner un número de control valido.');
        return;
      }

      if (!validarCorreo()) {
        abrirModal('Ingrese un correo electrónico válido.');
        return;
      }

      if (!validarContraseña()) {
        abrirModal('La contraseña debe contener al menos una mayúscula y minimo un número.');
        return;
      }

      const response = await fetch('/usuario/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          nombre,
          apellido,
          correo,
          telefono,
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        abrirModal('Cuenta creada exitosamente!');
      } else {
        abrirModal(data.error || 'Hubo un error al crear la cuenta.');
      }
    } catch (error) {
      abrirModal('Hubo un error al crear la cuenta.');
      console.error('Error al crear cuenta:', error);
    }
  };

  return (
    <div className='font-poppins flex items-center justify-center min-h-screen bg-gradient-to-r from-blueClaro to-blueOscuro'>
      <div className='mt-4 mb-4 p-6 md:p-12 rounded shadow-md max-w-md w-full bg-white flex flex-col'>
        <h1 className='text-black text-center text-2xl md:text-3xl font-semibold mb-6'>CREAR NUEVA CUENTA</h1>

        <label htmlFor='InputId' className='text-gray-600 block text-sm font-medium mb-2'>
          No. Control:
        </label>
        <input
          type='text'
          className='border border-gray-300 rounded p-2 mb-2 text-gray-700 focus:outline-none focus:border-blue-500'
          id='InputId'
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <label htmlFor='InputNombre' className='text-gray-600 block text-sm font-medium mb-2'>
          Nombre:
        </label>
        <input
          type='text'
          className='border border-gray-300 rounded p-2 mb-2 text-gray-700 focus:outline-none focus:border-blue-500'
          id='InputNombre'
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor='InputApellido' className='text-gray-600 block text-sm font-medium mb-2'>
          Apellido:
        </label>
        <input
          type='text'
          className='border border-gray-300 rounded p-2 mb-2 text-gray-700 focus:outline-none focus:border-blue-500'
          id='InputApellido'
          required
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />

        <label htmlFor='InputCorreo' className='text-gray-600 block text-sm font-medium mb-2'>
          Correo Institucional:
        </label>
        <input
          type='email'
          className='border border-gray-300 rounded p-2 mb-2 text-gray-700 focus:outline-none focus:border-blue-500'
          id='InputCorreo'
          required
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label htmlFor='InputTelefono' className='text-gray-600 block text-sm font-medium mb-2'>
          Número de Teléfono Celular:
        </label>
        <input
          type='tel'
          className='border border-gray-300 rounded p-2 mb-2 text-gray-700 focus:outline-none focus:border-blue-500'
          id='InputTelefono'
          required
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <label htmlFor='InputUsername' className='text-gray-600 block text-sm font-medium mb-2'>
          Nombre de Usuario:
        </label>
        <input
          type='text'
          className='border border-gray-300 rounded p-2 mb-2 text-gray-700 focus:outline-none focus:border-blue-500'
          id='InputUsername'
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor='InputPassword' className='text-gray-600 block text-sm font-medium mb-2'>
          Contraseña:
        </label>
        <input
          type='password'
          className='border border-gray-300 rounded p-2 mb-4 text-gray-700 focus:outline-none focus:border-blue-500'
          id='InputPassword'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className='text-white bg-blue-500 rounded py-2 hover:bg-blue-600 shadow-md focus:shadow-outline w-full'
          onClick={handleCrearCuenta}
        >
          Crear Cuenta
        </button>

        <button
          className='text-white bg-green-500 rounded py-2 shadow-md focus:shadow-outline w-full mt-2'
          onClick={handleRegresar}
        >
          Regresar
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
    <p className='text-gray-800 mb-4'>{modalContent}</p>
    {error && (
      <button
        className='text-white bg-red-500 rounded py-2 hover:bg-red-600 focus:shadow-outline w-full'
        onClick={cerrarModal}
      >
        Cerrar
      </button>
    )}
    {modalContent === 'Cuenta creada exitosamente!' && !error && (
      <button
        className='text-white bg-green-500 rounded py-2 hover:bg-green-600 focus:shadow-outline w-full mt-2'
        onClick={() => {
          mostrarMenuPrincipal(false);
          cerrarModal();
        }}
      >
        Continuar
      </button>
    )}
    <button
      className='text-gray-700 bg-gray-200 rounded py-2 hover:bg-gray-300 focus:shadow-outline w-full mt-2'
      onClick={cerrarModal}
    >
      Cerrar
    </button>
  </div>
</Modal>

      </div>
    </div>
  );
};

export default NuevoUsuario;