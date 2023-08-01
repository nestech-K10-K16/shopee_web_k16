import React from "react";
import Blog01 from "../../../assets/img__blog01";
import "./index.css";

const BrandStuff = () => {
  return (
    <>
      <div className="Shoppe__brandStuff">
        <div className="Shoppe__brandStuff-image">
          <img src={Blog01} alt="blog_01" />
        </div>
      </div>
    </>
  );
};

export default BrandStuff;
