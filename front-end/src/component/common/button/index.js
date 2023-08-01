import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link
      id="button"
      className={props.className}
      style={props.style}
      href={props.href}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
};

export default Button;
