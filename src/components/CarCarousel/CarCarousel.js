import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './CarCarouselStyle.css';
import CarList from '../carlist/CarList';

function CarCarousel() {
  //crea un carrousel con los datos de CarList
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(CarList());
  }
  , []);

  return (
    <div className="car-carousel">
      <Carousel>
        {cars.map((car, index) => {
          return (
            <div key={index}>
              <img src={car.src} alt={car.description} />
              <p className="legend">{car.description} {car.price}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarCarousel;
