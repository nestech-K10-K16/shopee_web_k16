import React, { useState } from "react";
import CartItem from "../cartItem/CartItem";
import { Link } from "react-router-dom";
import "configs/fontIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "hook/useCart/useCart";
import "./index.scss";

const ShoppingCart = ({ open, onclose }) => {
  const { cartItems, removeCartItem } = useCart();
  const [isClosing, setIsClosing] = useState(false);

  if (!open) return null;
  return (
    <>
      <div className={`shoppe__bag ${isClosing ? "closing" : ""}`}>
        <div className="shoppe__bag-container">
          <div className="icon-shopping">
            <h1>Shopping bag</h1>
            <div className="close">
              <FontAwesomeIcon
                onClick={() => {
                  setIsClosing(true);
                  setTimeout(() => onclose(), 300); // Thêm setTimeout để sau khi kéo xong thì đóng
                }}
                icon="fa-solid fa-x"
              />
            </div>
          </div>
          <h2>5 items</h2>
          <div className="shoppe__bag-item">
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                imgSrc={item.imgSrc}
                title={item.title}
                details={item.details}
                price={item.price}
                onRemove={() => removeCartItem(index)}
              />
            ))}
          </div>
        </div>
        <div className="view-cart">
          <div className="subtotal">
            <h1>Subtotal (5 items)</h1>
            <h2>$ 100,00</h2>
          </div>
          <Link to="/cart">
            <div className="btn-cart">VIEW CART</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
