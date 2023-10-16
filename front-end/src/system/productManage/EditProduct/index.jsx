import React, { useEffect, useRef, useState } from "react";
import { convertBufferToBase64, convertFiletoBase64 } from "utils/common";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "redux/createAsyncThunk/productManageThunk";
import { formProductManage } from "data/common";

const EditProduct = (props) => {
  const { className, closeModelEdit } = props;

  const { success, editProductValue } = useSelector(
    (state) => state.productManageSlice
  );
  const dispatch = useDispatch();

  const ref = useRef();
  const [product, setProduct] = useState({
    IdProduct: "",
    Name: "",
    Amount: "",
    Price: "",
    Image: "",
  });
  const [image, setImage] = useState();

  useEffect(() => {
    const fetchEditProduct = async () => {
      const { Image } = editProductValue;
      setProduct(editProductValue);

      if (Image) {
        const base64 = convertBufferToBase64(Image);
        setImage(base64);
        setProduct({ ...editProductValue, Image: base64 });
      }
    };
    fetchEditProduct();

    //close model edit
    if (success) {
      closeModelEdit();
      ref.current.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editProductValue, success]);

  //event
  const editProductSumbit = (e) => {
    e.preventDefault();
    dispatch(editProduct(product));
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
      setProduct({ ...product, Image: base64 });
      setImage(base64);
    } else {
      setProduct({ ...product, Image: "" });
      setImage(null);
    }
  };

  const { IdProduct, Name, Amount, Price } = product;
  const formEditProductData = [
    {
      ...formProductManage[0],
      value: IdProduct,
    },
    {
      ...formProductManage[1],
      value: Name,
    },
    {
      ...formProductManage[2],
      value: Amount,
    },
    {
      ...formProductManage[3],
      value: Price,
    },
    {
      ...formProductManage[4],
    },
  ];

  return (
    <form
      id="form-edit-product"
      className={`${className} fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-[45rem]`}
      ref={ref}
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
          onClick={closeModelEdit}
        >
          Close
        </button>
      </fieldset>
    </form>
  );
};

export default EditProduct;
