import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "redux/createAsyncThunk/productThunk";
import { formProductManage } from "data/common";
import { convertFiletoBase64 } from "utils/common";

const CreateProduct = (props) => {
  const { className, closeModel } = props;
  const dispatch = useDispatch();

  const dataProduct = {
    IdProduct: "",
    Name: "",
    Amount: 0,
    Price: 0,
    Image: "",
  };
  const [product, setProduct] = useState(dataProduct);
  const [image, setImage] = useState("");

  //event
  const createProductSumbit = async (e) => {
    e.preventDefault();
    const result = await dispatch(createProduct(product)).unwrap();
    if (result.errCode === 0) {
      closeModel();
      setImage(null);
      setProduct(dataProduct);
      e.target.reset();
    }
  };

  const onChangeValue = async (e) => {
    const { name, files } = e.target;
    if (name !== "Image") {
      return setProduct({
        ...product,
        [name]: e.target.value,
      });
    }

    const file = files[0];
    if (file) {
      const base64 = await convertFiletoBase64(file);
      setImage(base64);
      setProduct({ ...product, Image: base64 });
    } else {
      setImage(null);
      setProduct({ ...product, Image: "" });
    }
  };

  return (
    <form
      id={"model-create-product"}
      className={`${className} fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-[45rem]`}
      onSubmit={createProductSumbit}
      onChange={onChangeValue}
    >
      <fieldset className="flex flex-col bg-white-smoke border rounded-2xl gap-y-3 p-6">
        <legend className="heading-02">Form create product</legend>
        <div className="flex justify-between">
          <div className="form-create-product__left-side flex flex-col gap-y-3 ">
            {formProductManage?.map((item, index) => {
              return (
                <div className="flex items-center" key={index}>
                  <label className="w-20">{item.name}:</label>
                  <input
                    name={item.name}
                    className="border border-dark-silver rounded-2xl mr-1 p-2 w-[18rem]"
                    type={item.type}
                  />
                  <p>(*)</p>
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
          onClick={closeModel}
        >
          Close
        </button>
      </fieldset>
    </form>
  );
};

export default CreateProduct;
