import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../assets/logo.svg';
import '../../configs/fontIcon';
import './style.css';

const Menu = () => (
  <>
    <p>
      <a href="#Shop">Shop</a>
    </p>
    <p>
      <a href="#Blog">Blog</a>
    </p>
    <p>
      <a href="#OurStory">Our Story</a>
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
    <div className="shoppe__navbar">
      <div className="shoppe__navbar-links">
        <div className="shoppe__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="shoppe__navbar-links_container">
          <Menu />
        </div>
        <div className="shoppe__navbar-icons">
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
