import React from "react";
import "./index.scss";
import { Input, Select, ToggleButton, ListProductToDo } from "component/common";
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
            <ListProductToDo />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
