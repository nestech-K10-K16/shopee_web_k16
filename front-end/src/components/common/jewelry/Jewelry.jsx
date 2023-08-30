import React from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./jewelry.scss";

const Jewelry = ({ imgUrl, text, dollar }) => {
  return (
    <div className="shoppe__home-title_jewelry">
      <div className="shoppe__home-title_jewelry-image">
        <img src={imgUrl} alt="home_image" />
        <div className="shoppe__home-title_layer">
          {/* <Link to="/cart">
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          </Link> */}
        </div>
      </div>
      <div className="shoppe__home-title_jewelry-content">
        <h3>{text}</h3>
        <h4>{dollar}</h4>
      </div>
    </div>
  );
};

export default Jewelry;
