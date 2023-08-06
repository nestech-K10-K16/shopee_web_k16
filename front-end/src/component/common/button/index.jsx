import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link
      className={`button ${props.className}`}
      to={props.to}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
};

export default Button;
