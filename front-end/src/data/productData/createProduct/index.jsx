import React from "react";
import "./index.scss";
import ProductApi from "api/productApi";
import { useState } from "react";

const CreateProduct = () => {
  //data
  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Amount, setAmount] = useState(0);
  const [Price, setPrice] = useState(0);
  const [Image, setImage] = useState("");

  const formCreateProductData = [
    {
      name: "IdProduct",
      onChange: (e) => setId(e.target.value),
    },
    { name: "Name", onChange: (e) => setName(e.target.value) },
    {
      name: "Amount",
      onChange: (e) => setAmount(e.target.value),
    },
    {
      name: "Price",
      onChange: (e) => setPrice(e.target.value),
    },
    {
      name: "Image",
      onChange: (e) => setImage(e.target.value),
    },
  ];

  //event
  const createProductSumbit = async () => {
    await ProductApi.addProduct(Id, Name, Amount, Price, Image).then((res) =>
      alert(res)
    );
  };

  const closeModel = () => {
    document.getElementById("form-create-product").style.display = "none";
  };

  return (
    <form id="form-create-product" onSubmit={() => createProductSumbit()}>
      <fieldset className="bg-white-smoke flex flex-col gap-y-3 border rounded-2xl p-6">
        <legend className="heading-02">Form create product</legend>
        {formCreateProductData?.map((item, index) => {
          return (
            <div className="flex items-center" key={index}>
              <label className="w-24">{item.name}:</label>
              <input
                className="border border-dark-silver rounded-2xl p-2 w-full"
                name={item.name}
                type="text"
                onChange={item.onChange}
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

export default CreateProduct;
