import React, { useEffect, useState } from "react";
import ProductApi from "api/productApi";
import { toast } from "react-toastify";
import { convertBufferToBase64, convertFiletoBase64 } from "utils/common";

const EditProduct = (props) => {
  const { closeModelEdit } = props;
  //data
  const [product, setProduct] = useState({
    IdProduct: "",
    Name: "",
    Amount: 0,
    Price: 0,
    Image: "",
  });
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const getProduct = props.addProductToEdit;

      setProduct({
        IdProduct: getProduct.IdProduct,
        Name: getProduct.Name,
        Amount: getProduct.Amount,
        Price: getProduct.Price,
      });

      if (getProduct.Image) {
        const base64 = await convertBufferToBase64(getProduct.Image);
        setProduct({ ...getProduct, Image: base64 });
        setImage(base64);
      }
    };

    fetchProduct();
  }, [props.addProductToEdit]);

  const formEditProductData = [
    {
      name: "IdProduct",
      readOnly: true,
      value: product.IdProduct,
    },
    {
      name: "Name",
      value: product.Name,
    },
    {
      name: "Amount",
      type: "number",
      value: product.Amount,
    },
    {
      name: "Price",
      type: "number",
      value: product.Price,
    },
    {
      name: "Image",
      type: "file",
    },
  ];

  //event
  const editProductSumbit = async (e) => {
    e.preventDefault();

    await ProductApi.editProduct(product).then(() => {
      toast.success("The item was updated successfully");
      closeModelEdit();
    });

    //transfer data to productData
    props.editProduct(product);
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
        setProduct({ ...product, Image: base64 });
        setImage(base64);
      } else {
        setImage(null);
      }
    }
  };

  return (
    <form
      id={props.id}
      className={`${props.className} fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-[45rem]`}
      onSubmit={(e) => editProductSumbit(e)}
      onKeyDown={props.escapseModelEdit}
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

          <div className="form-edit-product__right-side border w-[16.5rem]">
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
