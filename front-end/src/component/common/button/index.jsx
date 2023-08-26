import React from "react";
import "./index.scss";

const Button = (props) => {
  const { children } = props;

  return (
    <button
      className={`button ${props.type} ${props.className}`}
      to={props.to}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};

export default Button;
