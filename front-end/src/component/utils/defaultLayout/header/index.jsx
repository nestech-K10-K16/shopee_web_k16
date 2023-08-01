import React from "react";
import "./index.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import { PATHNAME_LIST } from "router/router";
import { IMG_LOGO_SHOPEE } from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
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
        <div className="header__content d-flex justify-content-between pb-4">
          <div className="header__content__left-sider">
            <Link
              className="header__content__left-sider__logo"
              to={PATHNAME_LIST.HOME}
            >
              <IMG_LOGO_SHOPEE />
            </Link>
          </div>

          <div className="header__content__right-side">
            <ul className="header__content__right-side__menu d-flex list-unstyled mb-0">
              <div className="d-flex align-items-center">
                <li>
                  <Link
                    className="heading-05 text-dark-silver text-decoration-none "
                    to={PATHNAME_LIST.SHOP}
                  >
                    Shop
                  </Link>
                </li>

                <li>
                  <Link
                    className="heading-05 text-dark-silver text-decoration-none ms-4"
                    to={PATHNAME_LIST.BLOG}
                  >
                    Blog
                  </Link>
                </li>

                <li>
                  <Link
                    className="heading-05 text-dark-silver text-decoration-none ms-4"
                    to={PATHNAME_LIST.OUR_STORY}
                  >
                    Our story
                  </Link>
                </li>
              </div>

              <div className="border-0-5px-solid-dark-silver-rotate--180deg ms-4"></div>

              <div className="d-flex align-items-center">
                <li>
                  <Link className="text-dark-silver ms-4">
                    <FontAwesomeIcon icon={faSearch} />
                  </Link>
                </li>

                <li>
                  <Link className="text-dark-silver ms-4">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-dark-silver ms-4"
                    to={PATHNAME_LIST.ACCOUNT}
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
