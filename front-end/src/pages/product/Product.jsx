import React from "react";
import { Zoom } from "react-slideshow-image";
import { DefaultLayout } from "components";
import "react-slideshow-image/dist/styles.css";
import "./index.css";

const Product = () => {
  const images = ["../../assets/img-home01.png"];

  return (
    <>
      <DefaultLayout>
        <div className="Shoppe__product">
          <div className="Shoppe__product-container">
            <div className="Shoppe__product-image_small">
              <Zoom>
                {images.map((image, index) => (
                  <div key={index} className="each-slide">
                    <img src={image} alt={`Slide ${index + 1}`} />
                  </div>
                ))}
              </Zoom>
            </div>
            <div className="Shoppe__product-image_big">
              <img src={images[0]} alt="" />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Product;
