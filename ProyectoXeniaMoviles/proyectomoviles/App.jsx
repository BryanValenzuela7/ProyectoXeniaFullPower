import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import NavbarB from './components/NavbarB';
import Footer from './components/Footer';
import InicioSesion from './components/login';
import MenuPrincipal from './components/menuPrincipal';
import DummyJsonPage from './screen/page';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [mostrarInicioSesion, setMostrarInicioSesion] = useState(true);
  const [mostrarMenu, setMostrarMenu] = useState(true);

  const handleAutenticacionExitosa = () => {
    setMostrarInicioSesion(false);
  };

  const handleOcultarMenu = () => {
    setMostrarMenu(false);
  };

  const mostrarLogin = () => {
    setMostrarInicioSesion(true);
    setMostrarMenu(true);
  };

  const mostrarMenuPrincipal = () => {
    setMostrarMenu(true);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        {mostrarInicioSesion ? (
          <InicioSesion mostrarMenuPrincipal={handleAutenticacionExitosa} />
        ) : (
          <>
            <NavbarB
              ocultarMenuPrincipal={handleOcultarMenu}
              mostrarLogin={mostrarLogin}
              mostrarMenuPrincipal={mostrarMenuPrincipal}
            />
            {mostrarMenu && <MenuPrincipal />}
            <Footer />
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
    paddingTop: 40,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
});
