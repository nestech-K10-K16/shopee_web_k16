import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "redux/createAsyncThunk/productThunk";
import { productSliceSelector } from "redux/selector";
import { convertBufferToBase64, convertFiletoBase64 } from "utils/common";
import { formProductManage } from "data/common";

const EditProduct = (props) => {
  const { className, closeModel } = props;

  const { editProductValue } = useSelector(productSliceSelector);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    IdProduct: "",
    Name: "",
    Amount: "",
    Price: "",
    Image: "",
  });
  const [image, setImage] = useState();

  useEffect(() => {
    const { Image } = editProductValue;
    if (Image) {
      const base64 = convertBufferToBase64(Image);
      setImage(base64);
      setProduct({ ...editProductValue, Image: base64 });
    }
  }, [editProductValue]);

  //event
  const editProductSumbit = async (e) => {
    e.preventDefault();

    const result = await dispatch(editProduct(product)).unwrap();
    if (result.errCode === 0) {
      closeModel();
      e.target.reset();
    }
  };

  const onChangeValue = async (e) => {
    const { name, files } = e.target;
    if (name !== "Image") {
      setProduct({
        ...product,
        [name]: e.target.value,
      });
      return;
    }

    const file = files[0];
    if (file) {
      const base64 = await convertFiletoBase64(file);
      setProduct({ ...product, Image: base64 });
      setImage(base64);
    } else {
      setProduct({ ...product, Image: "" });
      setImage(null);
    }
  };

  const { IdProduct, Name, Amount, Price } = product;
  const formEditProductData = [...formProductManage];
  formEditProductData[0].value = IdProduct;
  formEditProductData[1].value = Name;
  formEditProductData[2].value = Amount;
  formEditProductData[3].value = Price;

  return (
    <form
      id={"model-edit-product"}
      className={`${className} fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-[45rem]`}
      onSubmit={(e) => editProductSumbit(e)}
    >
      <fieldset className="bg-white-smoke flex flex-col gap-y-3 border rounded-2xl p-6">
        <legend className="heading-02">Form edit product</legend>
        <div className="flex justify-between">
          <div className="form-edit-product__left-side flex flex-col gap-y-3 ">
            {formEditProductData?.map((item, index) => {
              return (
                <div className="flex items-center" key={index}>
                  <label className="w-20">{item.name}:</label>
                  <input
                    className="border border-dark-silver rounded-2xl p-2 w-[19.5rem]"
                    name={item.name}
                    type={item.type}
                    readOnly={item.readOnly}
                    value={item.value}
                    onChange={onChangeValue}
                  />
                </div>
              );
            })}
          </div>

          <div className="form-edit-product__right-side relative border w-[16.5rem]">
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

export default EditProduct;
