import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "configs/fontIcon";
import OrderDetails from "../../components/common/oder/OrderDetails";
import OrderSummary from "components/common/oder/OrderSummary";
import "./index.scss";

const OrderPage = () => {
  return (
    <div className="Shoppe__order ">
      <div className="Shoppe__order-container">
        <div className="rectangle">
          <FontAwesomeIcon
            className="icon-circle"
            icon="fa-regular fa-circle-check"
          />
          <h3>We’ve received your order</h3>
        </div>
        <div className="order-section">
          <OrderDetails />
          <div className="summary">
            <h2 className="heading-02">ORDER Summary</h2>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
