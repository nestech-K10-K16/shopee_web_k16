import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { slidesData } from "utils/slidesData";
import {
  showSlide,
  autoSlide,
  currentSlide,
} from "hook/slidesShowLogic/SlidesShowLogic";
import "./banner.css";

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    showSlide(slideIndex);
  }, [slideIndex]);

  useEffect(() => {
    const autoSlideInterval = autoSlide(setSlideIndex, slidesData);
    return () => clearInterval(autoSlideInterval);
  }, []);

  return (
    <div className="Shoppe__banner-container">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`Shoppe__banner fade ${
            slideIndex === index + 1 ? "active" : ""
          }`}
        >
          <img src={slide.imgSrc} alt="introduce" />
          <div className="Shoppe__banner-content">
            <h1>{slide.title}</h1>
            <h2>{slide.price}</h2>
            <Link to="/product">
              <button>View Product</button>
            </Link>
          </div>
        </div>
      ))}

      <div className="Shoppe__banner-slider">
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`dot ${slideIndex === index + 1 ? "active" : ""}`}
            onClick={() => currentSlide(setSlideIndex, index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
