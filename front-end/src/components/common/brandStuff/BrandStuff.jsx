import React from "react";
import "./index.css";

const BrandStuff = ({ imgUrl, text_01, text_02, text_03, read }) => {
  return (
    <>
      <div className="Shoppe__brandStuff">
        <div className="Shoppe__brandStuff-image">
          <img src={imgUrl} alt="blog_01" />
          <p>{text_01}</p>
          <h3>{text_02}</h3>
          <p>{text_03}</p>
          <h4>{read}</h4>
        </div>
      </div>
    </>
  );
};

export default BrandStuff;
