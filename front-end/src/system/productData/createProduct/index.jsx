import React, { useState } from "react";
import ProductApi from "api/productApi";
import { toast } from "react-toastify";
import { convertFiletoBase64 } from "utils/common";

const CreateProduct = (props) => {
  const { closeModelCreate } = props;
  const [product, setProduct] = useState({
    IdProduct: "",
    Name: "",
    Amount: 0,
    Price: 0,
    Image: "",
  });
  const [image, setImage] = useState("");

  const formCreateProductData = [
    {
      name: "IdProduct",
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
      type: "file",
    },
  ];

  //event
  const createProductSumbit = async (e) => {
    e.preventDefault();
    if (!product.IdProduct) {
      alert("your id is empty");
      return;
    }

    const id = await ProductApi.getByIdProduct(product.IdProduct);
    if (!id[0]) {
      await ProductApi.addProduct(product).then(() => {
        toast.success("item added successfully");
        closeModelCreate();
        setImage(null);
        e.target.reset();
      });

      //transfer data to productData
      props.createProduct(product);
      return;
    }

    if (id[0].IdProduct === product.IdProduct) {
      alert("your id is duplicate");
    }
  };

  const onChangeValue = async (e) => {
    if (e.target.name !== "Image") {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    } else {
      const file = e.target.files[0];
      if (file) {
        const base64 = await convertFiletoBase64(file);
        setImage(base64);
        setProduct({ ...product, Image: base64 });
      } else {
        setImage(null);
      }
    }
  };

  return (
    <form
      id={props.id}
      className={`${props.className} fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-[45rem]`}
      onSubmit={(e) => createProductSumbit(e)}
      onKeyDown={props.escapeModelCreate}
    >
      <fieldset className="flex flex-col bg-white-smoke border rounded-2xl gap-y-3 p-6">
        <legend className="heading-02">Form create product</legend>
        <div className="flex justify-between">
          <div className="form-create-product__left-side flex flex-col gap-y-3 ">
            {formCreateProductData?.map((item, index) => {
              return (
                <div className="flex items-center" key={index}>
                  <label className="w-20">{item.name}:</label>
                  <input
                    className="border border-dark-silver rounded-2xl p-2 w-[19.5rem]"
                    name={item.name}
                    type={item.type}
                    value={item.value}
                    onChange={onChangeValue}
                  />
                </div>
              );
            })}
          </div>

          <div className="form-create-product__right-side border w-[16.5rem]">
            <img src={image} alt="" />
          </div>
        </div>

        <button className="bg-green-400 border rounded-full p-2" type="submit">
          save
        </button>
        <button
          className="bg-red-400 border rounded-full p-2"
          type="button"
          onClick={closeModelCreate}
        >
          Close
        </button>
      </fieldset>
    </form>
  );
};

export default CreateProduct;
