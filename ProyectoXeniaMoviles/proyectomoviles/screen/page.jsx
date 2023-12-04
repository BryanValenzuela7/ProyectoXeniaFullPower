import React, { useState, useEffect } from 'react';
import { obtenerProductosDummy } from '../libs/index-fetch';
import Renderizado from '../components/Renderizado';
import { View, ScrollView, StyleSheet } from 'react-native';

const DummyJsonPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerProductosDummy();
        setProducts(data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((producto) => (
        <Renderizado key={producto.id} producto={producto} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default DummyJsonPage;
