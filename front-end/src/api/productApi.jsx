import axiosClient from "./axiosClient";

const ProductApi = {
  getListProduct: () => {
    return axiosClient.get("product").catch((err) => {
      throw err;
    });
  },

  getByIdProduct: (id) => {
    return axiosClient.get(`product/id/${id}`).catch((err) => {
      throw err;
    });
  },

  addProduct: (product) => {
    return axiosClient.post("product/add", product).catch((err) => {
      throw err;
    });
  },

  editProduct: (product) => {
    return axiosClient.put(`product/update`, product).catch((err) => {
      throw err;
    });
  },

  deleteProduct: (id) => {
    return axiosClient.delete(`product/delete/${id}`).catch((err) => {
      throw err;
    });
  },
};

export default ProductApi;
