import React from "react";
import "./index.css";
import {
  IMG_PRODUCT_02,
  IMG_PRODUCT_03,
  IMG_PRODUCT_04,
  IMG_PRODUCT_05,
  IMG_PRODUCT_06,
  IMG_PRODUCT_07,
} from "assets";
import { PATHNAME_LIST } from "router/router";
import { Input, Select, ToggleButton, ProductStyle } from "component/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  return (
    <main>
      <section id="shop">
        <div className="shop__content d-flex">
          <div className="shop__content__left-side-bar me-5">
            <p className="heading-01">Shop The Latest</p>
            <div className="shop__content__left-side-bar__search d-flex align-items-center mb-4">
              <Input className="w-100" placeholder="search..." />
              <button className="bg-body border-0">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>

            <Select className="w-100 mb-2" text="Shop By"></Select>
            <Select className="w-100 mb-4" text="Sort By"></Select>

            <div className="shop__content__left-side-bar__on-sale d-flex justify-content-between align-items-center mb-2">
              <p className="heading-05 mb-0">On sale</p>
              <ToggleButton />
            </div>

            <div className="shop__content__left-side-bar__in-stock d-flex justify-content-between align-items-center">
              <p className="heading-05 mb-0">In stock</p>
              <ToggleButton />
            </div>
          </div>

          <div className="shop__content__product">
            <div className="home__content__product__row row">
              <div className="col">
                <ProductStyle
                  className="body-large"
                  link={PATHNAME_LIST.PRODUCT}
                  src={IMG_PRODUCT_02}
                />
                <p className="heading-03 mb-1">Lira Earrings</p>
                <p className="heading-04">$ 20,00</p>
              </div>

              <div className="col">
                <ProductStyle
                  className="body-large"
                  link={PATHNAME_LIST.PRODUCT}
                  src={IMG_PRODUCT_03}
                />
                <p className="heading-03 mb-1">Hal Earrings</p>
                <p className="heading-04">$ 25,00</p>
              </div>

              <div className="col">
                <ProductStyle
                  className="body-large"
                  link={PATHNAME_LIST.PRODUCT}
                  src={IMG_PRODUCT_04}
                />
                <p className="heading-03 margin-bottom-0-5rem">
                  Kaede Hair Pin Set Of 3
                </p>
                <p className="heading-04">$ 30,00</p>
              </div>
            </div>

            <div className="home__content__product__row row">
              <div className="col">
                <ProductStyle
                  className="body-large"
                  link={PATHNAME_LIST.PRODUCT}
                  src={IMG_PRODUCT_05}
                />
                <p className="heading-03 margin-bottom-0-5rem">
                  Hair Pin Set of 3
                </p>
                <p className="heading-04">$ 30,00</p>
              </div>

              <div className="col">
                <ProductStyle
                  className="body-large"
                  link={PATHNAME_LIST.PRODUCT}
                  src={IMG_PRODUCT_06}
                />
                <p className="heading-03 margin-bottom-0-5rem">
                  Plaine Necklace
                </p>
                <p className="heading-04">$ 19,00</p>
              </div>

              <div className="col">
                <ProductStyle
                  className="body-large"
                  link={PATHNAME_LIST.PRODUCT}
                  src={IMG_PRODUCT_07}
                />
                <p className="heading-03 margin-bottom-0-5rem">
                  Yuki Hair Pin Set of 3
                </p>
                <p className="heading-04">$ 29,00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
