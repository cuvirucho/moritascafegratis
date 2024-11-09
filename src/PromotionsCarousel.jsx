// PromotionsCarousel.jsx
import React, { useState } from "react";

const promotions = [
  {
    id: 1,
    imageSrc: "", // URL de la imagen
    title: "Promoción 1",
    heading: "Promoción good week",
    description: "Martes de ",
    description2: "2x1",
    description4: "Cafes",
    description3: "Bolones",
    description5: "Wafles",
  },
  {
    id: 2,
    imageSrc: "",
    title: "Promoción 2",
    heading: "Lunes sweet",
    description: "Todos los desayunos imclutine un regalo",
  },
  {
    id: 3,
    imageSrc: "",
    title: "Promoción 3",
    heading: "Miercoles",
    description:"3x2 en desayunos",
  },
  // Agrega más promociones si es necesario
];

const PromotionsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? promotions.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === promotions.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {promotions.map((promo) => (
          <div key={promo.id} className={`carousel-item promo-${promo.id}`}>
            {/* Contenido único por promoción */}

            {promo.id === 1 ? (
              <div className="promo-content custom-style-1">
                <div className="item1cuerpoa">
                  <h2>{promo.heading}</h2>
                  <h3>{promo.description}</h3>
                  <p>{promo.description2}</p>
                </div>

                <div className="item1cuerpob">
                  <div className="promo1">
                    <p>{promo.description3}</p>
                  </div>

                  <div className="promo1">
                    <p>{promo.description4}</p>
                  </div>

                  <div className="promo1">
                    <p>{promo.description5}</p>
                  </div>
                </div>
              </div>
            ) 
            
            
            
            : promo.id === 2 ? (
              <div className="promo-content custom-style-2">
                <div className="contepromo">
                  <h1 className="titlipromo2">{promo.heading}</h1>

                  <div className="promo2">
                    <h3>30</h3>
                    <h2>%</h2>
                    <h4>off</h4>
                    <h5>on all</h5>
                    <h6>Products</h6>
                  </div>
                </div>
              </div>
            )
            
            
            
            
            : promo.id === 3 ? (
              <div className="promo-content custom-style-3">
                <div className="conterpromo" >
                  <h2>{promo.heading}</h2>
                  <p>{promo.description}</p>
                </div>
              </div>
            ) : (
              1
            )}
          </div>
        ))}
      </div>

      <button className="carousel-button prev" onClick={goToPrevious}>
        ⬅
      </button>
      <button className="carousel-button next" onClick={goToNext}>
        ➡
      </button>
    </div>
  );
};

export default PromotionsCarousel;
