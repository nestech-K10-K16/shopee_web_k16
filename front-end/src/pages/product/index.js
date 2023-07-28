import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IMG_PRODUCT_02,
  IMG_PRODUCT_03,
  IMG_PRODUCT_04,
  IMG_PRODUCT_06,
} from "../../assets";
import "./index.css";

import Rating from "@mui/material/Rating";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Input from "../../component/common/input";
import Button from "../../component/common/button";
import ProductStyle from "../../component/common/productStyle";
import AmountInput from "../../component/common/amountInput";

const Product = () => {
  const [heart, setHeart] = useState(false);

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
          <div className="product__content__top d-flex mb-5">
            <div className="product__content__top__product-type-list me-4">
              <img className="mb-2" src={IMG_PRODUCT_02} alt="" />
              <img className="mb-2" src={IMG_PRODUCT_02} alt="" />
              <img className="mb-2" src={IMG_PRODUCT_02} alt="" />
              <img src={IMG_PRODUCT_02} alt="" />
            </div>

            <div className="product__content__top__product me-4">
              <img src={IMG_PRODUCT_02} alt="" />
            </div>

            <div className="product__content__top__product-infomation">
              <p className="heading-02 margin-bottom-1rem">Lira Earrings</p>

              <p className="heading-04 margin-bottom-3rem">$ 20,00</p>

              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

              <p className="heading-05 margin-bottom-3rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit, sapien tortor faucibus
                augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis consequat sed eu felis.
              </p>

              <div className="d-flex mb-5">
                <AmountInput className="me-3" />

                <Button className="w-100" type="white"></Button>
              </div>

              <div className="d-flex mb-5">
                <div className="me-4">
                  <FontAwesomeIcon
                    icon={faHeart}
                    size="xl"
                    style={{ color: heart ? "red" : "black" }}
                    onClick={onClickHeart}
                  />
                </div>

                <div className="border-0-5px-solid-bright-gray-rotate--180deg me-4"></div>

                <div>
                  <Link className="text-dark-silver me-4">
                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                  </Link>

                  <Link className="text-dark-silver me-4">
                    <FontAwesomeIcon icon={faFacebookF} size="xl" />
                  </Link>

                  <Link className="text-dark-silver me-4">
                    <FontAwesomeIcon icon={faInstagram} size="xl" />
                  </Link>

                  <Link className="text-dark-silver">
                    <FontAwesomeIcon icon={faTwitter} size="xl" />
                  </Link>
                </div>
              </div>

              <div className="product__content__top__product-infomation__title d-flex margin-bottom-1rem">
                <p className="heading-05">SKU:</p>
                <p className="heading-05 color-dark-silver">12</p>
              </div>

              <div className="product__content__top__product-infomation__title d-flex">
                <p className="heading-05">Categories:</p>
                <p className="heading-05 color-dark-silver">Fashion, Style</p>
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
              <TabPanel
                className="product__content__review d-flex justify-content-between"
                value="3"
              >
                <div>
                  <p className="heading-03">0 Reviews for lira earings</p>
                </div>

                <div className="d-flex flex-column">
                  <p className="heading-03 ">Add a Review</p>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>         

                  <Input
                    className="mb-3"
                    style={{ height: "6rem" }}
                    placeholder="Your Review*"
                  />
                  <Input className="mb-3" placeholder="Enter your name*" />
                  <Input className="mb-3" placeholder="Enter your Email*" />

                  <div className="d-flex mb-4">
                    <input className="me-3" type="checkbox" />
                    Save my name, email, and website in this browser for the
                    next time I comment
                  </div>

                  <div className="mb-4">
                    <p className="mb-0">Your Rating*</p>
                    <Rating
                      className="margin-bottom-2rem"
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </div>

                  <div className="start-0">
                    <Button
                      style={{
                        borderRadius: "4px",
                        padding: "12px 24px",
                      }}
                      className="body-large"
                      text="submit"
                    />
                  </div>
                </div>
              </TabPanel>
            </TabContext>
          </Box>

          <div className="product__content__similar-items-list">
            <p className="heading-02 margin-bottom-2rem">Similar Items</p>

            <div className="product__content__similar-items-list__item row">
              <div className="col">
                <ProductStyle
                  className="body-large"
                  src={IMG_PRODUCT_03}
                ></ProductStyle>
                <p className="heading-03 margin-bottom-0-5rem">Hal Earrings</p>
                <p className="heading-04">$ 25,00</p>
              </div>

              <div className="col">
                <ProductStyle
                  className="body-large"
                  src={IMG_PRODUCT_06}
                ></ProductStyle>
                <p className="heading-03 margin-bottom-0-5rem">
                  Plaine Necklace
                </p>
                <p className="heading-04">$ 19,00</p>
              </div>

              <div className="col">
                <ProductStyle
                  className="body-large"
                  src={IMG_PRODUCT_04}
                ></ProductStyle>
                <p className="heading-03 margin-bottom-0-5rem">
                  Kaede Hair Pin Set Of 3
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
