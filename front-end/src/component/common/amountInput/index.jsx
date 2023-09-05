import React from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import {
  decreaseAmoutProduct,
  increaseAmoutProduct,
} from "redux/reducers/feature/productSlice";

const AmountInput = (props) => {
  const dispatch = useDispatch();
  const { item } = props;

  return (
    <div id="amount-input" className={props.className}>
      <button onClick={() => dispatch(increaseAmoutProduct(item))}>+</button>
      <input value={props.value}></input>
      <button onClick={() => dispatch(decreaseAmoutProduct(item))}>-</button>
    </div>
  );
};

export default AmountInput;
