import React from "react";

const OrderSummary = () => {
  return (
    <div className="order-summary">
      <div className="product">
        <h2>PRODUCT</h2>
        <h2>TOTAL</h2>
      </div>
      <div className="border">
        <OrderItem name="Lira Earrings" price="$64" />
        <OrderItem name="Ollie Earrings" price="$10" />
        <OrderItem name="Kaede Hair Pin" price="$10" />
      </div>

      {/* Subtotal, Shipping, Total */}
      <OrderTotalRow label="SUBTOTAL" amount="$85" />
      <OrderTotalRow label="SHIPPING" amount="Free shipping" />
      <OrderTotalRow label="TOTAL" amount="$85" />
    </div>
  );
};

const OrderItem = ({ name, price }) => {
  return (
    <div className="Lira">
      <h3>{name}</h3>
      <h3>{price}</h3>
    </div>
  );
};

const OrderTotalRow = ({ label, amount }) => {
  return (
    <div className="sub-ship">
      <h3>{label}</h3>
      <h3>{amount}</h3>
    </div>
  );
};

export default OrderSummary;
