import React, { useState } from "react";
import "./index.scss";

const AmountInput = (props) => {
  const [number, setNumber] = useState(1);

  const onClickIncrease = () => {
    setNumber(number + 1);
  };

  const onClickDecrease = () => {
    if (number === 1) return;
    setNumber(number - 1);
  };

  return (
    <div id="amount-input" className={props.className}>
      <button onClick={onClickIncrease}>+</button>
      <input value={number} readOnly></input>
      <button onClick={onClickDecrease}>-</button>
    </div>
  );
};

export default AmountInput;
