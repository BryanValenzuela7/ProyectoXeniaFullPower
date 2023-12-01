import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Asegúrate de instalar el paquete correspondiente

const NavbarB = ({ ocultarMenuPrincipal }) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.setNativeProps({
      style: { translateY: navRef.current.translateY === 0 ? -1000 : 0 },
    });
  };

  const handleLinkClick = () => {
    ocultarMenuPrincipal(false);
  };

  return (
    <View style={styles.header}>
      {/* Coloca aquí tu imagen de logo */}
      <Image
        source={{ uri: 'https://pinotepa.tecnm.mx/wp-content/uploads/2020/03/LOGO_TECNM_BLANCO.png' }}
        style={styles.logo}
      />

      <View ref={navRef} style={styles.nav}>
        <TouchableOpacity onPress={handleLinkClick}>
          <Text style={styles.navLink}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLinkClick}>
          <Text style={styles.navLink}>MENU</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLinkClick}>
          <Text style={styles.navLink}>FORMULARIO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLinkClick}>
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
    backgroundColor: '#023E8A', // Cambia este color según tus necesidades
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
