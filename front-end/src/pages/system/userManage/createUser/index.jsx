import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "redux/createAsyncThunk/userThunk";
import { userSliceSelector } from "redux/selector";
import { formUserManage } from "data/common";

const CreateUser = (props) => {
  const { className, closeModel } = props;

  const { roleList } = useSelector(userSliceSelector);
  const dispatch = useDispatch();

  const dataUser = { Email: "", Password: "", Name: "", Role: 0 };
  const [user, setUser] = useState(dataUser);

  // event
  const createUserSumbit = async (e) => {
    e.preventDefault();
    const result = await dispatch(createUser(user)).unwrap();

    if (result.errCode === 0) {
      closeModel();
      setUser(dataUser);
      e.target.reset();
    }
  };

  return (
    <form
      id="form-create-user"
      className={`${className} fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-[40rem]`}
      onSubmit={createUserSumbit}
    >
      <fieldset className="flex flex-col bg-white-smoke border rounded-2xl gap-y-3 p-6">
        <legend className="heading-02">Form create user</legend>
        {formUserManage?.map((item, index) => {
          return (
            <div className="flex items-center" key={index}>
              <label className="w-24"> {item.name}:</label>
              <input
                className="border border-dark-silver rounded-2xl w-full mr-1 p-2"
                name={item.name}
                type={item.type}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
              />
              <p>(*)</p>
            </div>
          );
        })}
        <div className="flex items-center">
          <label className="w-24"> IdRole:</label>
          <select
            className="border border-dark-silver rounded-2xl w-full mr-1 p-2"
            value={user.Role}
            onChange={(e) => setUser({ ...user, Role: e.target.value })}
          >
            <option value="" defaultChecked disabled hidden>
              Choose role
            </option>
            {roleList?.map((item) => {
              return (
                <option key={item.IdRole} value={item.IdRole}>
                  {item.Name}
                </option>
              );
            })}
          </select>
          <p>(*)</p>
        </div>

        <button className="bg-green-400 border rounded-full p-2" type="submit">
          save
        </button>
        <button
          className="bg-red-400 border rounded-full p-2"
          type="button"
          onClick={closeModel}
        >
          Close
        </button>
      </fieldset>
    </form>
  );
};

export default CreateUser;
