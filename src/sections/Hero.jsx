// import React from 'react';
import './Hero.css';  // Estilos específicos para la Hero section

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Consultora IT en Infraestructura y Seguridad</h1>
        <p>Soluciones tecnológicas a la medida de tus necesidades.</p>
        <a href="#contact" className="cta-button"><strong>Contáctanos</strong></a>
      </div>
    </section>
  );
}

export default Hero;
