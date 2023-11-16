import axiosClient from "../axiosClient";

const BillApi = {
  getList: () => {
    return axiosClient.get("bill");
  },

  getById: (id) => {
    return axiosClient.get(`bill/id/${id}`);
  },

  getByIdUser: (id) => {
    return axiosClient.get(`bill/id-user/${id}`);
  },

  getListStatusBill: () => {
    return axiosClient.get("bill/status");
  },

  getListPaymentMethodsBill: () => {
    return axiosClient.get("bill/payment-methods");
  },

  getListDeviveryOptionsBill: () => {
    return axiosClient.get("bill/delivery-options");
  },

  create: (data) => {
    return axiosClient.post("bill/create", data);
  },

  delete: (id) => {
    return axiosClient.delete(`bill/delete/${id}`);
  },
};

export default BillApi;
