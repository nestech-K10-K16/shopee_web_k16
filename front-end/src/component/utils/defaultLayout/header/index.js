import React from "react";
import "./index.css";
import { IMG_LogoShopee } from "assets";
import { PATH_NAME } from "constants/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" nav-bar px-5 mb-4 header-top d-flex justify-content-between align-items-center">
      <Link to={PATH_NAME.HOME} className="header-top__left-sider__logo">
        <img src={IMG_LogoShopee} alt="Logo" />
      </Link>
      <div className="header-top__right-side">
        <ul className="header-top__right-side__menu d-flex list-unstyled m-0">
          <Link
            className="heading-05 text-black text-decoration-none margin-left-2rem"
            to={PATH_NAME.SHOP}
          >
            Shop
          </Link>
          <Link
            className="heading-05 text-black text-decoration-none margin-left-2rem"
            to={PATH_NAME.BLOG}
          >
            Blog
          </Link>
          <Link
            className="heading-05 text-black text-decoration-none margin-left-2rem"
            to={PATH_NAME.OUR_STORY}
          >
            Our story
          </Link>
          <div className="border-0-5px-solid-dark-silver-rotate--180deg margin-left-2rem"></div>
          <div className="d-flex align-items-center">
            <Link className="text-black margin-left-2rem">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
            <Link className="text-black margin-left-2rem">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            <Link className="text-black margin-left-2rem">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
