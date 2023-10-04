import React, { useEffect, useState } from "react";
import "./index.scss";
import ProductApi from "api/productApi";
import CreateProduct from "./createProduct";
import EditProduct from "./EditProduct";
import { toast } from "react-toastify";
import { convertBufferToBase64 } from "utils/common";
import { CLASS_NAME } from "constants/common";

const ProductData = () => {
  const [listProduct, setListProduct] = useState([]);
  const [addProductToEdit, setAddProductToEdit] = useState("");
  const [modelCreateAnimation, setModelCreateAnimation] = useState(
    CLASS_NAME.HIDDEN
  );
  const [modelEditAnimation, setModelEditAnimation] = useState(
    CLASS_NAME.HIDDEN
  );

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await ProductApi.getListProduct();
      setListProduct(result);
    };
    fetchProduct();
  }, []);

  //event
  //CRUD service
  const createProduct = async (data) => {
    setListProduct([...listProduct, data]);
  };

  const editProduct = (data) => {
    setListProduct(
      listProduct.filter((item) => item.IdProduct !== data.IdProduct)
    );
    setListProduct((item) => [...item, data]);
  };

  const deleteProduct = async (id) => {
    const getId = listProduct.find((item) => item.IdProduct === id).IdProduct;

    if (window.confirm(`do you want to delete id: ${getId} ?`)) {
      await ProductApi.deleteProduct(getId).then(
        toast.success("item deleted successfully")
      );
      setListProduct(listProduct.filter((item) => item.IdProduct !== id));
    }
  };

  //keyboard
  const escapeModel = (e) => {
    if (e.key === "Escape") {
      setModelCreateAnimation(CLASS_NAME.CLOSE_MODEL);
      setModelEditAnimation(CLASS_NAME.CLOSE_MODEL);
    }
  };

  return (
    <section id="product-data">
      <CreateProduct
        id="form-create-product"
        className={modelCreateAnimation}
        closeModelCreate={() => setModelCreateAnimation(CLASS_NAME.CLOSE_MODEL)}
        escapeModelCreate={escapeModel}
        createProduct={createProduct}
      />
      <EditProduct
        id="form-edit-product"
        className={modelEditAnimation}
        closeModelEdit={() => setModelEditAnimation(CLASS_NAME.CLOSE_MODEL)}
        escapseModelEdit={escapeModel}
        editProduct={editProduct}
        addProductToEdit={addProductToEdit}
      />

      <div className="flex justify-between mb-4">
        <p className="heading-01">List Product</p>
        <button
          className="bg-green-400 border rounded-full py-2 px-4"
          onClick={() => setModelCreateAnimation(CLASS_NAME.OPEN_MODEL)}
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
                <td>
                  <img
                    src={convertBufferToBase64(item.Image)}
                    alt=""
                    width={150}
                  />
                  <img src={item.Image} alt="" width={150} />
                </td>
                <td>
                  <button
                    className="bg-yellow-400 border rounded-full py-2 px-4 mr-3"
                    onClick={async () => {
                      const getId = await ProductApi.getByIdProduct(
                        item.IdProduct
                      );
                      setAddProductToEdit(getId[0]);
                      setModelEditAnimation(CLASS_NAME.OPEN_MODEL);
                    }}
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
