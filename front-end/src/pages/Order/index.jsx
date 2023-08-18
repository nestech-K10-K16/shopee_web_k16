import React from "react";
import "./index.scss";

const Order = () => {
  const items = [
    { name: "Lira Earrings", price: 64 },
    { name: "Ollie Earrings", price: 10 },
    { name: "Kaede Hair Pin", price: 10 },
  ];

  return (
    <section id="view-order">
      <div className="view-order__content flex justify-between">
        <div className="view-order__content__left-side">
          <p className="heading-02 mb-5">Order Details</p>

          <div className="flex justify-between w-[30rem]">
            <div className="flex flex-col gap-y-6">
              <div className="heading-05">
                <p>ORDER NUMBER</p>
                <p>1879605573994</p>
              </div>

              <div className="heading-0">
                <p>EMAIL</p>
                <p>Vitathemes@gmail.com</p>
              </div>

              <div className="heading-05">
                <p>PAYMENT METHOD</p>
                <p>Mastercard*************7865</p>
              </div>

              <div className="heading-05">
                <p>ORDER DATE</p>
                <p>October 8,2020</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-6 w-40">
              <div className="heading-05">
                <p>DELIVERY OPTIONS</p>
                <p>Standard delivery</p>
              </div>

              <div className="heading-05">
                <p>DELIVERY ADDRESS</p>
                <p>
                  Kristian holst 34 old street W1F 7NU london United Kingdom
                </p>
              </div>

              <div className="heading-05">
                <p>CONTACT NUMBER </p>
                <p>+44 8749790988</p>
              </div>
            </div>
          </div>
        </div>

        <div className="view-order__content__right-side w-[28rem]">
          <p className="heading-02 mb-6">ORDER Summary</p>

          <div className="flex flex-col bg-bright_gray gap-y-4 p-6">
            <div className="flex justify-between">
              <p>PRODUCT</p>
              <p>TOTAL</p>
            </div>

            <div className="border border-light_sivler"></div>

            {items.map((item, index) => {
              return (
                <div className="flex justify-between text-dark_silver">
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                </div>
              );
            })}

            <div className="border border-light_sivler"></div>

            <div className="flex justify-between">
              <p>SUBTOTAL</p>
              <p>$85</p>
            </div>

            <div className="border border-light_sivler"></div>

            <div className="flex justify-between">
              <p>SHIPPING</p>
              <p>Free shipping</p>
            </div>

            <div className="border border-light_sivler"></div>

            <div className="flex justify-between">
              <p>TOTAL</p>
              <p>$85</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
