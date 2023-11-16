import React, { useEffect, useState } from "react";
import "./index.scss";
import CreateUser from "./createUser";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getListRoleUser,
  getListUser,
} from "redux/createAsyncThunk/userThunk";
import { userSliceSelector } from "redux/selector";
import { CLASS_NAME } from "constants/common";

const UserManage = () => {
  const { userList, roleList } = useSelector(userSliceSelector);
  const dispatch = useDispatch();

  const [modelCreate, setModelCreate] = useState("hidden");

  useEffect(() => {
    dispatch(getListUser());
    dispatch(getListRoleUser());
  }, [dispatch]);

  const handleModel = (e) => {
    const { tagName } = e.target;
    if (tagName && modelCreate === CLASS_NAME.OPEN_MODEL) {
      setModelCreate(CLASS_NAME.CLOSE_MODEL);
    }
  };

  return (
    <>
      <CreateUser
        className={modelCreate}
        closeModel={() => setModelCreate(CLASS_NAME.CLOSE_MODEL)}
      />

      <section id="user-manage" className="h-[100vh]" onClick={handleModel}>
        <div className="flex justify-between mb-4">
          <p className="heading-01">List User</p>
          <button
            className="bg-green-400 border rounded-full py-2 px-4"
            onClick={() => setModelCreate(CLASS_NAME.OPEN_MODEL)}
          >
            Create
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Email:</th>
              <th>Name:</th>
              <th>Role:</th>
              <th>IdCustomer:</th>
              <th>Action:</th>
            </tr>
          </thead>

          {userList?.map((item) => {
            return (
              <tbody key={item.Email}>
                <tr>
                  <td>{item.Email}</td>
                  <td>{item.Name}</td>
                  <td>
                    {
                      roleList.find((value) => value.IdRole === 1 * item.Role)
                        ?.Name
                    }
                  </td>
                  <td>{item.IdCustomer}</td>
                  <td>
                    <button
                      className="bg-red-400 border rounded-full py-2 px-4"
                      onClick={() => dispatch(deleteUser(item.Email))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </section>
    </>
  );
};

export default UserManage;
