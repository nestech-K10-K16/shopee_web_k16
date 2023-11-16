import React, { useEffect, useState } from "react";
import "./index.scss";
import CreateProduct from "./createProduct";
import EditProduct from "./EditProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getListProduct,
} from "redux/createAsyncThunk/productThunk";
import { addProductToEdit } from "redux/reducers/productSlice";
import { productSliceSelector } from "redux/selector";
import { convertBufferToBase64 } from "utils/common";
import { CLASS_NAME } from "constants/common";

const ProductManage = () => {
  const { productList } = useSelector(productSliceSelector);
  const dispatch = useDispatch();
  const [modelCreate, setModelCreate] = useState("hidden");
  const [modelEdit, setModelEdit] = useState("hidden");

  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);

  const handleModel = (e) => {
    const { tagName } = e.target;
    if (tagName && modelCreate === CLASS_NAME.OPEN_MODEL) {
      setModelCreate(CLASS_NAME.CLOSE_MODEL);
    }
    if (tagName && modelEdit === CLASS_NAME.OPEN_MODEL) {
      setModelEdit(CLASS_NAME.CLOSE_MODEL);
    }
  };

  return (
    <>
      <CreateProduct
        className={modelCreate}
        closeModel={() => setModelCreate(CLASS_NAME.CLOSE_MODEL)}
      />
      <EditProduct
        className={modelEdit}
        closeModel={() => setModelEdit(CLASS_NAME.CLOSE_MODEL)}
      />

      <section id="product-manage" className="h-[100vh]" onClick={handleModel}>
        <div className="flex justify-between mb-4">
          <p className="heading-01">List Product</p>
          <button
            className="bg-green-400 border rounded-full py-2 px-4"
            onClick={() => setModelCreate(CLASS_NAME.OPEN_MODEL)}
          >
            Create
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>IdProduct:</th>
              <th>Name:</th>
              <th>Amount:</th>
              <th>Price:</th>
              <th>Image:</th>
              <th>Action:</th>
            </tr>
          </thead>

          {productList?.map((item) => {
            return (
              <tbody key={item.IdProduct}>
                <tr>
                  <td>{item.IdProduct}</td>
                  <td>{item.Name}</td>
                  <td>{item.Amount}</td>
                  <td>{item.Price}</td>
                  <td>
                    <img
                      src={convertBufferToBase64(item.Image)}
                      alt=""
                      width={150}
                    />
                  </td>
                  <td>
                    <button
                      className="bg-yellow-400 border rounded-full py-2 px-4 mr-3"
                      onClick={() => {
                        dispatch(addProductToEdit(item));
                        setModelEdit(CLASS_NAME.OPEN_MODEL);
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
    </>
  );
};

export default ProductManage;
