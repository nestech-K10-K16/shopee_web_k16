import { useState, React } from "react";
import Header from "./header";
import Footer from "./footer";
import ShoppingBag from "./shoppingBag";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DefaultLayout = ({ children }) => {
  const [styleShoppingBag, setStyleShoppingBag] = useState("w-0");

  const OpenModel = () => {
    setStyleShoppingBag("w-[28rem]");
  };

  const CloseModel = () => {
    setStyleShoppingBag("w-0");
  };

  return (
    <div className="position-relative">
      <Header onClick={OpenModel} />
      {children}
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
      <Footer />
    </div>
  );
};

export default DefaultLayout;
