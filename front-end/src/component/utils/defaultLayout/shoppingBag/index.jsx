import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { Button } from "component/common";
import { PATHNAME_LIST } from "router/router";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ShoppingBag = (props) => {
  let productCart = props.productCart;
  const [messing, setMessing] = useState("");

  const handleDetele = (id) => {
    props.deleteProductCart(id);
  };

  const itemOnChange = () => {
    if (productCart.length === 0) {
      setMessing("Your cart is empty");
    }
  };

  const Items = () => {
    return (
      <div className="flex flex-col gap-y-6">
        {productCart.map((item) => {
          return (
            <div className="flex" key={item.name}>
              <Link to={item.to}>
                <img className="w-48 mr-3" src={item.src} alt="" />
              </Link>

              <div className="flex flex-col justify-between mr-5">
                <div>
                  <p>{item.name}</p>
                  <p className="text-dark_silver">{item.color}</p>
                  <p className="text-beaver">$ {item.price}</p>
                </div>

                <div>
                  <p>QTY: - 1 +</p>
                </div>
              </div>

              <div>
                <button
                  className="bg-body border-0"
                  onClick={() => handleDetele(item)}
                >
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div id="shopping-bag" className={props.className}>
      <div className="w-[27rem]">
        <div className="shopping-bag__content px-[5vh] py-[2vh]">
          <div className="flex justify-end">
            <button className="bg-body border-0" onClick={props.backOnClick}>
              <FontAwesomeIcon icon={faChevronRight} size="xl" />
            </button>
          </div>

          <p className="heading-05 mb-4">Shopping bag</p>
          <p className="heading-05 mb-4" onChange={itemOnChange}>
            {productCart.length} Items
          </p>

          <div className="shopping-bag__content__product mb-[2.4rem]">
            <Items />
            <p className="heading-03">{messing}</p>
          </div>
        </div>

        <div className="border border-bright_gray mb-6"></div>

        <div className="shopping-bag__total-money px-[5vh] pb-[5vh]">
          <div className="flex justify-between mb-4">
            <p className="heading-05">Subtotal ({productCart.length} items)</p>

            <p className="heading-05">$ 100</p>
          </div>

          <div className="flex">
            <Button
              className="button--secondary text-center w-full"
              to={PATHNAME_LIST.CART}
              onClick={props.viewCartOnClick}
            >
              VIEW CART
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { productCart: state.productCart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProductCart: (id) =>
      dispatch({ type: "DELETE_PRODUCT_CART", payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);
