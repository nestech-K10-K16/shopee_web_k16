import React from "react";
import "./index.css";
import { IMG_LogoShopee } from "../../assets";

const Navbar = () => {
  return (
    <header id="header">
      <div className="header-top">
        <div className="header-top__left-side">
          <img src={IMG_LogoShopee} alt="" />
        </div>

        <div className="header-top__right-side">
          <ul className="header-top__right-side__menu">
            <li>
              <a href="/shop">Shop</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">Our story</a>
            </li>
          </ul>

          <div className="header-top__right-side__line-2 border-0-5px-solid-black-rotate--180deg"></div>

          <div className="header-top__right-side__icon-list">
            <a href="#">
              <i class="fa-solid fa-magnifying-glass"></i>
            </a>

            <a href="#">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>

            <a href="/my-account-login">
              <i class="fa-regular fa-user"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-0-5px-solid-black"></div>
    </header>
  );
};

export default Navbar;
