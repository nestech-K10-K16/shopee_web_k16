import axiosClient from "../axiosClient";

const userApi = {
  getList: () => {
    return axiosClient.get("user");
  },

  getListLimit: (data) => {
    return axiosClient.get("user/limit", { params: data });
  },

  getById: (id) => {
    return axiosClient.get(`user/id/${id}`);
  },

  getListRole: () => {
    return axiosClient.get("user/role");
  },

  create: (data) => {
    return axiosClient.post("user/create", data);
  },

  edit: (data) => {
    return axiosClient.put(`user/update`, data);
  },

  delete: (id) => {
    return axiosClient.delete(`user/delete/${id}`);
  },

  handleLogin: (data) => {
    return axiosClient.post("user/login", data);
  },

  hanldeLogout: () => {
    return axiosClient.get("user/logout");
  },

  refreshLogin: () => {
    return axiosClient.get("user/refresh-login");
  },

  handleRegister: (data) => {
    return axiosClient.post("user/register", data);
  },
};

export default userApi;
