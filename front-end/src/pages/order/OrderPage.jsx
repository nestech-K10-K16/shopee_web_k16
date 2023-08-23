import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "configs/fontIcon";
import OrderDetails from "../../components/common/oder/OrderDetails";
import OrderSummary from "components/common/oder/OrderSummary";
import "./index.css";

const OrderPage = () => {
  return (
    <div className="Shoppe__order border-t border-solid border-color-gray ml-[96px]">
      <div className="Shoppe__order-container">
        <div className="rectangle flex flex-row w-[1315px] h-[68px] ">
          <FontAwesomeIcon
            className="icon-circle"
            icon="fa-regular fa-circle-check"
          />
          <h3>We’ve received your order</h3>
        </div>
        <div className="order-section flex flex-between ">
          <OrderDetails />
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
