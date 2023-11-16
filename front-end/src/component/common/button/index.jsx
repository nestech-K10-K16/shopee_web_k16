import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { TYPE_BUTTON } from "constants/common";

const Button = (props) => {
  const { typeButton, children } = props;

  switch (typeButton) {
    case TYPE_BUTTON.BUTTON:
      return (
        <button
          id={props.id}
          className={props.className}
          type={props.type}
          onClick={props.onClick}
        >
          {children}
        </button>
      );

    case TYPE_BUTTON.LINK:
      return (
        <Link
          id={props.id}
          className={props.className}
          to={props.to}
          onClick={props.onClick}
        >
          {children}
        </Link>
      );

    default:
      break;
  }
};

export default Button;
