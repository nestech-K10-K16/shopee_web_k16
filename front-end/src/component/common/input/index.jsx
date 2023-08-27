import React from "react";
import "./index.scss";

const Input = (props) => {
  return (
    <input
      className={`input ${props.className}`}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
};

export default Input;
