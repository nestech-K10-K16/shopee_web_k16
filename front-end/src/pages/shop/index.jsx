import React from "react";
import "./index.scss";
import { Input, Select, ToggleButton, ListProduct } from "component/common";
import { PATHNAME_LIST } from "router/router";
import {
  IMG_PRODUCT_01,
  IMG_PRODUCT_02,
  IMG_PRODUCT_03,
  IMG_PRODUCT_04,
  IMG_PRODUCT_05,
  IMG_PRODUCT_06,
} from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const product = [
    {
      name: "Lira Earrings",
      price: 20,
      src: IMG_PRODUCT_01,
      to: PATHNAME_LIST.PRODUCT,
    },
    {
      name: "Hal Earrings",
      price: 25,
      src: IMG_PRODUCT_02,
      to: PATHNAME_LIST.PRODUCT,
    },
    {
      name: "Kaede Hair Pin Set Of 3 ",
      price: 30,
      src: IMG_PRODUCT_03,
      to: PATHNAME_LIST.PRODUCT,
    },
    {
      name: "Hair Pin Set of 3",
      price: 30,
      src: IMG_PRODUCT_04,
      to: PATHNAME_LIST.PRODUCT,
    },
    {
      name: "Plaine Necklace",
      price: 19,
      src: IMG_PRODUCT_05,
      to: PATHNAME_LIST.PRODUCT,
    },
    {
      name: "Yuki Hair Pin Set of 3",
      price: 29,
      src: IMG_PRODUCT_06,
      to: PATHNAME_LIST.PRODUCT,
    },
  ];

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

            <Select className="w-full mb-2">
              <option value="">Shop By</option>
            </Select>
            <Select className="w-full mb-4">
              <option value="">Sort By</option>
            </Select>

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
            <ListProduct listProduct={product} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
