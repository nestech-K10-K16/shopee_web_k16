import { useState } from "react";
import { IMG_02, IMG_03, IMG_04, IMG_06 } from "../../assets";
import "./index.css";

import Rating from "@mui/material/Rating";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

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

  //Tabs
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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

              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

              <p className="heading-05 margin-bottom-3rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit, sapien tortor faucibus
                augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis consequat sed eu felis.{" "}
              </p>

              <div className="d-flex margin-bottom-3rem">
                <div
                  className="product__content__top__product-infomation__amount-product
                             d-flex 
                             margin-right-1rem"
                >
                  <button
                    className="product__content__top__product-infomation__amount-product__increase rounded-start border-0 w-100"
                    onClick={onClickIncrease}
                    value="+"
                  >
                    +
                  </button>

                  <input
                    className="text-center border-0 w-100"
                    value={number}
                  />
                  <button
                    className="product__content__top__product-infomation__amount-product__reduce rounded-end border-0 w-100"
                    onClick={onClickreduce}
                    value="-"
                  >
                    -
                  </button>
                </div>

                <button className="product__content__top__product-infomation__add-to-cart body-large background-color-white-border-0-5px-solid w-100">
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
                  <a className="text-black margin-right-2rem" href="#">
                    <i class="fa-regular fa-envelope fa-xl"></i>
                  </a>

                  <a className="text-black margin-right-2rem" href="#">
                    <i class="fa-brands fa-facebook-f fa-xl "></i>
                  </a>

                  <a className="text-black margin-right-2rem" href="#">
                    <i class="fa-brands fa-instagram fa-xl "></i>
                  </a>

                  <a className="text-black margin-right-2rem" href="#">
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

          <Box
            className="margin-bottom-4rem"
            sx={{ width: "100%", typography: "body1" }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange}>
                  <Tab className="text-black" label="Description" value="1" />
                  <Tab
                    className="text-black"
                    label="Aditional information"
                    value="2"
                  />
                  <Tab className="text-black" label="Reviews" value="3" />
                </TabList>
              </Box>
              <TabPanel className="heading-05" value="1">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam placerat, augue a volutpat hendrerit, sapien tortor
                  faucibus augue, a maximus elit ex vitae libero. Sed quis
                  mauris eget arcu facilisis consequat sed eu felis. Nunc sed
                  porta augue. Morbi porta tempor odio, in molestie diam
                  bibendum sed.
                </p>
              </TabPanel>
              <TabPanel className="heading-05" value="2">
                <p> Weight: 0.3 kg</p>
                <p>Dimentions: 15 x 10 x 1 cm</p>
                <p>Colours: Black, Browns, White</p>
                <p>Material: Metal</p>
              </TabPanel>
              <TabPanel className="product__content__review d-flex justify-content-between" value="3">
                <div></div>

                <div className="d-flex flex-column">
                  <p className="heading-03 margin-bottom-1rem">Add a Review</p>

                  <p className="margin-bottom-3rem">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>

                  <input
                    className="body-medium border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem margin-bottom-1rem"
                    placeholder="Your Review*"
                  ></input>

                  <input
                    className="body-medium border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem margin-bottom-1rem"
                    placeholder="Enter your name*"
                  ></input>

                  <input
                    className="body-medium border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem margin-bottom-1rem"
                    placeholder="Enter your Email*"
                  ></input>

                  <div className="d-flex margin-bottom-3rem">
                    <input className="margin-right-0-5rem" type="checkbox" />
                    Save my name, email, and website in this browser for the
                    next time I comment
                  </div>

                  <p>Your Rating*</p>

                  <Rating className="margin-bottom-2rem"
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />

                  <button className="product__content__review__btn-submit background-color-black-color-white-text-decoration-none-padding-1rem-4rem-border-radius-10px">
                    Submit
                  </button>
                </div>
              </TabPanel>
            </TabContext>
          </Box>

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
