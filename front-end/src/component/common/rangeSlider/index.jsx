import React from "react";
import "./index.scss";

const RangeSlider = () => {
  return (
    <div>
      <input className="range-slider" type="range" min="0" max="100" />
    </div>
  );
};

export default RangeSlider;
