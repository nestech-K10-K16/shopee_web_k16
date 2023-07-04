import { useState } from "react";
import { IMG_02 } from "../../assets";
import "./index.css";

import { Rating } from "react-simple-star-rating";

const Product = () => {
  const [number, setNumber] = useState(1);

  const onClickIncrease = () => {
    setNumber(number + 1);
  };

  const onClickreduce = () => {
    if (number === 1) return;
    setNumber(number - 1);
  };

  return (
    <main>
      <section id="product">
        <div className="product__content">
          <div
            className="product__content__top
                       display-flex"
          >
            <div
              className="product__content__top__product-type-list
                         display-flex-flex-direction-column 
                         margin-right-2rem"
            >
              <img className="margin-bottom-1rem" src={IMG_02} alt="" />
              <img className="margin-bottom-1rem" src={IMG_02} alt="" />
              <img className="margin-bottom-1rem" src={IMG_02} alt="" />
              <img className="margin-bottom-1rem" src={IMG_02} alt="" />
            </div>

            <div className="product__content__top__product margin-right-3rem">
              <img src={IMG_02} alt="" />
            </div>

            <div className="product__content__top__product-infomation">
              <p className="heading-02 margin-bottom-1rem">Lira Earrings</p>

              <p className="heading-04 margin-bottom-3rem">$ 20,00</p>

              <Rating
                className="margin-bottom-1rem"
                size={25}
                emptyColor="black"
              />

              <p className="heading-05 margin-bottom-3rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit, sapien tortor faucibus
                augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis consequat sed eu felis.{" "}
              </p>

              <div className="display-flex margin-bottom-3rem">
                <div
                  className="product__content__top__product-infomation__amount
                             display-flex 
                             margin-right-1rem"
                >
                  <button onClick={onClickIncrease} value="+">
                    +
                  </button>
                  <input value={number} type="number" readOnly/>
                  <button onClick={onClickreduce} value="-">
                    -
                  </button>
                </div>

                <button className="product__content__top__product-infomation__add-to-cart body-large background-color-white-border-0-5px-solid width-100">
                  ADD TO CART
                </button>
              </div>

              <div className="product__content__top__product-infomation__contact display-flex margin-bottom-2rem">
                <div>
                  <i class="fa-regular fa-heart fa-xl margin-right-2rem"></i>
                </div>

                <div className="border-0-5px-solid-bright-gray-rotate--180deg margin-right-2rem"></div>

                <div>
                  <a className="color-black margin-right-2rem" href="#">
                    <i class="fa-regular fa-envelope fa-xl"></i>
                  </a>

                  <a className="color-black margin-right-2rem" href="#">
                    <i class="fa-brands fa-facebook-f fa-xl "></i>
                  </a>

                  <a className="color-black margin-right-2rem" href="#">
                    <i class="fa-brands fa-instagram fa-xl "></i>
                  </a>

                  <a className="color-black margin-right-2rem" href="#">
                    <i class="fa-brands fa-twitter fa-xl "></i>
                  </a>
                </div>
              </div>

              <div className="product__content__top__product-infomation__title display-flex margin-bottom-1rem">
                <p className="heading-05 margin-right-0-5rem">SKU:</p>
                <p className="heading-05 color-dark-silver">12</p>
              </div>

              <div className="product__content__top__product-infomation__title display-flex">
                <p className="heading-05 margin-right-0-5rem">Categories:</p>
                <p className="heading-05 color-dark-silver">Fashion, Style</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
