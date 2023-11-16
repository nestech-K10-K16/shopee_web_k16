import axiosClient from "../axiosClient";

const BillDetailApi = {
  getList: () => {
    return axiosClient.get("bill-detail");
  },

  getByIdBill: (id) => {
    return axiosClient.get(`bill-detail/id-bill/${id}`);
  },

  create: (data) => {
    return axiosClient.post("bill-detail/create", data);
  },

  delete: (id) => {
    return axiosClient.delete(`bill-detail/delete/${id}`);
  },
};

export default BillDetailApi;
