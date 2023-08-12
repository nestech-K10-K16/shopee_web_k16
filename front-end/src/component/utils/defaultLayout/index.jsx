import { useState, React } from "react";
import "./index.scss";
import Header from "./header";
import Footer from "./footer";
import ShoppingBag from "./shoppingBag";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DefaultLayout = ({ children }) => {
  const [model, setModel] = useState(false);
  const [styleShoppingBag, setStyleShoppingBag] = useState("");

  const ToggleModel = () => {
    setModel(!model);
    setStyleShoppingBag("shopping-bag--open");
  };

  return (
    <div className="position-relative">
      <Header onClick={ToggleModel} />
      {children}
      <div>
        {model && (
          <ShoppingBag className={styleShoppingBag} onClick={ToggleModel} />
        )}
      </div>
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
