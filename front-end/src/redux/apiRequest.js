import axios from "axios";
import { loginStart } from "./authSlice";

export const loginUser = async (user, dispath, navigate) => {
  dispath(loginStart());
};
