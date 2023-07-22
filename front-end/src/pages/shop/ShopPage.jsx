import React from "react";
import { Jewelry } from "../../components";
import { home01, home02, home03, home04, home05, home06 } from "../home/import";
import "../../configs/fontIcon";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./shop.css";
import DefaultLayout from "../../layouts/defaultLayout";

const ShopPage = () => {
  return (
    <>
      <DefaultLayout>
        <div className="Shoppe__shopPage">
          <h1>Shop The Latest</h1>
          <div className="Shoppe__shopPage-container">
            <div className="Shoppe__shopPage-text"></div>
              <div className="Shoppe__shopPage-search">
                <input type="text" placeholder="Search" />
                <Link to="/search">
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </Link>
              </div>
            </div>
            <div className="Shoppe__shopPage_home-container"> 
              <div className="Shoppe__shopPage_home-container_group">
                <Jewelry
                  imgUrl={home01}
                  text="Lira Earrings"
                  dollar="$ 20,00"
                />
                <Jewelry imgUrl={home02} text="Hal Earrings" dollar="$ 25,00" />
                <Jewelry
                  imgUrl={home03}
                  text="Kaede Hair Pin Set Of 3 "
                  dollar="$ 30,00"
                />
                <Jewelry
                  imgUrl={home04}
                  text="Hair Pin Set of 3"
                  dollar="$ 30,00"
                />
                <Jewelry
                  imgUrl={home05}
                  text="Plaine Necklace"
                  dollar="$ 19,00"
                />
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
