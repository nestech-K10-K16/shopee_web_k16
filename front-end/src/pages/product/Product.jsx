import React, { useState } from "react";
import { DefaultLayout } from "components";
import { home01, home02, home03, home05 } from "pages/home/import";
import { Star, StarWHite } from "./import";
import "configs/fontIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "./index.css";

const Product = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [activeTabs, setActiveTabs] = useState([true, false, false]);

  const handleChange = (index) => {
    setTabIndex(index);
  };

  const userChange = (index) => {
    setTabIndex(index);

    // Set the active state for each tab based on the index
    const newActiveTabs = activeTabs.map((_, i) => (i === index ? 1 : 0));
    setActiveTabs(newActiveTabs);
  };

  return (
    <>
      <div className="Shoppe__product-navbar">
        <DefaultLayout>
          <div className="Shoppe__product">
            <div className="Shoppe__product-container">
              <div className="Shoppe__product-image">
                <div className="small">
                  <img src={home01} alt="home01" />
                  <img src={home01} alt="home01" />
                  <img src={home01} alt="home01" />
                  <img src={home01} alt="home01" />
                </div>
                <div className="big">
                  <img src={home01} alt="home01" />
                  <div className="slider-gray"></div>
                  <div className="slider-black"></div>
                </div>
              </div>
              <div className="Shoppe__product-text">
                <h2>Lira Earrings</h2>
                <h4>$ 20,00</h4>
                <div className="Shoppe__product-star">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <h6>1 customer review</h6>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam placerat, augue a volutpat hendrerit, sapien tortor
                  faucibus augue, a maximus elit ex vitae libero. Sed quis
                  mauris eget arcu facilisis consequat sed eu felis.
                </p>
                <div className="Shoppe__product-button">
                  <div className="count">
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                  </div>
                  <button>ADD TO CART</button>
                </div>
                <div className="icon">
                  <div className="heart">
                    <FontAwesomeIcon
                      className="gray"
                      icon="fa-regular fa-heart"
                    />
                    <FontAwesomeIcon
                      className="red"
                      icon="fa-regular fa-heart"
                    />
                  </div>
                  <div className="social">
                    <FontAwesomeIcon
                      className="gray"
                      icon="fa-regular fa-envelope"
                    />
                    <FontAwesomeIcon
                      className="gray"
                      icon="fa-brands fa-facebook-f"
                    />
                    <FontAwesomeIcon
                      className="gray"
                      icon="fa-brands fa-instagram"
                    />
                    <FontAwesomeIcon
                      className="gray"
                      icon="fa-brands fa-twitter"
                    />
                  </div>
                </div>
                <h1>SKU:</h1>
                <h3>Categories:</h3>
              </div>
            </div>
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList selectedIndex={tabIndex} onSelect={handleChange}>
                <div className="Shoppe__product-tabs">
                  <Tab
                    value={1}
                    className={`Shoppe__product-white ${
                      activeTabs[0] ? "active-tab" : ""
                    }`}
                    onClick={() => userChange(0)}
                  >
                    Description
                  </Tab>
                  <Tab
                    value={2}
                    className={`Shoppe__product-black ${
                      activeTabs[1] ? "active-tab" : ""
                    }`}
                    onClick={() => userChange(1)}
                  >
                    Aditional information
                  </Tab>
                  <Tab
                    value={3}
                    className={`Shoppe__product-black_02 ${
                      activeTabs[2] ? "active-tab" : ""
                    }`}
                    onClick={() => userChange(2)}
                  >
                    Reviews(0)
                  </Tab>
                </div>
              </TabList>
              <TabPanel value={1}>
                <div className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam placerat, augue a volutpat hendrerit, sapien tortor
                  faucibus augue, a maximus elit ex vitae libero. Sed quis
                  mauris eget arcu facilisis consequat sed eu felis. Nunc sed
                  porta augue. Morbi porta tempor odio, in molestie diam
                  bibendum sed.
                </div>
              </TabPanel>
              <TabPanel value={2}>
                <div className="information">
                  <h2>Weight:</h2>
                  <h3>Dimentions:</h3>
                  <h4>Colours:</h4>
                  <p>Material:</p>
                </div>
              </TabPanel>
              <TabPanel value={3}>
                <div className="review">
                  <div className="review-1">
                    <div className="evaluate">
                      <h3>2 Reviews for lira earings</h3>
                      <h4>Scarlet withch</h4>
                      <div className="review-star">
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={StarWHite} alt="" />
                        <img src={StarWHite} alt="" />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet.
                      </p>
                    </div>
                    <div className="evaluate">
                      <h4>Scarlet withch</h4>
                      <div className="review-star">
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={StarWHite} alt="" />
                        <img src={StarWHite} alt="" />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Aliquam placerat.
                      </p>
                    </div>
                  </div>
                  <div className="review-2">
                    <h3>Add a Review</h3>
                    <h2>
                      Your email address will not be published. Required fields
                      are marked *
                    </h2>
                    <h4>Your Review*</h4>
                    <div className="slider"></div>
                    <div className="input">
                      <input type="text" placeholder="Enter your name*" />
                      <input type="email" placeholder="Enter your Email*" />
                    </div>
                    <div className="remember">
                      <input className="checkbox" type="checkbox" />
                      <label>
                        Save my name, email, and website in this browser for the
                        next time I comment
                      </label>
                    </div>
                    <p>Your Rating*</p>
                    <div className="img">
                      <img src={StarWHite} alt="" />
                      <img src={StarWHite} alt="" />
                      <img src={StarWHite} alt="" />
                      <img src={StarWHite} alt="" />
                      <img src={StarWHite} alt="" />
                    </div>
                    <button>Submit</button>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
            <h1>Similar Items</h1>
            <div className="Shoppe__product-similar_item">
              <div className="image">
                <img src={home02} alt="home" />
                <h3>Ollie Earrings</h3>
                <h4>$ 30,00</h4>
              </div>
              <div className="image">
                <img src={home03} alt="home" />
                <h3>Hal Earrings</h3>
                <h4>$ 25,00</h4>
              </div>
              <div className="image">
                <img src={home05} alt="home" />
                <h3>Kaede Hair Pin Set Of 3</h3>
                <h4>$ 30,00</h4>
              </div>
            </div>
          </div>
        </DefaultLayout>
      </div>
    </>
  );
};

export default Product;
