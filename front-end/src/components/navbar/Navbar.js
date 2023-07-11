import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import "../../configs/fontIcon";

import "./style.css";

const Menu = () => (
  <>
    <p>
      <Link to="/Shop">Shop</Link>
    </p>
    <p>
      <Link to="/Blog">Blog</Link>
    </p>
    <p>
      <Link to="/OurStory">Our Story</Link>
    </p>
  </>
);

const Icon = () => (
  <>
    <a href="#glass">
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
    </a>
    <a href="#cart">
      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
    </a>
    <a href="#user">
      <FontAwesomeIcon icon="fa-solid fa-user" />
    </a>
  </>
);

const Navbar = () => {
  return (
    <div>
      <div className="shoppe__header-links">
        <div className="shoppe__header-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="shoppe__navbar">
          <div className="shoppe__navbar-links_container">
            <Menu />
          </div>
          <div className="shoppe__navbar-icons">
            <Icon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
