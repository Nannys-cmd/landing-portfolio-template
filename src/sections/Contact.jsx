import "./Contact.css";

// eslint-disable-next-line react/prop-types
const Contact = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no se renderiza

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const phoneNumber = "5492616013999";
    const whatsappMessage = `Hola, mi nombre es ${name}. Mi correo es ${email}. Mensaje: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    console.log("🔗 Enlace generado:", whatsappURL);
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>Contacto</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            <strong>Enviar por WhatsApp</strong>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
