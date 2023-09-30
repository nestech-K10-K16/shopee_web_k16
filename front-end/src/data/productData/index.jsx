import React, { useEffect, useState } from "react";
import "./index.scss";
import axiosClient from "api/axiosClient";
import ProductApi from "api/productApi";
import CreateProduct from "./createProduct";
import EditProduct from "./EditProduct";

const ProductData = () => {
  const [listProduct, setListProduct] = useState([]);
  const [dataProduct, setDataProduct] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await axiosClient.get("product");
      setListProduct(result);
    };
    fetchProduct();
  }, []);

  //event
  const openModelCreate = () => {
    document.getElementById("form-create-product").style.display = "block";
  };

  const openModelEdit = (id) => {
    ProductApi.getByIdProduct(id).then((res) => setDataProduct(res[0]));
    document.getElementById("form-edit-product").style.display = "block";
  };

  const deleteProduct = async (id) => {
    const item = listProduct.find((item) => item.IdProduct === id).IdProduct;
    if (window.confirm(`do you want to delete this id: ${item} ?`)) {
      await ProductApi.deleteProduct(item);
      setListProduct(
        listProduct.filter((item) => {
          return item.IdProduct !== id;
        })
      );
    }
  };

  return (
    <section id="product-data">
      <CreateProduct />
      <EditProduct dataProduct={dataProduct} />
      <div className="flex justify-between mb-4">
        <p className="heading-01">List Product</p>
        <button
          className="bg-green-400 border rounded-full py-2 px-4"
          onClick={() => openModelCreate()}
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

        {listProduct?.map((item) => {
          return (
            <tbody key={item.IdProduct}>
              <tr>
                <td>{item.IdProduct}</td>
                <td>{item.Name}</td>
                <td>{item.Amount}</td>
                <td>{item.Price}</td>
                <td>{item.Image}</td>
                <td className="flex gap-x-2">
                  <button
                    className="bg-yellow-400 border rounded-full py-2 px-4"
                    onClick={() => openModelEdit(item.IdProduct)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-400 border rounded-full py-2 px-4"
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
