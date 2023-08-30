import React from "react";
import "./index.scss";

const Select = (props) => {
  return (
    <select className={`select ${props.className}`} required>{props.children}</select>
  );
};

export default Select;
