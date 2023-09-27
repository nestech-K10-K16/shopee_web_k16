import React from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import {
  decreaseAmoutProduct,
  increaseAmoutProduct,
} from "redux/reducers/productSlice";

const AmountInput = (props) => {
  const dispatch = useDispatch();
  const { item, amount } = props;

  return (
    <div id="amount-input" className={props.className}>
      <button onClick={() => dispatch(increaseAmoutProduct(item))}>+</button>
      <div>{amount}</div>
      <button onClick={() => dispatch(decreaseAmoutProduct(item))}>-</button>
    </div>
  );
};

export default AmountInput;
