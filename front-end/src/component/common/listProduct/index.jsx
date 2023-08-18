import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class ListProduct extends React.Component {
  render() {
    const addToCartNotify = () => {
      toast.success("Has been added to cart");
    };

    return (
      <div className="grid grid-cols-3 gap-4">
        {this.props.listProduct.map((item) => {
          return (
            <div key={item.name}>
              <div id="product-style">
                <div>
                  <Link to={item.to}>
                    <img src={item.src} alt="" />
                  </Link>
                  <button className="body-large" onClick={addToCartNotify}>
                    Add to cart
                  </button>
                </div>
              </div>

              <p className="heading-03 mb-1">{item.name}</p>
              <p className="heading-04 text-beaver">$ {item.price}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListProduct;
