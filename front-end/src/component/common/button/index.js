import React from "react";
import "./index.css";

const Button = (props) => {
  return (
    <a id="button" className={props.className} href={props.href} onClick={props.onClick}>
      {props.text}
    </a>
  );
};

export default Button;
