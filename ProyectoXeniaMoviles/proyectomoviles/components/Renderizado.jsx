import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const Renderizado = ({ producto }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.card}>
        <Text style={styles.title}>{producto.nombre}</Text>
        <Text style={styles.subtitle}>Puesto: {producto.puesto}</Text>
        <Text style={styles.subtitle}>Correo: {producto.correo}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={openModal}
          >
            <Text style={styles.buttonText}>Ver más</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalOpen}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.overlay}
            onPress={closeModal}
          />
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={styles.modalTitle}>Dependencia</Text>
              <Text style={styles.modalText}>{producto.nombre_dependencia}</Text>

              <Text style={styles.modalTitle}>Domicilio</Text>
              <Text style={styles.modalText}>{producto.domicilio}</Text>

              <Text style={styles.modalTitle}># Teléfono</Text>
              <Text style={styles.modalText}>{producto.telefono}</Text>

              <Text style={styles.modalTitle}>Nombre Titular</Text>
              <Text style={styles.modalText}>{producto.nombre_titular}</Text>

              <Text style={styles.modalTitle}>Cargo</Text>
              <Text style={styles.modalText}>{producto.cargo_puesto}</Text>

              <Text style={styles.modalTitle}>Departamento</Text>
              <Text style={styles.modalText}>{producto.departamento_area}</Text>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={closeModal}
              >
                <Text style={styles.buttonText}>Cerrar Modal</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    padding: 16,
    marginVertical: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: 'gray',
    marginBottom: 8,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#3498db'
  },
  modalText: {
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: '#3498db',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginTop: 16,
  },
});

export default Renderizado;
