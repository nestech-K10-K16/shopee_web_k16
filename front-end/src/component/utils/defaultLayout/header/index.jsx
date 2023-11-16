import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMG_LOGO } from "assets";
import { PATHNAME_LIST } from "router/router";
import { cartSliceSelector, userSliceSelector } from "redux/selector";

const Header = (props) => {
  const { ShoppingBagOnClick } = props;

  const { userToken } = useSelector(userSliceSelector);
  const { cartByIdUser } = useSelector(cartSliceSelector);

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
          <ul className="header__content__right-side__menu flex gap-x-8">
            <li>
              <NavLink to={PATHNAME_LIST.SHOP}>Shop</NavLink>
            </li>
            <li>
              <NavLink to={PATHNAME_LIST.BLOG}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={PATHNAME_LIST.OUR_STORY}>Our story</NavLink>
            </li>

            <div className="border border-dark-silver -rotate-180"></div>

            <li>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </li>
            <li
              className="flex items-center cursor-pointer"
              onClick={ShoppingBagOnClick}
            >
              <FontAwesomeIcon
                className="mr-1"
                icon="fa-solid fa-cart-shopping"
              />
              ({userToken.data ? cartByIdUser.length : 0})
            </li>
            <li className="flex">
              {userToken.data?.Name ? (
                <>
                  <NavLink className="mr-2" to={PATHNAME_LIST.ACCOUNT}>
                    <FontAwesomeIcon icon="fa-regular fa-user" />
                  </NavLink>
                  <p>{userToken.data?.Name}</p>
                </>
              ) : (
                <NavLink to={PATHNAME_LIST.MY_ACCOUNT}>Login</NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>

      <div className="border border-solid border-bright-gray"></div>
    </header>
  );
};

export default Header;
