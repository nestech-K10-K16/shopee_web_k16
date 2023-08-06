import React from "react";
import "./index.scss";

const Select = (props) => {
  return (
    <select id="select" className={props.className}>
      <option>{props.text}</option>
    </select>
  );
};

export default Select;
