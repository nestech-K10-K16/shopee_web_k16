import React, { memo } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToProductDetail } from "redux/reducers/productSlice";
import { PATHNAME_LIST } from "router/router";
import { convertBufferToBase64 } from "utils/common";
import { createCart } from "redux/createAsyncThunk/cartThunk";

const ListProduct = ({ map }) => {
  const dispatch = useDispatch();

  return (
    <div id="list-product" className="grid grid-cols-3 gap-4">
      {map?.map((item) => {
        return (
          <div key={item.IdProduct}>
            <div className="list-product__image">
              <Link
                to={PATHNAME_LIST.PRODUCT}
                onClick={() => dispatch(addToProductDetail(item))}
              >
                <img src={convertBufferToBase64(item.Image)} alt="" />
              </Link>
              <button
                className="body-large"
                onClick={() =>
                  dispatch(
                    createCart({
                      IdProduct: item.IdProduct,
                      Amount: 1,
                      IntoMoney: item.Price,
                    })
                  )
                }
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

export default memo(ListProduct);
