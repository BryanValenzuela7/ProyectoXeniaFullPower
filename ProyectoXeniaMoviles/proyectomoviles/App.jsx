import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import NavbarB from './components/NavbarB';
import InicioSesion from './components/login';
import MenuPrincipal from './components/menuPrincipal';
import DummyJsonPage from './screen/page';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [mostrarInicioSesion, setMostrarInicioSesion] = useState(true);
  const [mostrarMenu, setMostrarMenu] = useState(true);
  const [mostrarDummyPage, setMostrarDummyPage] = useState(false);



  const handleAutenticacionExitosa = () => {
    setMostrarInicioSesion(false);
  };

  const handleMostrarMenu = () => {
    setMostrarMenu(true);
    setMostrarDummyPage(false);
  };

  const mostrarLogin = () => {
    setMostrarInicioSesion(true);
    setMostrarMenu(true);
  };

  const mostrarMenuPrincipal = () => {
    setMostrarMenu(true);
    setMostrarInicioSesion(false);
    setMostrarDummyPage(false);
  };

  const mostrarEstudiantesPage = () => {
    setMostrarMenu(false);
    setMostrarInicioSesion(false);
    setMostrarDummyPage(true);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* Barra de estado */}
      <StatusBar backgroundColor="#023E8A" barStyle="light-content" />

      {/* NavbarB que cubre toda la parte superior */}
      <NavbarB
        ocultarMenuPrincipal={handleMostrarMenu}  
        mostrarLogin={mostrarLogin}
        mostrarFormulario={mostrarMenuPrincipal}
        mostrarEstudiantes={mostrarEstudiantesPage}
        mostrarMenu={mostrarMenu}
      />

      {/* Contenido de la aplicación */}
      <View style={styles.content}>
        {mostrarInicioSesion ? (
          <InicioSesion mostrarMenuPrincipal={handleAutenticacionExitosa} />
        ) : (
          <>
            {mostrarMenu && <MenuPrincipal />}
            {mostrarDummyPage && <DummyJsonPage />}
          </>
        )}
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E5F2',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
});
