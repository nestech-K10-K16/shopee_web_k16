import React from "react";
import "./index.scss";

const Select = (props) => {
  const { children } = props;

  return (
    <select className={`select ${props.className}`} required>
      {children}
    </select>
  );
};

export default Select;
