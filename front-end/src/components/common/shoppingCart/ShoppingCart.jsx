import React from "react";
import CartItem from "../cartItem/CartItem";
import { home01, home02, home03, home04 } from "pages/home/import";
import { Link } from "react-router-dom";
import "configs/fontIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

const ShoppingCart = ({ open, onclose }) => {
  if (!open) return null;
  return (
    <>
      <div className="Shoppe__bag">
        <div className="Shoppe__bag-container">
          <div className="icon-shopping">
            <h1>Shopping bag</h1>
            <div className="close">
              <FontAwesomeIcon onClick={onclose} icon="fa-solid fa-x" />
            </div>
          </div>
          <h2>5 items</h2>
          <div className="Shoppe__cart-item">
            <CartItem
              imgSrc={home01}
              title="Lira Earrings"
              details="Black / Medium"
              price="$ 20,00"
            />
            <CartItem
              imgSrc={home02}
              title="Ollie Earrings"
              details="Black / Medium"
              price="$ 20,00"
            />
            <CartItem
              imgSrc={home03}
              title="Ollie Earrings"
              details="Black / Medium"
              price="$ 20,00"
            />
            <CartItem
              imgSrc={home04}
              title="Lira Earrings"
              details="Black / Medium"
              price="$ 20,00"
            />
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
