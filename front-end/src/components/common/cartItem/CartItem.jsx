import React from "react";
import "configs/fontIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = ({ imgSrc, title, details, price }) => (
  <div className="all-img">
    <div className="image-cart">
      <img src={imgSrc} alt="" />
      <div className="text-cart">
        <h3>{title}</h3>
        <h4>{details}</h4>
        <h4>{price}</h4>
      </div>
    </div>
    <div className="title">
      <div className="count">
        <p>-</p>
        <p>1</p>
        <p>+</p>
      </div>
      <FontAwesomeIcon icon="fa-solid fa-x" />
    </div>
  </div>
);

export default CartItem;
