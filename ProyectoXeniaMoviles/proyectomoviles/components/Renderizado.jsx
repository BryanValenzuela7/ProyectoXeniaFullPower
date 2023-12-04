// Renderizado.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import axios from 'axios';

const Renderizado = ({ producto }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleEditModal = () => {
    setEditModalVisible(!isEditModalVisible);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://192.168.1.69:3000/api/datosusuario/${producto.id}`);

      if (response.status === 200) {
        console.log("Usuario correctamente eliminado");
        toggleModal();
        // Aquí debes realizar la actualización de la lista de productos
      } else {
        console.log("Error al eliminar el usuario");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  const handleEdit = () => {
    setEditedProduct({
      nombre: producto.nombre,
      puesto: producto.puesto,
      correo: producto.correo,
      nombre_dependencia: producto.nombre_dependencia,
      domicilio: producto.domicilio,
      telefono: producto.telefono,
      nombre_titular: producto.nombre_titular,
      cargo_puesto: producto.cargo_puesto,
      departamento_area: producto.departamento_area,
    });

    toggleEditModal();
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(
        `http://192.168.1.69:3000/api/datosusuario/${producto.id}`,
        editedProduct,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        console.log('Cambios guardados correctamente');
        toggleEditModal();
        // Aquí debes realizar la actualización de la lista de productos
      } else {
        console.error('Error al actualizar el producto');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.productContainer} onPress={toggleModal}>
        <Text style={styles.productTitle}>{producto.nombre}</Text>
        <Text style={styles.productInfo}>Puesto: {producto.puesto}</Text>
        <Text style={styles.productInfo}>Correo: {producto.correo}</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{producto.nombre}</Text>
          <Text style={styles.modalInfo}>Puesto: {producto.puesto}</Text>
          <Text style={styles.modalInfo}>Correo: {producto.correo}</Text>
          <Text style={styles.modalInfo}>Dependencia: {producto.nombre_dependencia}</Text>
          <Text style={styles.modalInfo}>Domicilio: {producto.domicilio}</Text>
          <Text style={styles.modalInfo}>Número de Teléfono: {producto.telefono}</Text>
          <Text style={styles.modalInfo}>Nombre del Titular: {producto.nombre_titular}</Text>
          <Text style={styles.modalInfo}>Cargo: {producto.cargo_puesto}</Text>
          <Text style={styles.modalInfo}>Departamento: {producto.departamento_area}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.buttonDelete]} onPress={handleDelete}>
              <Text style={styles.buttonText}>Eliminar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleEdit}>
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={toggleModal}>
            <Text style={styles.buttonText}>Cerrar Informacion</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal isVisible={isEditModalVisible} onBackdropPress={toggleEditModal}>
        <View style={styles.modalContainer}>
          <TextInput
            value={editedProduct.nombre}
            onChangeText={(text) => setEditedProduct({ ...editedProduct, nombre: text })}
            style={styles.input}
          />
          <TextInput
            value={editedProduct.puesto}
            onChangeText={(text) => setEditedProduct({ ...editedProduct, puesto: text })}
            style={styles.input}
          />
          <TextInput
            value={editedProduct.correo}
            onChangeText={(text) => setEditedProduct({ ...editedProduct, correo: text })}
            style={styles.input}
            keyboardType='email-address'
          />
          <TextInput
            value={editedProduct.nombre_dependencia}
            onChangeText={(text) => setEditedProduct({ ...editedProduct, nombre_dependencia: text })}
            style={styles.input}
          />
          <TextInput
            value={editedProduct.domicilio}
            onChangeText={(text) => setEditedProduct({ ...editedProduct, domicilio: text })}
            style={styles.input}
          />
          <TextInput
            value={editedProduct.telefono}
            onChangeText={(text) => setEditedProduct({ ...editedProduct, telefono: text })}
            style={styles.input}
            keyboardType='numeric'
          />
          <TextInput
            value={editedProduct.nombre_titular}
            onChangeText={(text) => setEditedProduct({ ...editedProduct, nombre_titular: text })}
            style={styles.input}
          />
          <TextInput
            value={editedProduct.cargo_puesto}
            onChangeText={(text) => setEditedProduct({ ...editedProduct, cargo_puesto: text })}
            style={styles.input}
          />
          <TextInput
            value={editedProduct.departamento_area}
            onChangeText={(text) => setEditedProduct({ ...editedProduct, departamento_area: text })}
            style={styles.input}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
              <Text style={styles.buttonText}>Guardar Cambios</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={toggleEditModal}>
              <Text style={styles.buttonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  productContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productInfo: {
    color: 'gray',
    marginBottom: 4,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalInfo: {
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginBottom: 8,
    width: '100%',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '40%', // Ajusta el ancho según sea necesario
  },
  buttonDelete: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
});

export default Renderizado;
