import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";

const Test = () => {
  const product = useSelector((state) =>
    state.product.map((item) => item.price)
  );
  console.log(Math.max.apply(null, product));

  return (
    <section id="test">
      <div></div>
    </section>
  );
};

export default Test;
