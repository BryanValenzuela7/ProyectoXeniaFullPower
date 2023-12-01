import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const NavbarB = ({
  ocultarMenuPrincipal,
  mostrarLogin,
  mostrarFormulario,
  mostrarEstudiantes,
  mostrarMenu
}) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.setNativeProps({
      style: { translateY: navRef.current.translateY === 0 ? -1000 : 0 },
    });
  };

  const handleLinkClick = (accion) => {
    if (accion === 'mostrarLogin') {
      mostrarLogin();
    } else if (accion === 'ocultarMenu') {
      mostrarMenu();
    } else if (accion === 'mostrarFormulario') {
      mostrarFormulario();
      showNavbar();
    } else if (accion === 'mostrarEstudiantes') {
      mostrarEstudiantes();
      showNavbar();
    }
  };

  return (
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://pinotepa.tecnm.mx/wp-content/uploads/2020/03/LOGO_TECNM_BLANCO.png' }}
        style={styles.logo}
      />

      <View ref={navRef} style={styles.nav}>
        <TouchableOpacity onPress={() => handleLinkClick('mostrarLogin')}>
          <Text style={styles.navLink}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkClick('ocultarMenu')}>
          <Text style={styles.navLink}>MENU</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkClick('mostrarFormulario')}>
          <Text style={styles.navLink}>FORMULARIO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkClick('mostrarEstudiantes')}>
          <Text style={styles.navLink}>ESTUDIANTES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBtn} onPress={showNavbar}>
          <FontAwesome5 name="times" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.navBtn} onPress={showNavbar}>
        <FontAwesome5 name="bars" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    padding: 10,
    backgroundColor: '#023E8A',
    color: 'white',
    zIndex: 1000,
  },
  logo: {
    width: 100,
    height: 'auto',
    marginLeft: 1,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navLink: {
    margin: 8,
    color: 'white',
  },
  navBtn: {
    padding: 5,
    marginLeft: 10,
  },
});

export default NavbarB;
