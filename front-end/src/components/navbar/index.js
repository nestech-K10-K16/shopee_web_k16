import React from 'react';
import { IMG_LogoShoppe } from '../../assets';
import './index.css';

const Navbar = () => {
  return (
    <div className="container d-flex-jus-space-between-align-center ">
      <a>
        <IMG_LogoShoppe />
      </a>
      <div className="d-flex-jus-space-around-ali-center heading-05">
        <button>Shop</button>
        <button>Blog</button>
        <button>Our Story</button>
      </div>
    </div>
  );
};

export default Navbar;
