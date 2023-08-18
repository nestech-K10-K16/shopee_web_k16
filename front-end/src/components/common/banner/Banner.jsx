import React, { useState, useEffect } from "react";
import introduce from "assets/img__home-introduce.jpg";
import { Link } from "react-router-dom";
import "./banner.css";

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    let slides = document.getElementsByClassName("Shoppe__banner");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");
    }
  }

  useEffect(() => {
    showSlides(slideIndex);
  });

  // useEffect(() => {
  //   // Hàm tự động tăng giá trị của slideIndex sau mỗi 3 giây
  //   const autoSlide = setInterval(() => {
  //     setSlideIndex((prevIndex) => (prevIndex === 3 ? 1 : prevIndex + 1));
  //   }, 3000);

  //   return () => {
  //     clearInterval(autoSlide);
  //   };
  // }, []);
  return (
    <>
      <div className="Shoppe__banner fade">
        <img src={introduce} alt="introduce" />

        <div className="Shoppe__banner-content">
          <h1>Gold big hoops</h1>
          <h2>$ 68,00</h2>
          <Link to="/product">
            <button>View Product</button>
          </Link>
        </div>
      </div>

      <div className="Shoppe__banner fade">
        <img src={introduce} alt="introduce" />

        <div className="Shoppe__banner-content">
          <h1>Gold big hoops</h1>
          <h2>$ 67,00</h2>
          <Link to="/product">
            <button>View Product</button>
          </Link>
        </div>
      </div>
      <div className="Shoppe__banner fade">
        <img src={introduce} alt="introduce" />

        <div className="Shoppe__banner-content">
          <h1>Gold big hoops</h1>
          <h2>$ 69,00</h2>
          <Link to="/product">
            <button>View Product</button>
          </Link>
        </div>
      </div>

      <div className="Shoppe__banner fade">
        <img src={introduce} alt="introduce" />

        <div className="Shoppe__banner-content">
          <h1>Gold big hoops</h1>
          <h2>$ 99,00</h2>
          <Link to="/product">
            <button>View Product</button>
          </Link>
        </div>
      </div>

      <div className="Shoppe__banner fade">
        <img src={introduce} alt="introduce" />

        <div className="Shoppe__banner-content">
          <h1>Gold big hoops</h1>
          <h2>$ 129,00</h2>
          <Link to="/product">
            <button>View Product</button>
          </Link>
        </div>
      </div>

      <div className="Shoppe__banner-slider">
        <span
          className={`dot ${slideIndex === 1 ? "active" : ""}`}
          onClick={() => currentSlide(1)}
        ></span>
        <span
          className={`dot ${slideIndex === 2 ? "active" : ""}`}
          onClick={() => currentSlide(2)}
        ></span>
        <span
          className={`dot ${slideIndex === 3 ? "active" : ""}`}
          onClick={() => currentSlide(3)}
        ></span>
        <span
          className={`dot ${slideIndex === 4 ? "active" : ""}`}
          onClick={() => currentSlide(4)}
        ></span>
        <span
          className={`dot ${slideIndex === 5 ? "active" : ""}`}
          onClick={() => currentSlide(5)}
        ></span>
      </div>
    </>
  );
};

export default Banner;
