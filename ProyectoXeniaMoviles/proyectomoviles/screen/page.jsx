import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { obtenerProductosDummy } from '../libs/index-fetch';
import Renderizado from '../components/Renderizado';

const DummyJsonPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerProductosDummy(`?timestamp=${Date.now()}`);
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
    flexDirection: 'column', // Cambiado a 'column'
    justifyContent: 'space-between',
    padding: 16,
  },
});

export default DummyJsonPage;
