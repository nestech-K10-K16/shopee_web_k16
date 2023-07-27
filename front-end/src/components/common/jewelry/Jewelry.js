import React from "react";
import "./jewelry.css";

const Jewelry = ({ imgUrl, text, dollar }) => {
  return (
    <div className="shoppe__home-title_jewelry">
      <div className="shoppe__home-title_jewelry-image">
        <img src={imgUrl} alt="home_image" />
      </div>
      <div className="shoppe__home-title_jewelry-content">
        <h3>{text}</h3>
        <h4>{dollar}</h4>
      </div>
    </div>
  );
};

export default Jewelry;
