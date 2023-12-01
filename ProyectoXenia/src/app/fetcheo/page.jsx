import React from 'react';
import { obtenerProductosDummy } from '@/libs/index-fetch';
import Renderizado from '@/components/Renderizado';

const DummyJsonPage = async () => {
  try {
    const data = await obtenerProductosDummy(`?timestamp=${Date.now()}`);
    const products = data;

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {products.map((producto) => (
          <Renderizado key={producto.id} producto={producto} />
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return <div>Error al cargar los productos</div>;
  }
};

export default DummyJsonPage;
