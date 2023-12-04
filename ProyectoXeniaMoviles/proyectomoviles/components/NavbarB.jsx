import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';

const NavbarB = ({
  ocultarMenuPrincipal,
  mostrarLogin,
  mostrarFormulario,
  mostrarEstudiantes,
}) => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  const handleLinkClick = (accion) => {
    switch (accion) {
      case 'ocultarMenu':
        ocultarMenuPrincipal();
        break;
      case 'mostrarLogin':
        mostrarLogin();
        break;
      case 'mostrarFormulario':
        mostrarFormulario();
        break;
      case 'mostrarEstudiantes':
        mostrarEstudiantes();
        break;
      default:
        break;
    }
    // Cerrar el menú después de hacer clic en una opción
    setMostrarMenu(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => setMostrarMenu(false)}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
            <FontAwesome5 name={mostrarMenu ? 'times' : 'bars'} size={RFValue(20)} color="white" />
          </TouchableOpacity>

          <Image
            source={{ uri: 'https://pinotepa.tecnm.mx/wp-content/uploads/2020/03/LOGO_TECNM_BLANCO.png' }}
            style={styles.logo}
          />

          <TouchableOpacity style={styles.userButton} onPress={() => handleLinkClick('mostrarUsuario')}>
            <FontAwesome5 name="user" size={RFValue(20)} color="white" />
          </TouchableOpacity>
        </View>

        {mostrarMenu && (
          <View style={styles.nav}>
            <TouchableOpacity onPress={() => handleLinkClick('ocultarMenu')}>
              <Text style={styles.navLink}>MENU</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLinkClick('mostrarEstudiantes')}>
              <Text style={styles.navLink}>ESTUDIANTES</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#023E8A',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: 400,
  },
  menuButton: {
    padding: 10,
  },
  logo: {
    width: RFValue(90),
    height: RFValue(30),
    resizeMode: 'contain',
  },
  userButton: {
    padding: 10,
  },
  nav: {
    backgroundColor: '#023E8A',
    padding: 10,
  },
  navLink: {
    color: 'white',
    fontSize: RFValue(12),
    marginVertical: 7,
  },
});

export default NavbarB;
