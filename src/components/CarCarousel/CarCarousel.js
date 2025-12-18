import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './CarCarouselStyle.css';
import CarList from '../carlist/CarList';

function CarCarousel() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(CarList());
  }, []);

  return (
    <div className="carousel-container-inner">
      <h2 className="section-title">Nuestra Flota</h2>
      <Swiper
        modules={[Pagination, Autoplay, A11y, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="car-card">
              <div className="card-image-wrapper">
                <img src={car.src} alt={car.description} loading="lazy" />
                <div className="card-badge">{car.brand}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{car.model}</h3>
                <p className="card-description">{car.description}</p>
                <div className="card-footer">
                  <span className="card-price">{car.price}</span>
                  <button className="card-btn">Ver Más</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarCarousel;
