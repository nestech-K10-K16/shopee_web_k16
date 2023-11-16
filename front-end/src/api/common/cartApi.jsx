import axiosClient from "../axiosClient";

const CartApi = {
  getByIduser: () => {
    return axiosClient.get("cart/id-user");
  },

  create: (data) => {
    return axiosClient.post("cart/create", data);
  },

  editAmount: (data) => {
    return axiosClient.put("cart/update-amount", data);
  },

  delete: (id) => {
    return axiosClient.delete(`cart/delete/${id}`);
  },

  deleteByIdUser: () => {
    return axiosClient.delete("cart/delete-id-user");
  },
};

export default CartApi;
