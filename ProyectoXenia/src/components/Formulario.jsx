'use client'
import React, { useEffect, useState } from "react";

async function obtenerUsuario() {
  const nuevoUser = await fetch("http://localhost:3000/api/datosusuario");
  return nuevoUser.json();
}

const Formulario = () => {
  const [userData, setUserData] = useState([]);
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [correo, setCorreo] = useState("");
  const [nombre_dependencia, setNombre_Dependencia] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nombre_titular, setNombre_Titular] = useState("");
  const [cargo_puesto, setCargo_Puesto] = useState("");
  const [departamento_area, setDepartamento_Area] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/api/datosusuario");
    const data = await response.json();
    setUserData(data);
  };

  const agregarUsuario = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/datosusuario", {
        method: "POST",
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
          cargo_puesto,
          departamento_area,
        }),
      });

      if (response.ok) {
        console.log("Usuario agregado correctamente");
        setNombre("");
        setPuesto(""),
          setCorreo(""),
          setNombre_Dependencia(""),
          setDomicilio(""),
          setTelefono(""),
          setNombre_Titular(""),
          setCargo_Puesto(""),
          setDepartamento_Area("");
        fetchData();
      } else {
        console.log("Error al agregar al usuario");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerUsuario();
      setUserData(data);
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarUsuario();
  };

  return (
    <div className="shadow-lg formulario-con-sombra2 p-8 ">
      <h1 className="text-center p-8">Registro</h1>
      <form
        className="formulario-con-sombra p-8 grid justify-items-center "
        onSubmit={handleSubmit}
      >
        <div className="grid gap-4 grid-cols-2 p-8 ">
          <div className="text-white">
            <label htmlFor="responsable">Nombre</label>
            <input
              id="responsable"
              className="mb-8 p-2 input text-black flex-initial w-64"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Responsable"
              required
            />
          </div>
          <div className="text-white">
            <label htmlFor="puesto">Rol</label>
            <input
              id="puesto"
              className="mb-8 p-2 input text-black flex-initial w-64"
              type="text"
              value={puesto}
              onChange={(e) => setPuesto(e.target.value)}
              placeholder="Puesto"
              required
            />
          </div>
          <div className="text-white">
            <label htmlFor="contacto">Contacto</label>
            <input
              id="contacto"
              className="mb-8 p-2 input text-black flex-initial w-64"
              type="text"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Correo"
              required
            />
          </div>
          <div className="text-white">
            <label htmlFor="Lugar">Dependencia</label>
            <input
              className="mb-8 p-2 input text-black flex-initial w-64"
              type="text"
              value={nombre_dependencia}
              onChange={(e) => setNombre_Dependencia(e.target.value)}
              placeholder="Lugar"
              required
            ></input>
          </div>
          <div className="text-white">
            <label className="domicilio">Domicilio</label>
            <input
              className="mb-8 p-2 input text-black flex-initial w-64"
              type="text"
              value={domicilio}
              onChange={(e) => setDomicilio(e.target.value)}
              placeholder="Direccion"
              required
            ></input>
          </div>
          <div className="text-white">
            <label htmlFor="telefono">Numero</label>
            <input
              className="mb-8 p-2 input text-black flex-initial w-64"
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Telefono"
              required
            ></input>
          </div>
          <div className="text-white">
            <label htmlFor="titular">Nombre encargado</label>
            <input
              className="mb-8 p-2 input text-black flex-initial w-64"
              type="text"
              value={nombre_titular}
              onChange={(e) => setNombre_Titular(e.target.value)}
              placeholder="Propietario"
              required
            ></input>
          </div>
          <div className="text-white">
            <label htmlFor="cargo_puesto">Cargo</label>
            <input
              className="mb-8 p-2 input text-black flex-initial w-64"
              type="text"
              value={cargo_puesto}
              onChange={(e) => setCargo_Puesto(e.target.value)}
              placeholder="Ocupacion"
              required
            ></input>
          </div>
          <div className="text-white">
            <label htmlFor="Departamento">Departamento</label>
            <input
              className="mb-8 p-2 input text-black flex-initial w-64"
              type="text"
              value={departamento_area}
              onChange={(e) => setDepartamento_Area(e.target.value)}
              placeholder="Seccion"
              required
            ></input>
          </div>
        </div>
        <button type="submit" className="text-black boton mb-8">
          Enviar
        </button>
      </form>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre de la comida"
          required
          className="texto"
        />
        <input
          type="text"
          value={puesto}
          onChange={(e) => setPuesto(e.target.value)}
          placeholder="Ingredientes"
          required
          className="texto"
        />
        <input
          type="text"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="Nombre de la comida"
          required
          className="texto"
        />
        <input
          type="text"
          value={nombre_dependencia}
          onChange={(e) => setNombre_Dependencia(e.target.value)}
          placeholder="Ingredientes"
          required
          className="texto"
        />
        <input
          type="text"
          value={domicilio}
          onChange={(e) => setDomicilio(e.target.value)}
          placeholder="Nombre de la comida"
          required
          className="texto"
        />
        <input
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Ingredientes"
          required
          className="texto"
        />
        <input
          type="text"
          value={nombre_titular}
          onChange={(e) => setNombre_Titular(e.target.value)}
          placeholder="Nombre de la comida"
          required
          className="texto"
        />
        <input
          type="text"
          value={cargo_puesto}
          onChange={(e) => setCargo_Puesto(e.target.value)}
          placeholder="Ingredientes"
          required
          className="texto"
        />
        <input
          type="text"
          value={departamento_area}
          onChange={(e) => setDepartamento_Area(e.target.value)}
          placeholder="Ingredientes"
          required
          className="texto"
        />
      </form> */}
    </div>
  );
};

export default Formulario;
