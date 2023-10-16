import React, { useState } from "react";
import { formUserManage } from "data/common";

const CreateUser = (props) => {
  const { className, closeModelCreate } = props;

  const [user, setUser] = useState({
    Email: "",
    Password: "",
    Name: "",
    Role: "",
  });

  const createUserSumbit = () => {};

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
              />
              <p>(*)</p>
            </div>
          );
        })}
        <div className="flex items-center">
          <label className="w-24"> IdRole:</label>
          <select
            className="border border-dark-silver rounded-2xl w-full mr-1 p-2"
            name="IdRole"
          >
            <option value=""></option>
          </select>
          <p>(*)</p>
        </div>

        <button className="bg-green-400 border rounded-full p-2" type="submit">
          save
        </button>
        <button
          className="bg-red-400 border rounded-full p-2"
          type="button"
          onClick={closeModelCreate}
        >
          Close
        </button>
      </fieldset>
    </form>
  );
};

export default CreateUser;
