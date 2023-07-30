import React from "react";
import "./index.css";

const TextArea = (props) => {
  return (
    <textarea
      id="text-area"
      className={props?.className}
      placeholder={props.placeholder}
    ></textarea>
  );
};

export default TextArea;
