import axiosClient from "./axiosClient";

const ProductApi = {
  getListProduct: () => {
    return axiosClient.get("product");
  },

  addProduct: (IdProduct, Name, Amount, Price, Image) => {
    return axiosClient.post("product/add", {
      IdProduct,
      Name,
      Amount,
      Price,
      Image,
    });
  },

  deleteProduct: (id) => {
    return axiosClient.delete(`product/delete/${id}`);
  },
};

export default ProductApi;
