import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

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
    <View style={styles.container}>
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
          <FontAwesome5 name="times" size={0} color="white" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.navBtn} onPress={showNavbar}>
        <FontAwesome5 name="bars" size={0} color="white" />
      </TouchableOpacity>
    </View>
    </View>
      );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0, // Ajusta este valor según tus necesidades
  },
  header: {
    backgroundColor: '#023E8A',
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top:0,
  },

  logo: {
    width: RFValue(90), // Utiliza RFValue para el tamaño responsivo
    height: RFValue(30),
    resizeMode: 'contain',
  },

  nav: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  navLink: {
    color: 'white',
    fontSize: RFValue(12), // Utiliza RFValue para el tamaño responsivo
    marginHorizontal: 7,
  },

  navBtn: {
    
  },
});

export default NavbarB;
