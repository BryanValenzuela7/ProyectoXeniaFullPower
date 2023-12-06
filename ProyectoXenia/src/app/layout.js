'use client'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import './globals.css'
import Footer from '@/components/Footer'
import InicioSesion from '@/app/login/page'
import NavbarB from '@/components/NavbarB'
import MenuPrincipal from './menu/page'
import NuevoUsuario from './usuario/page'
import Renderizado from '@/components/Renderizado'
import Formulario from '@/components/Formulario'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  const [mostrarInicioSesion, setMostrarInicioSesion] = useState(true);
  const [mostrarMenuPrincipal, setMostrarMenuPrincipal] = useState(true);
  const [mostrarNuevoUsuario, setMostrarNuevoUsuario] = useState(false);

  const handleAutenticacionExitosa = () => {
    setMostrarInicioSesion(false);
    setMostrarMenuPrincipal(true);
  };

  const handleOcultarMenuPrincipal = () => {
    setMostrarMenuPrincipal(false);
  };

  const handleMostrarNuevoUsuario = () => {
    setMostrarNuevoUsuario(true);
    setMostrarInicioSesion(false);
    setMostrarMenuPrincipal(false);
  };

  const handleRegresarAInicioSesion = () => {
    setMostrarNuevoUsuario(false);
    setMostrarInicioSesion(true);
    setMostrarMenuPrincipal(true);
  };


  return (
    <html lang="en" style={{ height: '100%' }}>
      <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
        <main className="bg-[#ffffff]" style={{ flex: 1 }}>
          
          {mostrarInicioSesion ? (
            <InicioSesion
              mostrarMenuPrincipal={handleAutenticacionExitosa}
              mostrarNuevoUsuario={handleMostrarNuevoUsuario}
            />
          ) : mostrarMenuPrincipal ? (
            <>
              <NavbarB ocultarMenuPrincipal={handleOcultarMenuPrincipal} />
              {mostrarMenuPrincipal && <MenuPrincipal mostrarMenu={mostrarMenuPrincipal} />}
              {children}
              <Footer />
            </>
          ) : mostrarNuevoUsuario ? (
            <NuevoUsuario
              mostrarMenuPrincipal={handleOcultarMenuPrincipal}
              regresarAInicioSesion={handleRegresarAInicioSesion}
            />
          ) : null}
        </main>
      </body>
    </html>
  );
}
