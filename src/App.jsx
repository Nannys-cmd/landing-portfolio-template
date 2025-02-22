import { useState } from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Clients from "./sections/Clients";
import Integrations from "./sections/Integrations";
import MonitoringSystems from "./sections/MonitoringSystems";
import Equipament from "./sections/Equipament";
import Team from "./sections/Team";
import Contact from "./sections/Contact";
import FloatingButton from "./components/FloatingButton";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Integrations />
      <Equipament />
      <MonitoringSystems />
      <Team />
      <Footer />

      {/* Modal de contacto */}
      <Contact isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Botón flotante */}
      <FloatingButton onOpen={() => setIsModalOpen(true)} />
    </div>
  );
}

export default App;
