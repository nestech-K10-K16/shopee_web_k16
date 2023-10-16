import axiosClient from "./axiosClient";

const ProductApi = {
  getListProduct: () => {
    return axiosClient.get("product");
  },

  createProduct: (data) => {
    return axiosClient.post("product/create", data);
  },

  editProduct: (data) => {
    return axiosClient.put(`product/update`, data);
  },

  deleteProduct: (id) => {
    return axiosClient.delete(`product/delete/${id}`);
  },
};

export default ProductApi;
