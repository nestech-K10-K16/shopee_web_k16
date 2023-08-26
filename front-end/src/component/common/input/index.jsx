import React from "react";
import "./index.scss";

const Input = (props) => {
  return (
    <input
      id="input"
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
