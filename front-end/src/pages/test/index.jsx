import React from "react";
import "./index.scss";
import { useEffect } from "react";
import ProductApi from "api/productApi";

const Test = () => {
  useEffect(() => {
    ProductApi.getList().then((res) => console.log(res));
  });

  return (
    <section id="test">
      <div></div>
    </section>
  );
};

export default Test;
