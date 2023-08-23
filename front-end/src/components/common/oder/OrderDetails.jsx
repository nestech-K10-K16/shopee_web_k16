import React from "react";

const OrderDetails = () => {
  return (
    <div className="order-details">
      <div className="main-title">
        <h2 className="heading-02">Order Details</h2>
        <OrderInfo title="ORDER NUMBER" content="1879605573994" />
        <OrderInfo title="EMAIL" content="Vitathemes@gmail.com" />
        <OrderInfo
          className="info"
          title="PAYMENT METHOD"
          content="Mastercard*************7865"
        />
        <OrderInfo
          className="info"
          title="ORDER DATE"
          content="October 8, 2020"
        />
      </div>
      <div className="secondary-title">
        <OrderInfo title="DELIVERY OPTIONS" content="Standard delivery" />
        <OrderInfo
          title="DELIVERY ADDRESS"
          content="Kristian holst 34 old street W1F 7NU london United Kingdom"
        />
        <OrderInfo title="CONTACT NUMBER" content="+44 8749790988" />
      </div>
    </div>
  );
};

const OrderInfo = ({ title, content }) => {
  return (
    <>
      <h1 className="black">{title}</h1>
      <h1 className="gray">{content}</h1>
    </>
  );
};

export default OrderDetails;
