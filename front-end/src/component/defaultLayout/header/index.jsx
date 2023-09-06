import React from "react";
import "./index.scss";
import $ from "jquery";
import { Link } from "react-router-dom";
import { PATHNAME_LIST } from "router/router";
import { IMG_LOGO } from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const Header = (props) => {
  const { productCart } = useSelector((state) => state.productSlice);
  const { ShoppingBagOnClick } = props;

  $(function () {
    $(".header__content__left-sider").click(function () {
      $(".header__content__right-side__menu li").removeClass("tab-active");
    });
  });

  $(function () {
    $(".header__content__right-side__menu li").click(function () {
      $(".header__content__right-side__menu li").removeClass("tab-active");
      $(this).addClass("tab-active");
    });
  });

  return (
    <header>
      <section id="header">
        <div className="header__content flex justify-between pb-6">
          <div className="header__content__left-sider">
            <Link
              className="header__content__left-sider__logo"
              to={PATHNAME_LIST.HOME}
            >
              <img src={IMG_LOGO} alt="" />
            </Link>
          </div>

          <div className="header__content__right-side">
            <ul className="header__content__right-side__menu flex space-x-8">
              <li>
                <Link className="heading-05" to={PATHNAME_LIST.SHOP}>
                  Shop
                </Link>
              </li>
              <li>
                <Link className="heading-05" to={PATHNAME_LIST.BLOG}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className="heading-05" to={PATHNAME_LIST.OUR_STORY}>
                  Our story
                </Link>
              </li>

              <div className="border border-dark-silver -rotate-180"></div>

              <div className="header__content__right-side__menu-icon flex space-x-8">
                <li>
                  <Link>
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                  </Link>
                </li>
                <li>
                  <div className="flex">
                    <Link onClick={ShoppingBagOnClick}>
                      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                    </Link>
                    <p className="ml-1">({productCart.length})</p>
                  </div>
                </li>
                <li>
                  <Link to={PATHNAME_LIST.ACCOUNT}>
                    <FontAwesomeIcon icon="fa-regular fa-user" />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="border border-solid border-bright-gray"></div>
      </section>
    </header>
  );
};

export default Header;
