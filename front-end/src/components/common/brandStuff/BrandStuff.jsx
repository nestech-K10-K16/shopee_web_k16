import React from "react";
import "./index.css";

const BrandStuff = ({ imgUrl, text_01, text_02, text_03, text_04 }) => {
  return (
    <>
      <div className="Shoppe__brandStuff">
        <div className="Shoppe__brandStuff-text">
          <img src={imgUrl} alt="" />
          <h3>{text_01}</h3>
          <h4>{text_02}</h4>
        </div>
        <div className="Shoppe__brandStuff-text_1">
          <h3>{text_03}</h3>
          <h4>{text_04}</h4>
        </div>
      </div>
    </>
  );
};

export default BrandStuff;
