import React from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { TYPE_REDUX } from "constants/common";

const AmountInput = (props) => {
  const dispatch = useDispatch();
  const { id } = props;

  return (
    <div id="amount-input" className={props.className}>
      <button
        onClick={() =>
          dispatch({
            type: TYPE_REDUX.INCREASE_AMOUNT_PRODUCT_CART,
            payload: id,
          })
        }
      >
        +
      </button>
      <input value={props.value} readOnly></input>
      <button
        onClick={() =>
          dispatch({
            type: TYPE_REDUX.DECREASE_AMOUNT_PRODUCT_CART,
            payload: id,
          })
        }
      >
        -
      </button>
    </div>
  );
};

export default AmountInput;
