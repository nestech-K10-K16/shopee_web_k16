import React from "react";
import "./index.scss";
import { TYPE_BUTTON } from "constants/common";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { type, children } = props;

  switch (type) {
    case TYPE_BUTTON.BUTTON:
      return (
        <button
          className={`border rounded-[10px] p-2 ${props.className}`}
          onClick={props.onClick}
        >
          {children}
        </button>
      );

    case TYPE_BUTTON.LINK:
      return (
        <Link
          className={`border rounded-[10px] p-2 ${props.className}`}
          to={props.to}
          onClick={props.onClick}
        >
          {children}
        </Link>
      );

    default:
      return (
        <button
          className={`border rounded-[10px] p-2 ${props.className}`}
          onClick={props.onClick}
        >
          {children}
        </button>
      );
  }
};

export default Button;
