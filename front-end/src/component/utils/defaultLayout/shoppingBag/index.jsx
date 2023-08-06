import React from "react";
import "./index.scss";
import {
  IMG_PRODUCT_02,
  IMG_PRODUCT_03,
  IMG_PRODUCT_04,
  IMG_PRODUCT_05,
} from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons";

const Items = (props) => {
  return (
    <div className="d-flex mb-3">
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

const onClickShoppingBagVisibility = () => {
  document.getElementById("shopping-bag").style.visibility = "collapse";
};

const ShoppingBag = () => {
  return (
    <div id="shopping-bag">
      <div className="shopping-bag__content">
        <div className="d-flex justify-content-end">
          <button
            className="bg-body border-0"
            onClick={onClickShoppingBagVisibility}
          >
            <FontAwesomeIcon icon={faChevronRight} size="xl" />
          </button>
        </div>

        <p className="heading-05">Shopping bag</p>
        <p className="heading-05">4 Items</p>

        <div className="shopping-bag__content__product">
          <Items src={IMG_PRODUCT_02}>
            <p>Lira Earrings</p>
            <p>Black / Medium</p>
            <p>$ 20,00</p>
          </Items>

          <Items src={IMG_PRODUCT_03}>
            <p>Lira Earrings</p>
            <p>Black / Medium</p>
            <p>$ 20,00</p>
          </Items>

          <Items src={IMG_PRODUCT_04}>
            <p>Lira Earrings</p>
            <p>Black / Medium</p>
            <p>$ 20,00</p>
          </Items>

          <Items src={IMG_PRODUCT_05}>
            <p>Lira Earrings</p>
            <p>Black / Medium</p>
            <p>$ 20,00</p>
          </Items>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
