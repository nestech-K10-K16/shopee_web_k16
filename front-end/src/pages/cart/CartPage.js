import React from "react";
import { DefaultLayout } from "components";
import { home01, home02, home03 } from "pages/home/import";
import "configs/fontIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <>
      <div className="cart__hover">
        <DefaultLayout>
          <div className="Shoppe__cart">
            <div className="Shoppe__cart-container">
              <h1>Shopping Cart</h1>
              <div className="Shoppe__cart-product">
                <div className="Shoppe__cart-item">
                  <div className="all-img">
                    <div className="image">
                      <img src={home01} alt="" />
                      <div className="text">
                        <h3>Lira Earrings</h3>
                        <h4>Black / Medium</h4>
                        <h4>$ 20,00</h4>
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
                  <div className="all-img">
                    <div className="image">
                      <img src={home02} alt="" />
                      <div className="text">
                        <h3>Lira Earrings</h3>
                        <h4>Black / Medium</h4>
                        <h4>$ 20,00</h4>
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
                  <div className="all-img">
                    <div className="image">
                      <img src={home03} alt="" />
                      <div className="text">
                        <h3>Lira Earrings</h3>
                        <h4>Black / Medium</h4>
                        <h4>$ 20,00</h4>
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
                  <button>UPDATE CART</button>
                  <div className="button">
                    <p>Coupon Code</p>
                    <div className="black">APPLY COUPON</div>
                  </div>
                </div>
                <div className="Shoppe__cart-totals">
                  <h1>Cart totals</h1>
                  <div className="hero-block">
                    <div className="hero-text">
                      <h3>SUBTOTAL</h3>
                      <h4>SHIPPING</h4>
                    </div>
                    <div className="hero-money">
                      <h1>$ 65,00</h1>
                      <h2>
                        Shipping costs will be calculated once you have provided
                        address.
                      </h2>
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
                      <button>UPDATE TOTALS</button>
                    </div>
                  </div>
                  <div className="total">
                    <h6>TOTAl</h6>
                    <h6>$ 87,00</h6>
                  </div>
                  <Link to="/checkout">
                    <div className="black">PROCEED TO CHECKOUT</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </DefaultLayout>
      </div>
    </>
  );
};

export default CartPage;
