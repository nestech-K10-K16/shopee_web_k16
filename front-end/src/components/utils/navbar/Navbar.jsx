import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "assets/logo.svg";
import "configs/fontIcon";
import "./style.scss";
import { ShoppingBag } from "components";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="shoppe__header-links">
        <div className="shoppe__header-links_logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="shoppe__navbar">
          <div className="shoppe__navbar-links_container">
            <p
              className={`${activeTab === "shop" ? "active__navbar-shop" : ""}`}
              onClick={() => handleTabClick("shop")}
            >
              <Link to="/shop">Shop</Link>
            </p>
            <p
              className={`${activeTab === "blog" ? "active__navbar-blog" : ""}`}
              onClick={() => handleTabClick("blog")}
            >
              <Link to="/blog">Blog</Link>
            </p>
            <p
              className={`${
                activeTab === "ourStory" ? "active__navbar-ourStory" : ""
              }`}
              onClick={() => handleTabClick("ourStory")}
            >
              <Link to="/our-story">Our Story</Link>
            </p>
          </div>
          <div className="shoppe__navbar-icons">
            <Link to="/search">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </Link>
            <Link className="active__navbar-cart">
              <FontAwesomeIcon
                onClick={() => {
                  setOpenModal(true);
                }}
                icon="fa-solid fa-cart-shopping"
              />
              <ShoppingBag
                open={openModal}
                onclose={() => setOpenModal(false)}
              />
            </Link>
            <Link to="/user" className="active__navbar-user">
              <FontAwesomeIcon icon="fa-solid fa-user" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
