import React, { useEffect, useState } from "react";
import "./index.scss";
import CreateProduct from "./createProduct";
import EditProduct from "./EditProduct";
import { convertBufferToBase64 } from "utils/common";
import { useDispatch, useSelector } from "react-redux";
import {
  getListProduct,
  deleteProduct,
} from "redux/createAsyncThunk/productManageThunk";
import { addProductToEdit } from "redux/reducers/productManageSlice";

const ProductManage = () => {
  const { product } = useSelector((state) => state.productManageSlice);
  const dispatch = useDispatch();

  const [modelCreateAnimation, setModelCreateAnimation] = useState("hidden");
  const [modelEditAnimation, setModelEditAnimation] = useState("hidden");

  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);

  return (
    <section id="product-manage">
      <CreateProduct
        className={modelCreateAnimation}
        closeModelCreate={() =>
          setModelCreateAnimation("animate-close-model hidden")
        }
      />
      <EditProduct
        className={modelEditAnimation}
        closeModelEdit={() =>
          setModelEditAnimation("animate-close-model hidden")
        }
      />

      <div className="flex justify-between mb-4">
        <p className="heading-01">List Product</p>
        <button
          className="bg-green-400 border rounded-full py-2 px-4"
          onClick={() => setModelCreateAnimation("animate-open-model")}
        >
          Create
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Id:</th>
            <th>Name:</th>
            <th>Amount:</th>
            <th>Price:</th>
            <th>Image:</th>
            <th>Action:</th>
          </tr>
        </thead>

        {product?.map((item) => {
          return (
            <tbody key={item.IdProduct}>
              <tr>
                <td>{item.IdProduct}</td>
                <td>{item.Name}</td>
                <td>{item.Amount}</td>
                <td>{item.Price}</td>
                <td>
                  <img
                    src={item.Image ? convertBufferToBase64(item.Image) : ""}
                    alt=""
                    width={150}
                  />
                </td>
                <td>
                  <button
                    className="bg-yellow-400 border rounded-full py-2 px-4 mr-3"
                    onClick={() => {
                      dispatch(addProductToEdit(item));
                      setModelEditAnimation("animate-open-model");
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-400 border rounded-full py-2 px-4"
                    onClick={() => dispatch(deleteProduct(item.IdProduct))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </section>
  );
};

export default ProductManage;
