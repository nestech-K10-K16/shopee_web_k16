import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import ShoppingBag from "./shoppingBag";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DefaultLayout = ({ children }) => {
  const [styleShoppingBag, setStyleShoppingBag] = useState("w-0");
  const [background, setBackground] = useState("");

  const OpenModel = () => {
    setStyleShoppingBag("w-[29rem] ");
    setBackground("opacity-50 bg-[rgb(0,0,0,0.1)]");
  };

  const CloseModel = () => {
    setStyleShoppingBag("w-0");
    setBackground("");
  };

  return (
    <div>
      <section className={background}>
        <Header ShoppingBagOnClick={OpenModel} />
        {children}
        <Footer />
      </section>
      <ShoppingBag
        className={styleShoppingBag}
        backOnClick={CloseModel}
        viewCartOnClick={CloseModel}
      />
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
};

export default DefaultLayout;
