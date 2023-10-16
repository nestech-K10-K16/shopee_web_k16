import React, { useEffect, useState } from "react";
import "./index.scss";
import CreateUser from "./createUser";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "redux/createAsyncThunk/userManageThunk";

const UserManage = () => {
  const { user } = useSelector((state) => state.userManageSlice);
  const dispatch = useDispatch();

  const [modelCreateAnimation, setModelCreateAnimation] = useState("hidden");

  useEffect(() => {
    dispatch(getListUser());
  }, [dispatch]);

  return (
    <section id="user-manage">
      <CreateUser
        className={modelCreateAnimation}
        closeModelCreate={() =>
          setModelCreateAnimation("animate-close-model hidden")
        }
      />

      <div className="flex justify-between mb-4">
        <p className="heading-01">List User</p>
        <button
          className="bg-green-400 border rounded-full py-2 px-4"
          onClick={() => setModelCreateAnimation("animate-open-model")}
        >
          Create
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Email:</th>
            <th>Password:</th>
            <th>Name:</th>
            <th>IdRole:</th>
            <th>Action:</th>
          </tr>
        </thead>

        {user?.map((item) => {
          return (
            <tbody key={item.Email}>
              <tr>
                <td>{item.Email}</td>
                <td>{item.Password}</td>
                <td>{item.Name}</td>
                <td>{item.IdRole}</td>
                <td>
                  <button className="bg-yellow-400 border rounded-full py-2 px-4 mr-3">
                    Edit
                  </button>
                  <button className="bg-red-400 border rounded-full py-2 px-4">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </section>
  );
};

export default UserManage;
