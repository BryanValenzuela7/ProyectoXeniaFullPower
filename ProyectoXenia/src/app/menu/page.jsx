import React from "react";

const MenuPrincipal = ({ mostrarMenu }) => {
  const menuClass = mostrarMenu ? "menu-visible" : "menu-oculto";

  return (
    <main className={`flex-1 bg-blue-800 text-white ${menuClass}`}>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="text-4xl font-bold mb-4">¡Bienvenido a nuestro instituto!</div>
        <p className="text-lg text-center mb-8">
          Descubre una experiencia única explorando todas las oportunidades que ofrecemos.
        </p>

        <div className="flex flex-col md:flex-row justify-around w-full gap-8">
          <Card
            title="Vida Estudiantil"
            text="Sumérgete en la armoniosa vida estudiantil de nuestro instituto. Participa en actividades, eventos y conoce a estudiantes apasionados."
            imageSrc={'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          />
          <Card
            title="Aulas Modernas"
            text="Nuestras aulas están equipadas con la última tecnología para proporcionar un ambiente de aprendizaje moderno y efectivo."
            imageSrc={'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          />
          <Card
            title="Biblioteca Inspiradora"
            text="Explora nuestra biblioteca, un lugar tranquilo y lleno de recursos para fomentar el estudio y la investigación."
            imageSrc={'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          />
        </div>
      </div>
    </main>
  );
};

const Card = ({ title, text, imageSrc }) => {
  return (
    <div className="bg-white text-black p-4 rounded-md shadow-md mb-4 md:w-1/3">
      <img src={imageSrc} alt={title} className="mb-4 rounded-md w-full" />
      <p className="text-xl font-bold mb-2">{title}</p>
      <p>{text}</p>
    </div>
  );
};

export default MenuPrincipal;
