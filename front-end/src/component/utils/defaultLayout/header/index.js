import React from "react";
import "./index.css";
import { IMG_LOGO_SHOPEE } from "../../../../assets";
import { PATHNAME_LIST } from "../../../../router/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <header>
      <section id="header">
        <div className="header-top d-flex justify-content-between align-items-center pb-4">
          <div className="header-top__left-sider">
           
            <IMG_LOGO_SHOPEE />
          </div>

          <div className="header-top__right-side ">
            <ul className="header-top__right-side__menu d-flex list-unstyled mb-0">
              <li>
                <a
                  className="heading-05 text-dark-silver text-decoration-none"
                  href={PATHNAME_LIST.SHOP}
                >
                  Shop
                </a>
              </li>

              <li>
                <a
                  className="heading-05 text-dark-silver text-decoration-none ms-4"
                  href={PATHNAME_LIST.BLOG}
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  className="heading-05 text-dark-silver text-decoration-none ms-4"
                  href={PATHNAME_LIST.OUR_STORY}
                >
                  Our story
                </a>
              </li>

              <div className="border-0-5px-solid-dark-silver-rotate--180deg ms-4"></div>

              <div className="d-flex align-items-center">
                <li>
                  <a className="text-dark-silver ms-4" href="/">
                    <FontAwesomeIcon icon={faSearch} />
                  </a>
                </li>

                <li>
                  <a className="text-dark-silver ms-4" href="/">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </a>
                </li>

                <li>
                  <a
                    className="text-dark-silver ms-4"
                    href={PATHNAME_LIST.MY_ACCOUNT}
                  >
                    <FontAwesomeIcon icon={faUser} />
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
