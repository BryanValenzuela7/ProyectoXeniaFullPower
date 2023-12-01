'use client'
import { useState } from 'react';

const Renderizado = ({ producto }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full md:w-11/12 lg:w-11/12 xl:w-11/12 p-4 m-2 mt-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out overflow-wrap break-word">
    <div className="p-4">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">{producto.nombre}</h1>
      <p className="text-gray-600">Puesto: {producto.puesto}</p>
      <p className="text-indigo-600">Correo: {producto.correo}</p>
      <div className="flex justify-end items-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={openModal}
        >
          Detalles
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
          <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={closeModal}></div>
          <div className="bg-white p-8 rounded-lg z-50 max-w-screen-md mx-auto">
            <div className="text-indigo-600 mb-4">Dependencia</div>
            <p className="text-black">{producto.nombre_dependencia}</p>

            <div className="text-indigo-600 mb-4 mt-4">Domicilio</div>
            <p className="text-black">{producto.domicilio}</p>

            <div className="text-indigo-600 mb-4 mt-4"># Teléfono</div>
            <p className="text-black">{producto.telefono}</p>

            <div className="text-indigo-600 mb-4 mt-4">Nombre Titular</div>
            <p className="text-black">{producto.nombre_titular}</p>

            <div className="text-indigo-600 mb-4 mt-4">Cargo</div>
            <p className="text-black">{producto.cargo_puesto}</p>

            <div className="text-indigo-600 mb-4 mt-4">Departamento</div>
            <p className="text-black">{producto.departamento_area}</p>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full mt-6"
              onClick={closeModal}
            >
              Cerrar Informacion
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Renderizado;
