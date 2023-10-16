import axiosClient from "./axiosClient";

const userApi = {
  getList: () => {
    return axiosClient.get("user");
  },

  getById: (id) => {
    return axiosClient.get(`user/id/${id}`);
  },

  create: (user) => {
    return axiosClient.post("user/create", user);
  },

  edit: (user) => {
    return axiosClient.put(`user/update`, user);
  },

  delete: (user) => {
    return axiosClient.delete(`user/delete/${user}`);
  },
};

export default userApi;
