// src/sections/MonitoringSystems.jsx
// import React from 'react';
import './MonitoringSystems.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Monitoring1 from '../assets/monitoring1.jpg'; // Asegúrate de que la ruta sea correcta
import Monitoring2 from '../assets/monitoring2.jpg';
import Monitoring3 from '../assets/monitoring3.jpg';
import Monitoring4 from '../assets/monitoring4.jpg';
import Monitoring5 from '../assets/monitoring5.jpg';
import Monitoring6 from '../assets/monitoring6.jpg';
import Monitoring7 from '../assets/monitoring7.jpg';
import Monitoring8 from '../assets/monitoring8.jpg';
import Monitoring9 from '../assets/monitoring9.jpg';
import Monitoring10 from '../assets/monitoring10.jpg';
import Monitoring11 from '../assets/monitoring11.jpg';
import Monitoring12 from '../assets/monitoring12.jpg';
import Monitoring13 from '../assets/monitoring13.jpg';
import Monitoring14 from '../assets/monitoring14.jpg';
import Monitoring15 from '../assets/monitoring15.jpg';
import Monitoring16 from '../assets/monitoring16.jpg';
import Monitoring17 from '../assets/monitoring17.jpg';
import Monitoring18 from '../assets/monitoring18.jpg';
import Monitoring19 from '../assets/monitoring19.jpg';

const images = [
  Monitoring1, Monitoring2, Monitoring3, Monitoring4, Monitoring5,
  Monitoring6, Monitoring7, Monitoring8, Monitoring9, Monitoring10, Monitoring11, Monitoring12, Monitoring13, Monitoring14, Monitoring15, Monitoring16, Monitoring17, Monitoring18, Monitoring19
];

function MonitoringSystems() {
  return (
    <section id="monitoring-systems" className="monitoring-systems">
      <h2>Instalación de Sistemas de Monitoreo</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Sistema de Monitoreo ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default MonitoringSystems;