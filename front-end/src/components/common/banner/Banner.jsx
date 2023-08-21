import React, { useState, useEffect } from "react";
import introduce from "assets/img__home-introduce.jpg";
import { home01, home02, home03, home04 } from "pages/home/import";
import { Link } from "react-router-dom";
import "./banner.css";

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slidesData = [
    {
      imgSrc: introduce,
      title: "Gold big hoops",
      price: "$ 78,00",
    },
    {
      imgSrc: home01,
      title: "Gold big Bosnia",
      price: "$ 99,00",
    },
    {
      imgSrc: home02,
      title: "Gold big Sonic",
      price: "$ 118,00",
    },
    {
      imgSrc: home03,
      title: "Gold big Gong",
      price: "$ 108,00",
    },
    {
      imgSrc: home04,
      title: "Gold big Baghdad",
      price: "$ 168,00",
    },
  ];

  function currentSlide(n) {
    setSlideIndex(n);
  }

  const showSlide = (index) => {
    const slides = document.querySelectorAll(".Shoppe__banner");
    const dots = document.querySelectorAll(".dot");

    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    if (slides[index]) {
      slides[index].style.display = "block";
      dots[index].classList.add("active");
    }
  };
  useEffect(() => {
    showSlide(slideIndex);
  }, [slideIndex]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => {
      clearInterval(autoSlide);
    };
  }, [slidesData.length]);
  return (
    <>
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
              onClick={() => currentSlide(index + 1)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner;
