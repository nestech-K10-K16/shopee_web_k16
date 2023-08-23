import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const BrandStuff = ({ imgUrl, text_01, text_02, text_03, text_04 }) => {
  return (
    <div className="Shoppe__brandStuff">
      <div className="Shoppe__brandStuff-heading">
        <img src={imgUrl} alt="" />
        <h3>{text_01}</h3>
        <h4>{text_02}</h4>
      </div>
      <div className="Shoppe__brandStuff-heading_01">
        <h3>{text_03}</h3>
        <Link to="/blog-single">
          <h4>{text_04}</h4>
        </Link>
      </div>
    </div>
  );
};

export default BrandStuff;
