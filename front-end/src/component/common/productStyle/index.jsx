import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductStyle = (props) => {
  const addToCartNotify = () => toast.success("Has been added to cart");

  return (
    <div>
      <div id="product-style">
        <Link to={props.link}>
          <img src={props.src} alt="" />
        </Link>
        <button className={props.className} onClick={addToCartNotify}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductStyle;
