import { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Mostrar el botón solo cuando el usuario haya hecho scroll hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; 2024 WTICS. Todos los derechos reservados.</p>
        <p>
          Página creada por: Daniela Bastias - 
          <a href="mailto:bastiasdaniela.84@gmail.com"> bastiasdaniela.84@gmail.com</a>
        </p>
      </div>

      <div className="footer-right">
        <a href="https://wa.me/5491126194448" target="_blank" rel="noopener noreferrer">
          📱 WhatsApp
        </a>
        <a href="mailto:adcante@wtics.com.ar">
          ✉️ Correo
        </a>
      </div>

      {/* Botón de Volver arriba */}
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          ⬆ Volver arriba
        </button>
      )}
    </footer>
  );
};

export default Footer;

