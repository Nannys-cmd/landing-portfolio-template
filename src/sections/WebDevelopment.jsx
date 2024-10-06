// src/sections/WebDevelopment.jsx
import './WebDevelopment.css';
import profileImage from '../assets/mi-foto.jpg';

function WebDevelopment() {
  return (
    <section id="web-development" className="web-development">
      <img src={profileImage} alt="Daniela Bastias" className="profile-photo" />
      <h2>Diseño Web y Bases de Datos</h2>
      <p>
        Soy Daniela Bastias, especialista en el desarrollo de sitios web y gestión de bases de datos. 
        Ofrezco soluciones personalizadas y optimizadas para empresas que buscan expandir su presencia digital.
      </p>
      <ul>
        <li>Desarrollo de sitios web modernos y responsivos</li>
        <li>Gestión y diseño de bases de datos eficientes</li>
        <li>Implementación de sistemas de monitoreo y seguridad</li>
      </ul>
    </section>
  );
}

export default WebDevelopment;
