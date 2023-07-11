import React from "react";
import "./index.css";
import { IMG_LogoShopee } from "../../assets";
import { PATH_NAME } from "../../constants/common";

const Header = () => {
  return (
    <header>
      <section id="header">
        <div className="header-top d-flex justify-content-between align-items-center margin-bottom-2rem">
          <div className="header-top__left-sider">
            <a className="header-top__left-sider__logo" href="/">
              <img src={IMG_LogoShopee} alt="" />
            </a>
          </div>

          <div className="header-top__right-side ">
            <ul className="header-top__right-side__menu d-flex list-unstyled m-0">
              <li>
                <a
                  className="heading-05 text-black text-decoration-none margin-left-2rem"
                  href={PATH_NAME.SHOP}
                >
                  Shop
                </a>
              </li>

              <li>
                <a
                  className="heading-05 text-black text-decoration-none margin-left-2rem"
                  href={PATH_NAME.BLOG}
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  className="heading-05 text-black text-decoration-none margin-left-2rem"
                  href="/"
                >
                  Our story
                </a>
              </li>

              <div className="border-0-5px-solid-dark-silver-rotate--180deg margin-left-2rem"></div>

              <div className="d-flex align-items-center">
                <li>
                  <a className="text-black margin-left-2rem" href="/">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </a>
                </li>

                <li>
                  <a className="text-black margin-left-2rem" href="/">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </a>
                </li>

                <li>
                  <a
                    className="text-black margin-left-2rem"
                    href={PATH_NAME.MY_ACCOUNT}
                  >
                    <i class="fa-regular fa-user"></i>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="border-0-5px-solid-bright-gray"></div>
      </section>
    </header>
  );
};

export default Header;
