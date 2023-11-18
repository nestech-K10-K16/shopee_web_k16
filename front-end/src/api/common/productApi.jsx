import axiosClient from "../axiosClient";

const ProductApi = {
  getList: () => {
    return axiosClient.get("product");
  },

  getListLimit: (data) => {
    return axiosClient.get("product/list-limit", { params: data });
  },

  getById: (id) => {
    return axiosClient.get(`product/id/${id}`);
  },

  create: (data) => {
    return axiosClient.post("product/create", data);
  },

  edit: (data) => {
    return axiosClient.put(`product/update`, data);
  },

  delete: (id) => {
    return axiosClient.delete(`product/delete/${id}`);
  },
};

export default ProductApi;
