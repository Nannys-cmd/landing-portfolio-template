// src/components/Header.jsx
import { useState } from 'react';
import logo from '../assets/logo.jpg';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <img src={logo} alt="WTICS Logo" className="logo" /> 
      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#clients">Clientes</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;
