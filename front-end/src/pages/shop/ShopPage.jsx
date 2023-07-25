import React from "react";
import { Jewelry } from "components";
import { home01, home02, home03, home04, home05, home06 } from "../home/import";
import "../../configs/fontIcon";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./shop.css";
import DefaultLayout from "components/utils/defaultLayout/index";

const ShopPage = () => {
  return (
    <>
      <DefaultLayout>
        <div className="Shoppe__shopPage">
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
            <div className="solid-gray">
              <div className="solid-black">
                <div className="solid-black_right"></div>
                <div className="solid-black_left"></div>
              </div>
            </div>
            <div className="Shoppe__shopPage-price">
              <p>Price: $40 - $180</p>
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
                <Jewelry
                  imgUrl={home01}
                  text="Lira Earrings"
                  dollar="$ 20,00"
                />
              </div>
              <div className="update">
                <Jewelry imgUrl={home02} text="Hal Earrings" dollar="$ 25,00" />
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
    </>
  );
};

export default ShopPage;
