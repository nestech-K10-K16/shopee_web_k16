import React, { useEffect, useRef, useState } from "react";
import { formProductManage } from "data/common";
import { convertFiletoBase64 } from "utils/common";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "redux/createAsyncThunk/productManageThunk";

const CreateProduct = (props) => {
  const { className, closeModelCreate } = props;

  const { success } = useSelector((state) => state.productManageSlice);
  const dispatch = useDispatch();

  const refForm = useRef();
  const dataProduct = {
    IdProduct: "",
    Name: "",
    Amount: "",
    Price: "",
    Image: "",
  };
  const [product, setProduct] = useState(dataProduct);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (success) {
      closeModelCreate();
      setImage(null);
      setProduct(dataProduct);
      refForm.current.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  //event
  const createProductSumbit = async (e) => {
    e.preventDefault();
    dispatch(createProduct(product));
  };

  const onChangeValue = async (e) => {
    if (e.target.name !== "Image") {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
      return;
    }

    const file = e.target.files[0];
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
      id="form-create-product"
      className={`${className} fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-[45rem]`}
      ref={refForm}
      onSubmit={createProductSumbit}
    >
      <fieldset className="flex flex-col bg-white-smoke border rounded-2xl gap-y-3 p-6">
        <legend className="heading-02">Form create product</legend>
        <div className="flex justify-between">
          <div className="form-create-product__left-side flex flex-col gap-y-3 ">
            {formProductManage?.map((item, index) => {
              return (
                <div className="flex items-center" key={index}>
                  <label className="w-20"> {item.name}:</label>
                  <input
                    className="border border-dark-silver rounded-2xl mr-1 p-2 w-[18rem]"
                    name={item.name}
                    type={item.type}
                    value={item.value}
                    onChange={onChangeValue}
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
          onClick={closeModelCreate}
        >
          Close
        </button>
      </fieldset>
    </form>
  );
};

export default CreateProduct;
