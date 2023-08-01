import React, { useState } from "react";
import { Jewelry } from "components";
import { home01, home02, home03, home04, home05, home06 } from "../home/import";
import "configs/fontIcon";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DefaultLayout from "components/utils/defaultLayout/index";
import Slider from "react-slider";
import "./shop.css";

const Min = 0;
const Max = 180;

const ShopPage = () => {
  const [sliderValue, setSliderValue] = useState([40, Max]);

  return (
    <>
      <div className="Shoppe__shopPage">
        <DefaultLayout>
          <div className="Shoppe__shopPage-container">
            <div className="Shoppe__shopPage-text">
              <h1>Shop The Latest</h1>
              <div className="Shoppe__shopPage-search">
                <input type="search" placeholder="Search" />
                <Link to="/search">
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </Link>
              </div>
              <select id="country" name="Shop By">
                <option value="australia">Shop By</option>
                <option value="canada">I don't no</option>
                <option value="usa">I don't no</option>
              </select>
              <select id="country" name="Sort By">
                <option value="australia">Sort By</option>
                <option value="canada">I don't no</option>
                <option value="usa">I don't no</option>
              </select>
              <Slider
                className="slider-container"
                thumbClassName="slider-thumb"
                trackClassName="slider-track"
                onChange={setSliderValue}
                value={sliderValue}
                min={Min}
                max={Max}
              />
              <div className="Shoppe__shopPage-price_display">
                <p>
                  <div className={"value"}>
                    ${sliderValue[0]} - ${sliderValue[1]}
                  </div>
                </p>
                <p>Filter</p>
              </div>
              <div className="toggle">
                <p>On sale</p>
                <div className="off">
                  <FontAwesomeIcon icon="fa-solid fa-toggle-off" />
                </div>
              </div>
              <div className="toggle">
                <p>In stock</p>
                <div className="off">
                  <FontAwesomeIcon icon="fa-solid fa-toggle-off" />
                </div>
              </div>
            </div>
            <div className="Shoppe__shopPage_home-container">
              <div className="Shoppe__shopPage_home-container_group">
                <div className="update">
                  <Link to="/product">
                    <Jewelry
                      imgUrl={home01}
                      text="Lira Earrings"
                      dollar="$ 20,00"
                    />
                  </Link>
                </div>
                <div className="update">
                  <Jewelry
                    imgUrl={home02}
                    text="Hal Earrings"
                    dollar="$ 25,00"
                  />
                </div>
                <div className="update">
                  <Jewelry
                    imgUrl={home03}
                    text="Kaede Hair Pin Set Of 3 "
                    dollar="$ 30,00"
                  />
                </div>
                <div className="update">
                  <Jewelry
                    imgUrl={home04}
                    text="Hair Pin Set of 3"
                    dollar="$ 30,00"
                  />
                </div>
                <div className="update">
                  <Jewelry
                    imgUrl={home05}
                    text="Plaine Necklace"
                    dollar="$ 19,00"
                  />
                </div>
                <div className="update">
                  <Jewelry
                    imgUrl={home06}
                    text="Yuki Hair Pin Set of 3"
                    dollar="$ 29,00"
                  />
                </div>
              </div>
            </div>
          </div>
        </DefaultLayout>
      </div>
    </>
  );
};

export default ShopPage;
