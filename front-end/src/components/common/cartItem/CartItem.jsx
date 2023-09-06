import React, { useState } from "react";
import "configs/fontIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = (props) => {
  const { imgSrc, title, details, price } = props;
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(1);

  const handleRemoveClick = () => {
    setIsVisible(false);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    isVisible && (
      <div className="all-img">
        <div className="image-cart">
          <img src={imgSrc} alt="" />
          <div className="text-cart">
            <h3>{title}</h3>
            <h4>{details}</h4>
            <h4>$ {price},00</h4>
          </div>
        </div>
        <div className="title">
          <div className="count">
            <p onClick={handleDecrement}>-</p>
            <p>{count}</p>
            <p onClick={handleIncrement}>+</p>
          </div>
          <FontAwesomeIcon
            className="icon-item"
            icon="fa-solid fa-x"
            onClick={handleRemoveClick}
          />
        </div>
      </div>
    )
  );
};

export default CartItem;
