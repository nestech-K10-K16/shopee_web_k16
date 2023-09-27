import React, { useEffect, useState } from "react";
import "./index.scss";
import axiosClient from "api/axiosClient";
import CreateProduct from "./createProduct";
import ProductApi from "api/productApi";

const ProductData = () => {
  const [listPorduct, setListProduct] = useState([]);

  useEffect(() => {
    const fetchListProduct = () => {
      axiosClient.get("product").then((res) => setListProduct(res));
    };
    fetchListProduct();
  }, []);

  //event
  const openModel = () => {
    document.getElementById("form-create-product").style.display = "block";
  };

  const deleteProduct = async (IdProduct) => {
    const item = listPorduct.find(
      (item) => item.IdProduct === IdProduct
    ).IdProduct;

    if (window.confirm(`do you want to delete this id: ${item} ?`)) {
      await ProductApi.deleteProduct(item);
    }
  };

  return (
    <section id="product-data">
      <CreateProduct />
      <div className="flex justify-between mb-4">
        <p className="heading-01">List Product</p>
        <button
          className="bg-green-400 rounded-full py-2 px-4"
          onClick={() => openModel()}
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

        {listPorduct?.map((item) => {
          return (
            <tbody key={item.IdProduct}>
              <tr>
                <td>{item.IdProduct}</td>
                <td>{item.Name}</td>
                <td>{item.Amount}</td>
                <td>{item.Price}</td>
                <td>{item.Image}</td>
                <td className="flex gap-x-2">
                  <button className="bg-yellow-400 rounded-full py-2 px-4">
                    Edit
                  </button>
                  <button
                    className="bg-red-400 rounded-full py-2 px-4"
                    onClick={() => deleteProduct(item.IdProduct)}
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

export default ProductData;
