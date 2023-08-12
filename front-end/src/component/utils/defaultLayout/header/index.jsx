import { React } from "react";
import "./index.scss";
import $ from "jquery";
import { Link } from "react-router-dom";
import { PATHNAME_LIST } from "router/router";
import { IMG_LOGO_SHOPEE } from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Header = (props) => {
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
              <IMG_LOGO_SHOPEE />
            </Link>
          </div>

          <div className="header__content__right-side">
            <ul className="header__content__right-side__menu flex list-none mb-0 space-x-8">
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

              <div className="border border-dark_silver -rotate-180"></div>

              <li>
                <Link>
                  <FontAwesomeIcon icon={faSearch} />
                </Link>
              </li>

              <li>
                <Link className={props.className} onClick={props.onClick}>
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>
              </li>

              <li>
                <Link to={PATHNAME_LIST.ACCOUNT}>
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-solid border-bright_gray"></div>
      </section>
    </header>
  );
};

export default Header;
