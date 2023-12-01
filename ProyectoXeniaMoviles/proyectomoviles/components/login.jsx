import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Modal, Dimensions, SafeAreaView } from 'react-native';

const InicioSesion = ({ mostrarMenuPrincipal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const abrirModal = (contenido) => {
    setModalContent(contenido);
    setModalIsOpen(true);
  };

  const cerrarModal = () => {
    setModalIsOpen(false);
    setError(null);
  };

  const handleIngresar = async () => {
    try {
      abrirModal('¡Autenticación exitosa!');
    } catch (error) {
      console.error('Error al procesar la solicitud: ', error);
      setError('Error interno del servidor');
      abrirModal('Error: Datos incorrectos');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#1F7A8C' }}>
      <SafeAreaView style={{ width: Dimensions.get('window').width * 0.8, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 10, padding: 20, alignItems: 'center' }}>
        <Image
          source={{
            uri: 'https://img.freepik.com/vector-gratis/ilustracion-concepto-inicio-sesion_114360-757.jpg?w=900&t=st=1700554020~exp=1700554620~hmac=e25e01cfc8235417baed8c12496c6cb2f2a2dad3334066cfa0b54b8438e817a4',
          }}
          style={{ width: Dimensions.get('window').width * 0.5, height: Dimensions.get('window').width * 0.5, marginBottom: 20, borderRadius: 10 }}
        />
        <Text style={{ color: '#1F7A8C', fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>INICIO SESIÓN</Text>

        <TextInput
          style={{ borderColor: '#1F7A8C', borderWidth: 1, borderRadius: 5, padding: 10, width: '100%', marginBottom: 10, backgroundColor: 'white', color: '#1F7A8C' }}
          placeholder="Usuario"
          placeholderTextColor="#1F7A8C"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <TextInput
          style={{ borderColor: '#1F7A8C', borderWidth: 1, borderRadius: 5, padding: 10, width: '100%', marginBottom: 20, backgroundColor: 'white', color: '#1F7A8C' }}
          placeholder="Contraseña"
          placeholderTextColor="#1F7A8C"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Button
          title="Ingresar"
          onPress={handleIngresar}
          color="#1F7A8C"
        />

        <Modal
          visible={modalIsOpen}
          onRequestClose={cerrarModal}
          transparent
          animationType="slide"
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#1F7A8C', padding: 20, borderRadius: 10, width: '80%' }}>
              <Text style={{ color: 'white', marginBottom: 10 }}>{modalContent}</Text>
              {error && (
                <Button
                  title="Cerrar"
                  onPress={cerrarModal}
                />
              )}
              {modalContent === '¡Autenticación exitosa!' && !error && (
                <Button
                  title="Continuar"
                  onPress={() => {
                    mostrarMenuPrincipal(false);
                    cerrarModal();
                  }}
                />
              )}
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default InicioSesion;
