import React from "react";
import "./index.css";

const Input = (props) => {
  return (
    <input
      id="input"
      className={props.className}
      style={props.style}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
