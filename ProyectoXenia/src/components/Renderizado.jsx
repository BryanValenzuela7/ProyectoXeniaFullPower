"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  userData,
  setUserData,
  nombre,
  setNombre,
  puesto,
  setPuesto,
  correo,
  setCorreo,
  nombre_dependencia,
  setNombre_Dependencia,
  domicilio,
  setDomicilio,
  nombre_titular,
  setNombre_Titular,
  cargo_puesto,
  setCargo_Puesto,
  departamento_area,
  setDepartamento_Area,
  telefono,
  setTelefono,
} from "../components/Formulario";

const Renderizado = ({ producto }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [useredit, setUserEdit] = useState(null);
  const [modoedicion, setModoEdicion] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleEliminarUser = async (e, datosusuarioId) => {
    // Este usalo para tu boton eliminar
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/datosusuario/${datosusuarioId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Usuario correctamente eliminado");
        fetchData();
      } else {
        console.log("Error al eliminar el usuario");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  const EditarUsuario = (data) => {
    // Este usalo para el boton editar
    setUserEdit(data);
    setModoEdicion(true);
    setNombre(data.nombre);
    setPuesto(data.puesto);
    setCorreo(data.correo);
    setNombre_Dependencia(data.nombre_dependencia);
    setDomicilio(data.domicilio);
    setTelefono(data.telefono);
    setNombre_Titular(data.nombre_titular);
    setCargo_Puesto(data.cargo_puesto);
    setDepartamento_Area(data.departamento_area);
  };

  const handleSubmit = (e) => {
    // Anexalo en tu diseño de renderizado
    e.preventDefault();
    if (modoedicion) {
      actualizarUser(
        useredit.id,
        nombre,
        puesto,
        correo,
        nombre_dependencia,
        domicilio,
        telefono,
        nombre_titular,
        cargo_puesto,
        departamento_area
      );
    }
  };

  const actualizarUser = async (
    datosusuarioId,
    nombre,
    puesto,
    correo,
    nombre_dependencia,
    domicilio,
    telefono,
    nombre_titular,
    cargo_puesto,
    departamento_area
  ) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/datosusuario/${datosusuarioId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre,
            puesto,
            correo,
            nombre_dependencia,
            domicilio,
            telefono,
            nombre_titular,
            nombre_dependencia,
            cargo_puesto,
            departamento_area,
          }),
        }
      );
      if (response.ok) {
        console.log("Datos de usuario actualizados correctamente");
        setModoEdicion(false);
        setNombre("");
        setPuesto("");
        setCorreo("");
        setNombre_Dependencia("");
        setDomicilio("");
        setTelefono("");
        setNombre_Titular("");
        setNombre_Dependencia("");
        setCargo_Puesto("");
        setDepartamento_Area("");
        setUserEdit(null);
        fetchData();
      } else {
        console.log("Error al actualizar el usuario");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <div className="w-full md:w-11/12 lg:w-11/12 xl:w-11/12 p-4 m-2 mt-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out overflow-wrap break-word">
      <div className="p-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
          {producto.nombre}
        </h1>
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
          <div
            className="absolute inset-0 bg-gray-800 opacity-50"
            onClick={closeModal}
          ></div>
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
