// import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Clients from './sections/Clients'; // Asegúrate de importar los componentes nuevos
import Integrations from './sections/Integrations'; // Asegúrate de importar los componentes nuevos
import MonitoringSystems from './sections/MonitoringSystems'; // Asegúrate de importar los componentes nuevos
import Equipament from './sections/Equipament'; // Asegúrate de importar el componente Equipament
import Team from './sections/Team';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Integrations />
      <Equipament /> {/* Asegúrate de agregar el componente aquí */}
      <MonitoringSystems />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

