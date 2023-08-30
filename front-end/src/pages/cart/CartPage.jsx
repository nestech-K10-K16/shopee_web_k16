import React from "react";
import "configs/fontIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CartItem from "components/common/cartItem/CartItem";
import { useCart } from "hook/useCart/useCart";
import "./index.scss";

const CartPage = () => {
  const { cartItems, removeCartItem, totalPrice } = useCart();

  return (
    <div class="shoppe__cart">
      <div class="shoppe__cart-container">
        <h1 class="heading-01">Shopping Cart</h1>
        <div class="shoppe__cart-product">
          <div class="shoppe__cart-item">
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

            <Link to="/shop">
              <button class="btn-white">UPDATE CART</button>
            </Link>
            <div class="button">
              <p>Coupon Code</p>
              <div class="btn-black">APPLY COUPON</div>
            </div>
          </div>
          <div class="shoppe__cart-totals">
            <h1 className="heading-02">Cart totals</h1>
            <div className="hero-block">
              <div className="hero-text">
                <h3>SUBTOTAL</h3>
                <h4>SHIPPING</h4>
              </div>
              <div className="hero-money">
                <h1>${totalPrice.toFixed(2)}</h1>
                <div className="heading-05">
                  Shipping costs will be calculated once you have provided
                  address.
                </div>
                <div className="calculate">
                  <h3>SELECT A COUNTRY</h3>
                  <FontAwesomeIcon
                    className="icon-s"
                    icon="fa-solid fa-chevron-up"
                  />
                </div>
                <div className="select">
                  <h3>CITY</h3>
                  <FontAwesomeIcon
                    className="icon-s"
                    icon="fa-solid fa-chevron-down"
                  />
                </div>
                <div className="city">
                  <h3>POST CODE / ZIP</h3>
                  <FontAwesomeIcon
                    className="icon-s"
                    icon="fa-solid fa-chevron-down"
                  />
                </div>
                <div className="post">
                  <h3>CALCULATE SHIPPING</h3>
                  <FontAwesomeIcon
                    className="icon-s"
                    icon="fa-solid fa-chevron-down"
                  />
                </div>
                <button className="btn-white">UPDATE TOTALS</button>
              </div>
            </div>
            <div className="total">
              <h6>TOTAl</h6>
              <h6>$ 87,00</h6>
            </div>
            <Link to="/checkout">
              <div className="btn-black">PROCEED TO CHECKOUT</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
