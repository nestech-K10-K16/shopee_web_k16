import React from "react";
import "./index.css";
import { IMG_PRODUCT_02 } from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const product = (props) => {
  return (
    <div>
      <img className="me-3" src={props.src} alt="" />

      <div className="me-5 d-flex flex-column justify-content-between">
        <div>{props.children}</div>

        <div>
          <p className="mb-0">QTY: - 1 +</p>
        </div>
      </div>

      <div>
        <button className="bg-body border-0">
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
    </div>
  );
};

const ShoppingBag = () => {
  return (
    <div id="shopping-bag">
      <div className="shopping-bag__content">
        <p className="heading-05">Shopping bag</p>
        <p className="heading-05">5 Items</p>

        <div className="shopping-bag__content__product d-flex">
          <product src={IMG_PRODUCT_02}></product>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
