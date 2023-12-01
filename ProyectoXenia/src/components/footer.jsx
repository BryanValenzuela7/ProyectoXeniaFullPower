import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter,FaRegWindowMinimize,FaInstagram } from 'react-icons/fa';
import Link from "next/link";
import "../app/styles/Footer.css";

const Footer = () => {
  
  return (
    <div>
      <footer className="custom-footer">
        <div>
          <img
            src="https://www.ensenada.tecnm.mx/wp-content/themes/tecnm/images/logo-ensenada.png"
            alt="Logo ITE"
            className="logo"
          />
        </div>
        <div className="contact-info">
            <p className='title-info'>CONTÁCTANOS</p>
            <FaRegWindowMinimize className='icons'/>
            <br></br>
            <p>Blvd. Tecnológico #150, Ex Ejido Chapultepec,</p>
            <p>C.P. 22780, Ensenada, Baja California.</p>
            <br></br>
            <p className="phone-container"><FaPhone className="phone-icon" />Teléfono: 646 177 5682</p>
            <p className="phone-container"><FaEnvelope className="phone-icon" />Email: webmaster@ensenada.tecnm.mx</p>
            <p className="phone-container"><FaFacebook className="phone-icon"/>tecnmcampusensenada/</p>
        </div>
        <div className="contact-info">
            <p className='title-info'>Navegacion</p>
            <FaRegWindowMinimize className='icons'/>
            <br></br>
            <Link href="/menu" passHref><p>MENU</p></Link>
            <Link href="/formulario" passHref><p>FORMULARIO</p></Link>
            <Link href="/fetcheo" passHref><p>ESTUDIANTES</p></Link>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <div className="contact-info">
            <p className='title-info'>Elaborado por</p>
            <FaRegWindowMinimize className='icons'/>
            <br></br>
            <p className="phone-container"><FaInstagram className="phone-icon"/>Salazar Silva Juan Carlos</p>
            <p className="phone-container"><FaInstagram className="phone-icon"/>San Miguel Osorio Jesus Elian</p>
            <p className="phone-container"><FaInstagram className="phone-icon"/>Lopez Campuzano Pedro Adrian</p>
            <p className="phone-container"><FaInstagram className="phone-icon"/>Valenzuela Encinas Bryan</p>
            
            <br></br>
            <br></br>
            
        </div>
      </footer>
      <footer className="custom-footer second-footer ">
        ©2023 Instituto Tecnológico de Ensenada - TecNM – Derechos reservados
      </footer>
    </div>
  );
};

export default Footer;
