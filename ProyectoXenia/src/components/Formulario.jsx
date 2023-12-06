"use client";
import React, { useEffect, useState} from "react";
import { useRouter } from "next/navigation";
async function obtenerUsuario() {
  const nuevoUser = await fetch("http://localhost:3000/api/datosusuario");
  return nuevoUser.json();
}

const Formulario = () => {
  const route = useRouter();
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
    route.push('/fetcheo');
  };

  return (
    <div className="formulario-con-sombra2 p-2 bg-[] ">
     <h1 className="formulario-con-sombra3 p-4 grid gap-4 grid-cols-1 md:grid-cols-1 ">FORMULARIO DE REGISTRO</h1>
      
      <form
        className="formulario-con-sombra p-8 grid gap-4 grid-cols-1 md:grid-cols-2 z-0 "
        onSubmit={handleSubmit}
      >

<div class="inputbox">
          <input
            type="text" value={nombre_dependencia}
            onChange={(e) => setNombre_Dependencia(e.target.value)}
            required="required"
          />
        <span> DEPENDENCIA</span>
          <i></i>
        </div>

        <div class="inputbox">
          <input
            type="text" value={domicilio}
            onChange={(e) => setDomicilio(e.target.value)}
            required="required"
          />
        <span>DOMICILIO DE LA DEPENDENCIA</span>
          <i></i>
        </div>

        <div class="inputbox">
          <input
            type="text" value={nombre_titular}
            onChange={(e) => setNombre_Titular(e.target.value)}
            required="required"
          />
        <span>NOMBRE DEL TITULAR</span>
          <i></i>
        </div>

        <div class="inputbox">
          
          <input
            
            type="text"
            value={cargo_puesto}
            onChange={(e) => setCargo_Puesto(e.target.value)}
         
            required="required"
          />
        <span>PUESTO/CARGO DEL TITULAR</span>
          <i></i>
        </div>
        <div class="inputbox">
          
          <input
            type="text" value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required="required"
          />
        <span>NÚMERO TELÉFONO</span>
          <i></i>
        </div>
        <div class="inputbox">
          <input
            id="responsable" type="text" value={nombre}
            onChange={(e) => setNombre(e.target.value)} 
            required="required"
          />
            <span>NOMBRE DEL RESPONSABLE</span>
            <i></i>
        </div>

        
        <div class="inputbox">
          <input
            id="puesto" type="text" value={puesto}
            onChange={(e) => setPuesto(e.target.value)}
            required="required"
          />
          <span>PUESTO DEL RESPONSABLE</span>
          <i></i>
        </div>

        <div class="inputbox">
          <input
            id="contacto" type="text" value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required="required"
          />
          <span>CORREO ELECTRÓNICO</span>
          <i></i>
        </div>

        <div class="inputbox">
          <input
            type="text" value={departamento_area}
            onChange={(e) => setDepartamento_Area(e.target.value)}
            required="required"
          />
         <span>AREÁ DEL DEPARTAMENTO</span>
          <i></i>
        </div>
        <button type="submit" className="button1">
            Enviar
          </button>

          
      </form>
    </div>
  );
};

export default Formulario;
