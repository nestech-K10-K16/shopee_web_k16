import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PATHNAME_LIST } from "router/router";
import { useSelector } from "react-redux";

const Header = () => {
  const { userToken } = useSelector((state) => state.userSlice);

  const navLinkData = [
    { text: "User", path: PATHNAME_LIST.USER_MANAGE },
    { text: "Product", path: PATHNAME_LIST.PRODUCT_MANAGE },
    { text: "Customer", path: PATHNAME_LIST.CUSTOMER_MANAGE },
    { text: "Bill", path: PATHNAME_LIST.BILL_MANAGE },
  ];

  return (
    <header id="header-system">
      <div className="header-system__content flex justify-between">
        <div className="header-system__content__left-side">
          {navLinkData?.map((item, index) => {
            return (
              <NavLink
                key={index}
                className={({ isActive }) => (isActive ? "active" : "")}
                to={item.path}
              >
                {item.text}
              </NavLink>
            );
          })}
        </div>
        <div className="header-system__content__right-side flex items-center">
          {userToken.data?.Name && (
            <p className="heading-05 text-white mr-1">
              welcome, {userToken.data?.Name}
            </p>
          )}
          <Link to={PATHNAME_LIST.HOME}>
            <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
