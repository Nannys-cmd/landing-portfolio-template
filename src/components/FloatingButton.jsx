import "./FloatingButton.css"; // Asegúrate de importar tus estilos de FloatingButton.css


// eslint-disable-next-line react/prop-types
const FloatingButton = ({ onOpen }) => {
    return (
      <button className="floating-button" onClick={onOpen}>
        📩 Contacto
      </button>
    );
  };
  
  export default FloatingButton;
  