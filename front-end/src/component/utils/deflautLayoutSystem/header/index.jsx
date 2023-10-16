import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { PATH_SYSTEM_LIST } from "router/systemRouter";

const Header = () => {
  const navLinkData = [
    { text: "User", path: PATH_SYSTEM_LIST.USER_MANAGE },
    { text: "Product", path: PATH_SYSTEM_LIST.PRODUCT_MANAGE },
  ];

  return (
    <div id="header-system">
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
  );
};

export default Header;
