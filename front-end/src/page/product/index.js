import { useState } from "react";
import { IMG_02, IMG_03, IMG_04, IMG_06 } from "../../assets";
import "./index.css";

import { Rating } from "react-simple-star-rating";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Product = () => {
  const [number, setNumber] = useState(1);
  const [heart, setHeart] = useState(false);

  const onClickIncrease = () => {
    setNumber(number + 1);
  };

  const onClickreduce = () => {
    if (number === 1) return;
    setNumber(number - 1);
  };

  const onClickHeart = () => {
    setHeart(!heart);
  };

  return (
    <main>
      <section id="product">
        <div className="product__content">
          <div className="product__content__top d-flex margin-bottom-5rem">
            <div
              className="product__content__top__product-type-list
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

              <div className="d-flex margin-bottom-3rem">
                <div
                  className="product__content__top__product-infomation__amount
                             d-flex 
                             margin-right-1rem"
                >
                  <button onClick={onClickIncrease} value="+">
                    +
                  </button>
                  <input value={number} type="number" readOnly />
                  <button onClick={onClickreduce} value="-">
                    -
                  </button>
                </div>

                <button className="product__content__top__product-infomation__add-to-cart body-large background-color-white-border-0-5px-solid width-100">
                  ADD TO CART
                </button>
              </div>

              <div className="product__content__top__product-infomation__contact d-flex margin-bottom-2rem">
                <div>
                  <i
                    class="fa-solid fa-heart fa-xl margin-right-2rem"
                    style={{ color: heart ? "red" : "black" }}
                    onClick={onClickHeart}
                  ></i>
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

              <div className="product__content__top__product-infomation__title d-flex margin-bottom-1rem">
                <p className="heading-05 mb-0 margin-right-0-5rem">SKU:</p>
                <p className="heading-05 mb-0 color-dark-silver">12</p>
              </div>

              <div className="product__content__top__product-infomation__title d-flex">
                <p className="heading-05 mb-0 margin-right-0-5rem">
                  Categories:
                </p>
                <p className="heading-05 mb-0 color-dark-silver">
                  Fashion, Style
                </p>
              </div>
            </div>
          </div>

          <Tabs className="product__content__describe margin-bottom-5rem">
            <TabList className="product__content__describe-list d-flex list-unstyled mb-0">
              <Tab className="border-top-0-border-lef-0-border-right-0-border-bottom-0-5px-solid-black-focus margin-right-2rem padding-bottom-2rem">
                <p className="heading-03 mb-0">Description</p>
              </Tab>
              <Tab className="border-top-0-border-lef-0-border-right-0-border-bottom-0-5px-solid-black-focus margin-right-2rem padding-bottom-2rem">
                <p className="heading-03 mb-0">Aditional information</p>
              </Tab>
              <Tab className="border-top-0-border-lef-0-border-right-0-border-bottom-0-5px-solid-black-focus margin-right-2rem padding-bottom-2rem">
                <p className="heading-03 mb-0">Reviews</p>
              </Tab>
            </TabList>

            <div className="border-0-5px-solid-bright-gray margin-bottom-2rem"></div>

            <TabPanel>
              <p className="heading-05">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit, sapien tortor faucibus
                augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis consequat sed eu felis. Nunc sed porta augue. Morbi
                porta tempor odio, in molestie diam bibendum sed.
              </p>
            </TabPanel>
            <TabPanel>
              <ul className="list-unstyled">
                <li>
                  <p className="heading-05">Weight: 0.3 kg</p>
                </li>

                <li>
                  <p className="heading-05">Dimentions: 15 x 10 x 1 cm </p>
                </li>

                <li>
                  <p className="heading-05">Colours: Black, Browns, White</p>
                </li>

                <li>
                  <p className="heading-05">Material: Metal</p>
                </li>
              </ul>
            </TabPanel>
          </Tabs>

          <div className="product__content__similar-items-list">
            <p className="heading-02 margin-bottom-2rem">Similar Items</p>

            <div className="product__content__similar-items-list__item d-flex">
              <div className="margin-right-2rem">
                <img src={IMG_03} alt="" />
                <p className="heading-03 margin-bottom-0-5rem">Hal Earrings</p>
                <p className="heading-04">$ 25,00</p>
              </div>

              <div className="margin-right-2rem">
                <img src={IMG_06} alt="" />
                <p className="heading-03 margin-bottom-0-5rem">
                  Plaine Necklace
                </p>
                <p className="heading-04">$ 19,00</p>
              </div>

              <div>
                <img src={IMG_04} alt="" />
                <p className="heading-03 margin-bottom-0-5rem">
                  Kaede Hair Pin Set Of 3{" "}
                </p>
                <p className="heading-04">$ 30,00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
