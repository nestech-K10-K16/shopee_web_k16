import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/logo.svg";
import "../../../configs/fontIcon";
import "./style.css";

const Menu = () => (
  <>
    <p className="active">
      <Link to="/shop">Shop</Link>
    </p>
    <p>
      <Link to="/blog">Blog</Link>
    </p>
    <p>
      <Link to="/our-story">Our Story</Link>
    </p>
  </>
);

const Icon = () => (
  <>
    <Link to="/search">
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
    </Link>
    <Link to="/cart">
      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
    </Link>
    <Link to="/user">
      <FontAwesomeIcon icon="fa-solid fa-user" />
    </Link>
  </>
);

const Navbar = () => {
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