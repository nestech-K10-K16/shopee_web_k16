import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import ShoppingBag from "./shoppingBag";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { userSliceSelector } from "redux/selector";
import { getByIdUserCart } from "redux/createAsyncThunk/cartThunk";
import { getListProduct } from "redux/createAsyncThunk/productThunk";

const DefaultLayout = ({ children }) => {
  const { userToken } = useSelector(userSliceSelector);
  const dispatch = useDispatch();
  const [styleShoppingBag, setStyleShoppingBag] = useState("w-0");
  const [background, setBackground] = useState("");
  const width = "w-[29rem]";

  useEffect(() => {
    if (userToken.data) {
      dispatch(getByIdUserCart());
    }
  }, [dispatch, userToken.data]);

  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);

  const OpenModel = () => {
    setStyleShoppingBag(width);
    setBackground("opacity-50 bg-[rgb(0,0,0,0.1)]");
  };

  const CloseModel = () => {
    setStyleShoppingBag("w-0");
    setBackground("");
  };

  const handleModel = (e) => {
    const { tagName } = e.target;
    if (tagName && styleShoppingBag === width) {
      CloseModel();
    }
  };

  return (
    <>
      <div className={background} onClick={handleModel}>
        <Header ShoppingBagOnClick={OpenModel} />
        {children}
        <Footer />
      </div>

      <ShoppingBag
        className={styleShoppingBag}
        backOnClick={CloseModel}
        viewCartOnClick={CloseModel}
      />
    </>
  );
};

export default DefaultLayout;
