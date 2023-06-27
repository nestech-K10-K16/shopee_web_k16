import React from 'react';
import {
  IC_CART,
  IC_LINE,
  IC_SEARCH,
  IC_USER,
  IMG_LOGO_SHOPPE,
} from '../../assets';
import './index.css';

const Navbar = () => {
  return (
    <div className="container d-flex align-item-center justify-content-space-between">
      <button>
        <IMG_LOGO_SHOPPE />
      </button>
      <div className="d-flex ">
        <div className="d-flex align-item-center justify-content-space-between">
          <button className="heading-05">Shop</button>
          <button className="heading-05">Blog</button>
          <button className="heading-05">Our Story</button>
          <IC_LINE />
        </div>
        <div className="d-flex align-item-center justify-content-space-between">
          <button>
            <IC_SEARCH />
          </button>
          <button>
            <IC_CART />
          </button>
          <button>
            <IC_USER />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
