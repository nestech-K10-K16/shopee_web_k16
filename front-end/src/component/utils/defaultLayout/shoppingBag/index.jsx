import React from "react";
import "./index.scss";
import { IMG_PRODUCT_02 } from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons";

const ShoppingBag = ({ visible }) => {
  if (!visible) return null;

  const onClickShoppingBagVisibility = () => {
    document.getElementById("shopping-bag").style.display = "none";
  };

  const Items = (props) => {
    return (
      <div className="flex">
        <img className="mr-3" src={props.src} alt="" />

        <div className="mr-5">
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

  return (
    <div id="shopping-bag">
      <div className="shopping-bag__content">
        <div className="flex justify-end">
          <button
            className="bg-body border-0"
            onClick={onClickShoppingBagVisibility}
          >
            <FontAwesomeIcon icon={faChevronRight} size="xl" />
          </button>
        </div>

        <p className="heading-05 mb-4">Shopping bag</p>
        <p className="heading-05 mb-4">4 Items</p>

        <div className="shopping-bag__content__product">
          <Items src={IMG_PRODUCT_02}>
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
