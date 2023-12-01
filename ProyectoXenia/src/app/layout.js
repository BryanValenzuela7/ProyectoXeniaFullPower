'use client'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import './globals.css'
import Footer from '@/components/Footer'
import InicioSesion from '@/app/login/page'
import NavbarB from '@/components/NavbarB'
import MenuPrincipal from './menu/page'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [mostrarInicioSesion, setMostrarInicioSesion] = useState(true)  
  const [mostrarMenuPrincipal, setMostrarMenuPrincipal] = useState(true)
  
  const handleAutenticacionExitosa = () => {
    setMostrarInicioSesion(false)
  }

  const handleOcultarMenuPrincipal = () => {
    setMostrarMenuPrincipal(false);
  }

  return (
    <html lang="en" style={{ height: '100%' }}>
      <body className=  {inter.className}  style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
        <main className="bg-[#E1E5F2]"style={{ flex: 1 }}>
        {mostrarInicioSesion ? (
          <InicioSesion mostrarMenuPrincipal={handleAutenticacionExitosa} />
        ) : (
          <>
            <NavbarB ocultarMenuPrincipal={handleOcultarMenuPrincipal}/>
            {mostrarMenuPrincipal && <MenuPrincipal/>}
            <div id='root'></div>
            {children}  
            <Footer/>
          </>
        )}
        </main>
      </body>
    </html>
  )
}