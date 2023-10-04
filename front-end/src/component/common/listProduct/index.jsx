import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import {
  addProductToCart,
  addToProductDetail,
  getListProduct,
} from "redux/reducers/productSlice";
import { PATHNAME_LIST } from "router/router";
import { convertBufferToBase64 } from "utils/common";

const ListProduct = () => {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      const actionResult = await dispatch(getListProduct());
      const currentProduct = unwrapResult(actionResult);
      setProductList(currentProduct);
    };
    fetchProductList();
  }, [dispatch]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {productList?.map((item) => {
        return (
          <div id="product-style" key={item.IdProduct}>
            <div className="product-style__image">
              <Link
                to={PATHNAME_LIST.PRODUCT}
                onClick={() => dispatch(addToProductDetail(item))}
              >
                <img src={convertBufferToBase64(item.Image)} alt="" />
              </Link>
              <button
                className="body-large"
                onClick={() => dispatch(addProductToCart(item))}
              >
                Add to cart
              </button>
            </div>

            <p className="heading-03 mb-1">{item.Name}</p>
            <p className="heading-04 text-beaver">$ {item.Price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListProduct;
