import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IMG_LOGO } from "assets";
import { PATHNAME_LIST } from "router/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = (props) => {
  const { productCart } = useSelector((state) => state.productSlice);
  const { ShoppingBagOnClick } = props;

  return (
    <header id="header">
      <nav className="header__content flex justify-between pb-6">
        <Link
          className="header__content__left-sider__logo"
          to={PATHNAME_LIST.HOME}
        >
          <img src={IMG_LOGO} alt="" />
        </Link>

        <div className="header__content__right-side">
          <ul className="header__content__right-side__menu flex space-x-8">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={PATHNAME_LIST.SHOP}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to={PATHNAME_LIST.BLOG}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={PATHNAME_LIST.OUR_STORY}>Our story</NavLink>
            </li>

            <div className="border border-dark-silver -rotate-180"></div>

            <div className="header__content__right-side__menu-icon flex space-x-8">
              <li>
                <NavLink>
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </NavLink>
              </li>
              <li>
                <div className="flex">
                  <NavLink onClick={ShoppingBagOnClick}>
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                  </NavLink>
                  <p className="ml-1">({productCart.length})</p>
                </div>
              </li>
              <li>
                <NavLink to={PATHNAME_LIST.ACCOUNT}>
                  <FontAwesomeIcon icon="fa-regular fa-user" />
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </nav>

      <div className="border border-solid border-bright-gray"></div>
    </header>
  );
};

export default Header;
