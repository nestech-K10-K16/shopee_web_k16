import React, { useState, useEffect } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { editAmounCart } from "redux/createAsyncThunk/cartThunk";
import { getByIdProduct } from "redux/createAsyncThunk/productThunk";

const InputAmountArray = (props) => {
  const { idProduct, amountProduct } = props;
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(amountProduct);

  useEffect(() => {
    const fetchAmountProduct = async () => {
      const productById = await dispatch(getByIdProduct(idProduct)).unwrap();
      dispatch(
        editAmounCart({
          IdProduct: idProduct,
          Amount: amount,
          IntoMoney: productById[0].Price * amount,
        })
      );
    };
    fetchAmountProduct();
  }, [amount, dispatch, idProduct]);

  return (
    <div id="input-amount-array" className={props.className}>
      <button className="heading-03" onClick={() => setAmount(amount + 1)}>
        +
      </button>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(1 * e.target.value || 1)}
      />
      <button
        className="heading-03"
        onClick={() => {
          if (amount >= 2) {
            setAmount(amount - 1);
          }
        }}
      >
        -
      </button>
    </div>
  );
};

export default InputAmountArray;
