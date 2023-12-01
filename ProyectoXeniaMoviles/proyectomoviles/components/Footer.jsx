import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Asumiendo que FontAwesome5 es tu conjunto de iconos para React Native
import { TouchableOpacity } from 'react-native-gesture-handler'; // Usar TouchableOpacity para enlaces y botones en lugar de Link


const Footer = () => {
  return (
    <View>
      <View style={styles.customFooter}>
        <View>
          <Image
            source={{ uri: 'https://www.ensenada.tecnm.mx/wp-content/themes/tecnm/images/logo-ensenada.png' }}
            style={styles.logo}
          />
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.titleInfo}>CONTÁCTANOS</Text>
          <FontAwesome5 name="window-minimize" style={styles.icons} />
          <Text>Blvd. Tecnológico #150, Ex Ejido Chapultepec,</Text>
          <Text>C.P. 22780, Ensenada, Baja California.</Text>
          <Text style={styles.phoneContainer}><FontAwesome5 name="phone" style={styles.phoneIcon} />Teléfono: 646 177 5682</Text>
          <Text style={styles.phoneContainer}><FontAwesome5 name="envelope" style={styles.phoneIcon} />Email: webmaster@ensenada.tecnm.mx</Text>
          <Text style={styles.phoneContainer}><FontAwesome5 name="facebook" style={styles.phoneIcon} />tecnmcampusensenada/</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.titleInfo}>Navegacion</Text>
          <FontAwesome5 name="window-minimize" style={styles.icons} />
          <TouchableOpacity onPress={() => {/* Navegar a /menu */}}>
            <Text>MENU</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {/* Navegar a /formulario */}}>
            <Text>FORMULARIO</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {/* Navegar a /fetcheo */}}>
            <Text>ESTUDIANTES</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.titleInfo}>Elaborado por</Text>
          <FontAwesome5 name="window-minimize" style={styles.icons} />
          <Text style={styles.phoneContainer}><FontAwesome5 name="instagram" style={styles.phoneIcon} />Salazar Silva Juan Carlos</Text>
          <Text style={styles.phoneContainer}><FontAwesome5 name="instagram" style={styles.phoneIcon} />San Miguel Osorio Jesus Elian</Text>
          <Text style={styles.phoneContainer}><FontAwesome5 name="instagram" style={styles.phoneIcon} />Lopez Campuzano Pedro Adrian</Text>
          <Text style={styles.phoneContainer}><FontAwesome5 name="instagram" style={styles.phoneIcon} />Valenzuela Encinas Bryan</Text>
        </View>
      </View>
      <View style={styles.secondFooter}>
        <Text>©2023 Instituto Tecnológico de Ensenada - TecNM – Derechos reservados</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    customFooter: {
      backgroundColor: '#023E8A',
      padding: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%',
    },
    contactInfo: {
      color: '#ffffff',
      marginTop: 5,
      marginRight: 15,
      textTransform: 'uppercase',
      fontSize: 12,
      margin: 1,
      marginEnd: 10,
    },
    logo: {
      width: 120,
      height: 130,
      margin: 'auto',
    },
    secondFooter: {
      padding: 6,
      alignItems: 'center',
      textAlign: 'center',
      color: '#ffffff',
      flexDirection: 'column',
      backgroundColor: '#3c4448',
    },
    titleInfo: {
      fontSize: 16,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: '#FFFB22',
    },
    icons: {
      color: '#ffffff',
    },
    phoneContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    phoneIcon: {
      marginRight: 5,
    },
  });

export default Footer;