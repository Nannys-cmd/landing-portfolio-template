import "./Contact.css";

// eslint-disable-next-line react/prop-types
const Contact = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no se renderiza

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "5491126194448";
    const whatsappMessage = `Hola, mi nombre es ${name}. Mi correo es ${email}. Mensaje: ${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const emailAddress = "adcante@wtics.com.ar";
    const emailSubject = "Consulta desde la página web";
    const emailBody = `Hola, mi nombre es ${name}.\nMi correo es ${email}.\n\nMensaje:\n${message}`;
    const mailtoURL = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.open(mailtoURL, "_blank");
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>Contacto</h2>
        <form className="contact-form">
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
          <div className="button-group">
            <button className="submit-button" onClick={handleWhatsAppSubmit}>
              📱 Enviar por WhatsApp
            </button>
            <button className="submit-button email-button" onClick={handleEmailSubmit}>
              📧 Enviar por Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
