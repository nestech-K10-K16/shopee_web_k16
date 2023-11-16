import axiosClient from "../axiosClient";

const CustomerApi = {
  getList: () => {
    return axiosClient.get("customer");
  },

  getById: (id) => {
    return axiosClient.get(`customer/id/${id}`);
  },

  create: (data) => {
    return axiosClient.post("customer/create", data);
  },

  delete: (id) => {
    return axiosClient.delete(`customer/delete/${id}`);
  },
};

export default CustomerApi;
