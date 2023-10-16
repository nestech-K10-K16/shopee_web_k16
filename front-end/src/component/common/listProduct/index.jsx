import React, { useEffect } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  addToProductDetail,
} from "redux/reducers/productSlice";
import { getListProduct } from "redux/createAsyncThunk/productThunk";
import { PATHNAME_LIST } from "router/router";
import { convertBufferToBase64 } from "utils/common";

const ListProduct = () => {
  const { product } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {product?.map((item) => {
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
