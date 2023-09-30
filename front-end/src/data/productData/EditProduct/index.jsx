import React, { useEffect, useState } from "react";
import ProductApi from "api/productApi";
import "./index.scss";
import { toast } from "react-toastify";

const EditProduct = (props) => {
  //data
  const [product, setProduct] = useState({
    Id: "",
    Name: "",
    Amount: 0,
    Price: 0,
    Image: "",
  });

  useEffect(() => {
    const product = props.dataProduct;
    setProduct({
      Id: product.IdProduct,
      Name: product.Name,
      Amount: product.Amount,
      Price: product.Price,
      Image: product.Image,
    });
  }, [props]);

  const formCreateProductData = [
    {
      name: "Id",
      value: product.Id,
      readOnly: true,
    },
    {
      name: "Name",
      value: product.Name,
    },
    {
      name: "Amount",
      value: product.Amount,
      type: "number",
    },
    {
      name: "Price",
      value: product.Price,
      type: "number",
    },
    {
      name: "Image",
      value: product.Image,
    },
  ];

  //event
  const editProductSumbit = async (e) => {
    e.preventDefault();

    toast.success("The item was updated successfully");

    await ProductApi.editProduct(
      product.Id,
      product.Name,
      product.Amount,
      product.Price,
      product.Image
    );
  };

  const closeModel = () => {
    document.getElementById("form-edit-product").style.display = "none";
  };

  return (
    <form id="form-edit-product" onSubmit={(e) => editProductSumbit(e)}>
      <fieldset className="bg-white-smoke flex flex-col gap-y-3 border rounded-2xl p-6">
        <legend className="heading-02">Form edit product</legend>
        {formCreateProductData?.map((item, index) => {
          return (
            <div className="flex items-center" key={index}>
              <label className="w-20">{item.name}:</label>
              <input
                className="border border-dark-silver rounded-2xl p-2 w-full"
                name={item.name}
                type={item.type}
                value={item.value}
                readOnly={item.readOnly}
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
          onClick={() => closeModel()}
        >
          Close
        </button>
      </fieldset>
    </form>
  );
};

export default EditProduct;
