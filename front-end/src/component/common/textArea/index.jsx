import React from "react";
import "./index.scss";

const TextArea = (props) => {
  return (
    <textarea
      className={`text-area ${props.className}`}
      placeholder={props.placeholder}
    ></textarea>
  );
};

export default TextArea;
