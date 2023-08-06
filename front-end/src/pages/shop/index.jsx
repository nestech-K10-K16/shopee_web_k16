import React from "react";
import "./index.scss";
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
        <div className="shop__content flex">
          <div className="shop__content__left-side-bar w-80 mr-8">
            <p className="heading-01">Shop The Latest</p>
            <div className="flex items-center mb-4">
              <Input className="w-full pr-4" placeholder="search..." />
              <button className="bg-none border-0 -ml-4">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>

            <Select className="w-full mb-2" text="Shop By"></Select>
            <Select className="w-full mb-4" text="Sort By"></Select>

            <div className="flex justify-between items-center mb-2">
              <p className="heading-05 mb-0">On sale</p>
              <ToggleButton />
            </div>

            <div className="flex justify-between items-center">
              <p className="heading-05 mb-0">In stock</p>
              <ToggleButton />
            </div>
          </div>

          <div className="shop__content__product">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
              <div>
                <ProductStyle
                  className="body-large"
                  link={PATHNAME_LIST.PRODUCT}
                  src={IMG_PRODUCT_02}
                />
                <p className="heading-03 mb-1">Lira Earrings</p>
                <p className="heading-04 text-beaver">$ 20,00</p>
              </div>

              <div>
                <ProductStyle
                  className="body-large"
                  link={PATHNAME_LIST.PRODUCT}
                  src={IMG_PRODUCT_03}
                />
                <p className="heading-03 mb-1">Hal Earrings</p>
                <p className="heading-04 text-beaver">$ 25,00</p>
              </div>

              <div>
                <ProductStyle
                  className="body-large"
                  link={PATHNAME_LIST.PRODUCT}
                  src={IMG_PRODUCT_04}
                />
                <p className="heading-03 mb-1">Kaede Hair Pin Set Of 3</p>
                <p className="heading-04 text-beaver">$ 30,00</p>
              </div>

              <div>
                <ProductStyle
                  className="body-large"
                  link={PATHNAME_LIST.PRODUCT}
                  src={IMG_PRODUCT_05}
                />
                <p className="heading-03 mb-1">Hair Pin Set of 3</p>
                <p className="heading-04 text-beaver">$ 30,00</p>
              </div>

              <div>
                <ProductStyle
                  className="body-large"
                  link={PATHNAME_LIST.PRODUCT}
                  src={IMG_PRODUCT_06}
                />
                <p className="heading-03 mb-1">Plaine Necklace</p>
                <p className="heading-04 text-beaver">$ 19,00</p>
              </div>

              <div>
                <ProductStyle
                  className="body-large"
                  link={PATHNAME_LIST.PRODUCT}
                  src={IMG_PRODUCT_07}
                />
                <p className="heading-03 mb-1">Yuki Hair Pin Set of 3</p>
                <p className="heading-04 text-beaver">$ 29,00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
