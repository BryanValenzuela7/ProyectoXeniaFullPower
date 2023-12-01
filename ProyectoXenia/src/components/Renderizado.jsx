'use client'
import { useState, useEffect } from 'react';

const Renderizado = ({ producto }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const handleDelete = async () => {
    try {
      // Realiza la lógica de eliminación directamente aquí
      // Por ejemplo, utilizando fetch o axios
      await fetch(`http://localhost:3000/api/datosusuario/${producto.id}`, {
        method: 'DELETE',
        // Otros encabezados y datos necesarios
      });

      // Puedes realizar otras acciones después de la eliminación si es necesario

      // Cierra el modal después de la eliminación
      closeModal();

    } catch (error) {
      console.error('Error al eliminar el producto', error);
      // Manejar errores si es necesario
    }
  };

  const handleEdit = () => {
    // Lógica para preparar el modal de edición con los datos actuales del producto
    setEditedProduct({
      nombre: producto.nombre,
      puesto: producto.puesto,
      correo: producto.correo,
      nombre_dependencia: producto.nombre_dependencia,
      domicilio: producto.domicilio,
      telefono: producto.telefono,
      nombre_titular: producto.nombre_titular,
      cargo_puesto: producto.cargo_puesto,
      departamento_area: producto.departamento_area,
    });

    // Abre el modal de edición
    openEditModal();
  };

  const handleSaveChanges = async () => {
    try {

      await fetch(`http://localhost:3000/api/datosusuario/${producto.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProduct),
      });

      closeEditModal();

    } catch (error) {
      console.error('Error al actualizar el producto', error);

    }
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

            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full mt-6 mr-2"
              onClick={handleDelete}
            >
              Eliminar
            </button>

            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full mt-6"
              onClick={handleEdit}
            >
              Editar
            </button>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
          <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={closeEditModal}></div>
          <div className="bg-white p-8 rounded-lg z-50 max-w-screen-md mx-auto overflow-y-auto grid grid-cols-2 gap-4">
           
           <div className="mb-4">
             <label className="block text-gray-600 text-sm font-semibold mb-2">Nombre</label>
             <input
               type="text"
               className="w-full border border-gray-300 p-2 rounded-md"
               value={editedProduct.nombre || ''}
               onChange={(e) => setEditedProduct({ ...editedProduct, nombre: e.target.value })}
              />
            </div>
     
            <div className="mb-4">
             <label className="block text-gray-600 text-sm font-semibold mb-2">Rol</label>
             <input
               type="text"
               className="w-full border border-gray-300 p-2 rounded-md"
               value={editedProduct.puesto || ''}
               onChange={(e) => setEditedProduct({ ...editedProduct, nombre: e.target.value })}
              />
            </div>

            <div className="mb-4">
             <label className="block text-gray-600 text-sm font-semibold mb-2">Contacto</label>
             <input
               type="text"
               className="w-full border border-gray-300 p-2 rounded-md"
               value={editedProduct.correo || ''}
               onChange={(e) => setEditedProduct({ ...editedProduct, nombre: e.target.value })}
              />
            </div>

            <div className="mb-4">
             <label className="block text-gray-600 text-sm font-semibold mb-2">Dependencia</label>
             <input
               type="text"
               className="w-full border border-gray-300 p-2 rounded-md"
               value={editedProduct.nombre_dependencia || ''}
               onChange={(e) => setEditedProduct({ ...editedProduct, nombre: e.target.value })}
              />
            </div>

            <div className="mb-4">
             <label className="block text-gray-600 text-sm font-semibold mb-2">Domicilio</label>
             <input
               type="text"
               className="w-full border border-gray-300 p-2 rounded-md"
               value={editedProduct.domicilio || ''}
               onChange={(e) => setEditedProduct({ ...editedProduct, nombre: e.target.value })}
              />
            </div>

            <div className="mb-4">
             <label className="block text-gray-600 text-sm font-semibold mb-2">Numero telefono</label>
             <input
               type="text"
               className="w-full border border-gray-300 p-2 rounded-md"
               value={editedProduct.telefono || ''}
               onChange={(e) => setEditedProduct({ ...editedProduct, nombre: e.target.value })}
              />
            </div>

            <div className="mb-4">
             <label className="block text-gray-600 text-sm font-semibold mb-2">Nombre Encargado</label>
             <input
               type="text"
               className="w-full border border-gray-300 p-2 rounded-md"
               value={editedProduct.nombre_titular || ''}
               onChange={(e) => setEditedProduct({ ...editedProduct, nombre: e.target.value })}
              />
            </div>

            <div className="mb-4">
             <label className="block text-gray-600 text-sm font-semibold mb-2">Cargo</label>
             <input
               type="text"
               className="w-full border border-gray-300 p-2 rounded-md"
               value={editedProduct.cargo_puesto || ''}
               onChange={(e) => setEditedProduct({ ...editedProduct, nombre: e.target.value })}
              />
            </div>

            <div className="mb-4">
             <label className="block text-gray-600 text-sm font-semibold mb-2">Departamento</label>
             <input
               type="text"
               className="w-full border border-gray-300 p-2 rounded-md"
               value={editedProduct.departamento_area || ''}
               onChange={(e) => setEditedProduct({ ...editedProduct, nombre: e.target.value })}
              />
            </div>
            <button
              className="col-span-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full mt-6"
              onClick={handleSaveChanges}
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Renderizado;
