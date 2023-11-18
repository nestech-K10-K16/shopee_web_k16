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
  const widthOpenModel = "w-[29rem]";

  useEffect(() => {
    if (userToken.data) {
      dispatch(getByIdUserCart());
    }
  }, [dispatch, userToken.data]);

  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);

  // event
  const openModel = () => {
    setStyleShoppingBag(widthOpenModel);
    setBackground("opacity-50 bg-[rgb(0,0,0,0.1)]");
  };

  const closeModel = () => {
    setStyleShoppingBag("w-0");
    setBackground("");
  };

  const handleModel = (e) => {
    const { tagName } = e.target;
    if (tagName && styleShoppingBag === widthOpenModel) {
      closeModel();
    }
  };

  return (
    <>
      <div className={background} onClick={handleModel}>
        <Header ShoppingBagOnClick={openModel} />
        {children}
        <Footer />
      </div>

      <ShoppingBag
        className={styleShoppingBag}
        backOnClick={closeModel}
        viewCartOnClick={closeModel}
      />
    </>
  );
};

export default DefaultLayout;
