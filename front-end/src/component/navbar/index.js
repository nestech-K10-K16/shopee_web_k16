import React from "react";
import "./index.css";
import { IMG_LogoShopee } from "../../assets";

const Navbar = () => {
  return (
    <header id="header">
      <section>
        <div className="header-top">
          <div className="header-top__left-side">
            <a href="/home">
              <img src={IMG_LogoShopee} alt="" />
            </a>
          </div>

          <div className="header-top__right-side">
            <ul className="header-top__right-side__menu">
              <li className="margin-left-2rem">
                <a href="/shop">Shop</a>
              </li>

              <li className="margin-left-2rem">
                <a href="#">Blog</a>
              </li>

              <li className="margin-left-2rem">
                <a href="#">Our story</a>
              </li>
            </ul>

            <div className="border-0-5px-solid-dark-silver-rotate--180deg margin-left-2rem"></div>

            <div className="header-top__right-side__icon-list">
              <a className="margin-left-2rem" href="#">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>

              <a className="margin-left-2rem" href="#">
                <i class="fa-solid fa-cart-shopping"></i>
              </a>

              <a className="margin-left-2rem" href="/my-account-login">
                <i class="fa-regular fa-user"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-0-5px-solid-bright-gray"></div>
      </section>
    </header>
  );
};

export default Navbar;
