import React from "react";
import "./index.scss";

const AmountInput = (props) => {
  const { value, onChange } = props;

  return (
    <div id="amount-input-object" className={props.className}>
      <button onClick={() => onChange(1 * value + 1)}>+</button>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value || 1)}
      />
      <button
        onClick={() => {
          if (value >= 2) {
            onChange(value - 1);
          }
        }}
      >
        -
      </button>
    </div>
  );
};

export default AmountInput;
