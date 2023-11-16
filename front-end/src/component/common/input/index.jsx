import React from "react";
import "./index.scss";

const Input = (props) => {
  return (
    <input
      id={props.id}
      className={props.className}
      name={props.name}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
};

export default Input;
