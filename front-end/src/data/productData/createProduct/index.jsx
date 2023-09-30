import React, { useState } from "react";
import "./index.scss";
import ProductApi from "api/productApi";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    Id: "",
    Name: "",
    Amount: 0,
    Price: 0,
    Image: "",
  });

  const formCreateProductData = [
    {
      name: "Id",
    },
    {
      name: "Name",
    },
    {
      name: "Amount",
      type: "number",
    },
    {
      name: "Price",
      type: "number",
    },
    {
      name: "Image",
    },
  ];

  //event
  const createProductSumbit = async (e) => {
    e.preventDefault();
    if (!product.Id) {
      alert("your id is empty");
      return;
    }

    toast.success("item added successfully");

    await ProductApi.addProduct(
      product.Id,
      product.Name,
      product.Amount,
      product.Price,
      product.Image
    );
  };

  const closeModelCreate = () => {
    document.getElementById("form-create-product").style.display = "none";
  };

  return (
    <form id="form-create-product" onSubmit={(e) => createProductSumbit(e)}>
      <fieldset className="bg-white-smoke flex flex-col gap-y-3 border rounded-2xl p-6">
        <legend className="heading-02">Form create product</legend>
        {formCreateProductData?.map((item, index) => {
          return (
            <div className="flex items-center" key={index}>
              <label className="w-20">{item.name}:</label>
              <input
                className="border border-dark-silver rounded-2xl p-2 w-full"
                type={item.type}
                name={item.name}
                onChange={(e) =>
                  setProduct({ ...product, [e.target.name]: e.target.value })
                }
              />
            </div>
          );
        })}
        <button className="bg-green-400 border rounded-full p-2" type="submit">
          save
        </button>
        <button
          className="bg-red-400 border rounded-full p-2"
          type="button"
          onClick={() => closeModelCreate()}
        >
          Close
        </button>
      </fieldset>
    </form>
  );
};

export default CreateProduct;
