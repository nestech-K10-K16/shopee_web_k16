import axiosClient from "./axiosClient";

const ProductApi = {
  getListProduct: () => {
    return axiosClient.get("product");
  },

  getByIdProduct: (id) => {
    return axiosClient.get(`product/id/${id}`);
  },

  addProduct: (id, name, amount, price, image) => {
    return axiosClient.post("product/add", {
      id,
      name,
      amount,
      price,
      image,
    });
  },

  editProduct: (id, name, amount, price, image) => {
    return axiosClient.put(`product/update`, {
      id,
      name,
      amount,
      price,
      image,
    });
  },

  deleteProduct: (id) => {
    return axiosClient.delete(`product/delete/${id}`);
  },
};

export default ProductApi;
