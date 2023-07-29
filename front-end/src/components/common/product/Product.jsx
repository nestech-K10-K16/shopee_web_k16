import React from "react";
import "./index.css";
import { DefaultLayout } from "components";

const images = [
  { url: "../../../assets/img-home01.png" },
  { url: "../../../assets/img-home01.png" },
  { url: "../../../assets/img-home01.png" },
  { url: "../../../assets/img-home01.png" },
  { url: "../../../assets/img-home01.png" },
];

const Product = () => {
  return (
    <>
      <DefaultLayout>
        <div className="Shoppe__product">
          <div className="Shoppe__product-container">
            <div className="Shoppe__product-image_small">
              {images.map((image, index) => (
                <div className="img_wrap" key={index}>
                  <img src={image} alt="" />
                </div>
              ))}
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
