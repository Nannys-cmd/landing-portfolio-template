// import React from 'react';
import './Team.css';
import alberto from '../assets/Alberto.jpg';
import sebastian from '../assets/Sebastian.jpg';
import daniela from '../assets/Daniela.jpg'; // Nueva imagen

const Team = () => {
  return (
    <section id="team" className="team-section">
      <div className="team-content">
        <h2>Nuestro Equipo</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={alberto} alt="Alberto D. Canteros" className="team-photo" />
            <h3>Alberto D. Canteros</h3>
            <p>
              Profesional Analista, Licenciado en Tecnología, con más de 15 años de experiencia en IT, 
              Infraestructura, soporte, storage, backups. Certificado en Dahua e implementador de CCTV. 
              Comprometido a brindar un servicio profesional y confiable.
            </p>
          </div>
          <div className="team-member">
            <img src={sebastian} alt="Sebastian Gazzia" className="team-photo" />
            <h3>Sebastian Gazzia</h3>
            <p>
              Profesional Sysadmin/Devops con experiencia en administración de infraestructura, especializado 
              en virtualización, soporte, storage y backups. Formación en soporte de infraestructura en ISTEA, 
              con cursos complementarios. Comprometido con garantizar la disponibilidad, seguridad de los sistemas 
              y la confiabilidad para el cliente.
            </p>
          </div>
          <div className="team-member">
            <img src={daniela} alt="Daniela Bastias" className="team-photo" />
            <h3>Daniela Bastias</h3>
            <p>
              Desarrolladora Web y especialista en gestión de bases de datos, enfocada en brindar soluciones modernas, 
              personalizadas y responsivas. Con experiencia en diseño de sitios web y gestión de bases de datos eficientes, 
              Daniela ofrece un enfoque integral para el desarrollo digital de empresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
