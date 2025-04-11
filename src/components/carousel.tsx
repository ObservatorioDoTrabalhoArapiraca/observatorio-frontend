import React, { useState, useEffect } from 'react';
import './carousel.css';

const images = [
  { src: '/images/cidade1.jpg', alt: 'Praça Central' },
  { src: '/images/cidade2.jpg', alt: 'Vista Aérea' },
  { src: '/images/cidade3.jpg', alt: 'Parque Municipal' },
];

const description = `
  Este projeto visa valorizar os espaços urbanos, promover o turismo local
  e destacar as belezas naturais e arquitetônicas da cidade. Com iniciativas 
  de infraestrutura e cultura, esperamos fortalecer o sentimento de pertencimento 
  e orgulho na população.
`;

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-left">
        <button className="carousel-button left" onClick={prevSlide}>&lt;</button>
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="carousel-image" />
        <button className="carousel-button right" onClick={nextSlide}>&gt;</button>
      </div>
      <div className="carousel-right">
        <h2>Sobre o Projeto</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Carousel;
