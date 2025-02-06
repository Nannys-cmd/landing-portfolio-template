// import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-content">
        <h2>Nuestros Servicios</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Sistemas</h3>
            <ul>
              <li>Soporte de sistemas</li>
              <li>Servidores</li>
              <li>Backup</li>
              <li>Redes</li>
              <li>Seguridad informática</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Servicios de Instalación</h3>
            <ul>
              <li>PTZ</li>
              <li>Cableado estructurado</li>
              <li>Armado de rack y emprolijamiento</li>
              <li>Cámaras analógicas</li>
              <li>Cámaras IP</li>
            </ul>
          </div>
          {/* Nueva tarjeta para Desarrollo Web */}

        </div>
      </div>
    </section>
  );
}

export default Services;
