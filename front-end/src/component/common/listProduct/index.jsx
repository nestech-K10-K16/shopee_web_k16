import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";

class ListProduct extends React.Component {
  render() {
    const addToCartNotify = (id) => {
      toast.success("Has been added to cart");

      this.props.addToCartProduct(id);
    };

    let listProduct = this.props.product;

    return (
      <div className="grid grid-cols-3 gap-4">
        {listProduct.map((item) => {
          return (
            <div key={item.name}>
              <div id="product-style">
                <div>
                  <Link to={item.to}>
                    <img src={item.src} alt="" />
                  </Link>
                  <button
                    className="body-large"
                    onClick={() => addToCartNotify(item)}
                  >
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

const mapStateToProps = (state) => {
  return { product: state.product };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCartProduct: (id) =>
      dispatch({ type: "ADD_PRODUCT_CART", payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
