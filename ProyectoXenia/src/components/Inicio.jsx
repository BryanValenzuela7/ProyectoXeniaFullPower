import React from "react";

const MenuPrincipal = ({ mostrarMenu }) => {
  const menuClass = mostrarMenu ? "menu-visible" : "menu-oculto";

  return (
    <main className="flex-1 bg-[#E1E5F2] text-black ">
      <div className="flex flex-col min-h-screen items-center justify-center text-black">
        <div className="text-4xl font-bold mb-4 mt-8 text-black">¡Bienvenido a Gestor de Servicio Social!</div>
        <p className="text-lg text-center mb-8 text-blue">
        Administra y supervisa las actividades de servicio social de manera eficiente.
        </p>
        <div className="flex flex-col md:flex-row justify-center w-full gap-8">
          <Card
            title="Mensaje importante"
            text="Es una actividad obligatoria que 
            promueve el Estado (Art. 5 Constitucional), 
            con el fin de fomentar el desarrollo y la organización 
            de la comunidad, mejorando directa o indirectamente el bienestar 
            individual o colectivo a través de la prestación de servicios 
            fundados en el principio de solidaridad social, vinculando a 
            los universitarios con la problemática socioeconómica de nuestra nación."
            imageSrc={'https://scontent.ftij1-1.fna.fbcdn.net/v/t39.30808-6/372637058_148250868326599_2148509657791925866_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFsuQxvlY7wmyWBXXOjKNe32NNgEDhwQdbY02AQOHBB1u8pAqvJqSgJjNMCEUE6PytfAamnINgUr58cH_CpTeV6&_nc_ohc=EHCxOEj_nh4AX88-5ew&_nc_ht=scontent.ftij1-1.fna&oh=00_AfATRK3Tp54uNpZi8iIiDVO8LbPjYxbYI9O5dHD9hUSmrA&oe=6576307E'}
          />
          <Card
            title="Mensaje importante"
            text={<>Los requisitos para llevar a cabo son los siguientes:<br />
        
                    Estar inscrito en el semestre escolar.<br />
                    Contar con el 70% de créditos (Revisar Kardex).<br />
                    Asistir a la plática de Inducción (Se avisara por correo).<br />
                    Seguir el procedimiento del servicio social.<br />
                    Dar de alta el programa (en caso de que no exista ya un registro).<br />
                    Darse de alta en el classroom (Clave: 7wah36a)
        </>}
            imageSrc={'https://scontent.ftij1-3.fna.fbcdn.net/v/t39.30808-6/368600844_142477008903985_4528377214908235272_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEhzlWbpaf29I3-1m7zWgQuL-VBA9OMHywv5UED04wfLPrTWNeLnXq8Es2OkEGhdH_kMyyhsIV4ZsBf_KairjUP&_nc_ohc=kePzWpfcCwMAX94hVI_&_nc_ht=scontent.ftij1-3.fna&oh=00_AfDCNyOM_uQkgzJ6tXIjQ9xnVtKnxdRAoXrPsJv7ya2dFg&oe=65756D71'}
          />
          <Card
            className="text-black"
            title="Mensaje importante"
            text="Estudiantes del Instituto Tecnológico de Ensenada del TecNM
            Realizar tu servicio social es importante en tu formación académica.
            Te presentamos Lineamientos, procedimiento, formatos y lo que necesitas conocer para inicia, dar seguimiento y concluir tu servicio social.
            Si estas en tiempo para iniciarlo, empieza ya, no lo dejes para el último momento.
            "
            imageSrc={'https://scontent.ftij1-1.fna.fbcdn.net/v/t39.30808-6/402447977_196234390194913_6544448412043634576_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFVgzlRg97woTQ9rmDjXLInriDA62JEtqWuIMDrYkS2pUwYCVkUvBZMe4Sc51T1TiCIzpk7IxJ1345PuDnGDhwD&_nc_ohc=T-liDL7tG-0AX9xMCWu&_nc_ht=scontent.ftij1-1.fna&oh=00_AfAO88HC9gpZBLlU9QHWs89tDXt41lTEnTP5ZBLt0bJ3pg&oe=6575953F'}
          />
          
        </div>
      </div>
    </main>
  );
};

const Card = ({ title, text, imageSrc }) => {
  return (
    <div className="bg-[#023E8A] text-white p-4 rounded-md shadow-md mb-4 md:w-1/3 m-2 h-">
      <img src={imageSrc} alt={title} className="mb-4 rounded-md w-full h-3/5 text-black" />
      <p className="text-xl font-bold mb-2 text-center">{title}</p>
      <p className="text-justify">{text}</p>
    </div>
  );
};

export default MenuPrincipal;
