import React from "react";
import "./index.scss";
import {
  Input,
  Select,
  RangeSlider,
  ListProduct,
  ToggleButton,
} from "component/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { filterProductName } from "redux/reducers/productSlice";

const Shop = () => {
  const { searchProduct } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const filterProduct = () => {
    dispatch(filterProductName(search));
  };

  const searchOnKeyDown = (e) => {
    if (e.key === "Enter") {
      filterProduct();
    }
  };

  return (
    <main>
      <section id="shop">
        <div className="shop__content flex">
          <div className="shop__content__left-side-bar w-80 mr-8">
            <p className="heading-01">Shop The Latest</p>
            <div className="flex items-center mb-4">
              <Input
                className="w-full pr-4"
                type="text"
                value={search}
                placeholder="search..."
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => searchOnKeyDown(e)}
              />
              <button
                className="bg-none border-0 -ml-4"
                onClick={() => filterProduct()}
              >
                <FontAwesomeIcon icon="fa-solid fa-search" />
              </button>
            </div>

            <Select className="w-full mb-2">
              <option value="">Shop By</option>
            </Select>
            <Select className="w-full mb-4">
              <option value="">Sort By</option>
            </Select>

            <RangeSlider />

            <div className="flex justify-between items-center mb-2">
              <p className="heading-05">On sale</p>
              <ToggleButton />
            </div>

            <div className="flex justify-between items-center">
              <p className="heading-05">In stock</p>
              <ToggleButton />
            </div>
          </div>

          <div className="shop__content__product">
            <ListProduct map={searchProduct} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
