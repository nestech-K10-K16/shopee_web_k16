import React, { useState } from "react";
import "./index.scss";
import { IMG_PRODUCT_02, IMG_PRODUCT_03, IMG_PRODUCT_04 } from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { Button } from "component/common";
import { PATHNAME_LIST } from "router/router";

const ShoppingBag = (props) => {
  const listProduct = [
    {
      id: "1",
      name: "Lira Earrings",
      url: IMG_PRODUCT_02,
      color: "Black / Medium",
      price: 20,
    },
    {
      id: "2",
      name: "Ollie Earrings",
      url: IMG_PRODUCT_03,
      color: "Black / Medium",
      price: 25,
    },
    {
      id: "3",
      name: "Kaede Hair Pin",
      url: IMG_PRODUCT_04,
      color: "Black / Medium",
      price: 30,
    },
    {
      id: "4",
      name: "Ollie Earrings",
      url: IMG_PRODUCT_03,
      color: "Black / Medium",
      price: 250,
    },
  ];

  const [product, setProduct] = useState(listProduct);
  const [messing, setMessing] = useState("");

  const sumTotal = product.reduce(
    (item, index) => (item = item + index.price),
    0
  );

  const handleDetele = (id) => {
    setProduct((item) => {
      return item.filter((remove) => remove.id !== id);
    });

    if (product.length === 1) {
      setMessing("your cart is empty");
    }
  };

  const Items = () => {
    return (
      <div className="flex flex-col gap-y-6">
        {product.map((item) => {
          return (
            <div className="flex" key={item.id}>
              <img className="w-48 mr-3" src={item.url} alt="" />

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
                  onClick={() => handleDetele(item.id)}
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
      <div className="shopping-bag__content px-[5vh] py-[2vh] w-[27rem]">
        <div className="flex justify-end">
          <button className="bg-body border-0" onClick={props.onClick}>
            <FontAwesomeIcon icon={faChevronRight} size="xl" />
          </button>
        </div>

        <p className="heading-05 mb-4">Shopping bag</p>
        <p className="heading-05 mb-4">{product.length} Items</p>

        <div className="shopping-bag__content__product mb-[2.4rem]">
          <Items />
          <p className="heading-03">{messing}</p>
        </div>
      </div>

      <div className="border border-bright_gray mb-6"></div>

      <div className="px-[5vh] pb-[5vh]">
        <div className="flex justify-between mb-4">
          <p className="heading-05">Subtotal ({product.length} items)</p>

          <p className="heading-05">$ {sumTotal}</p>
        </div>

        <div className="flex">
          <Button
            className="button--secondary text-center w-full"
            to={PATHNAME_LIST.CART}
          >
            VIEW CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
