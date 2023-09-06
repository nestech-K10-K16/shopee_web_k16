import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="shoppe__error">
      <div className="shoppe__error-container">
        <h1 className="heading-01">404 ERROR</h1>
        <h3 className="heading-03">
          This page not found; back to home and start again
        </h3>
        <Link to="/">
          <button>HOMEPAGE</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
