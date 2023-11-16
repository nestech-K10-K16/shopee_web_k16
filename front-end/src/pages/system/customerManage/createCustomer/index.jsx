import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "redux/createAsyncThunk/customerThunk";
import { formCustomerManageData } from "data/common";

const CreateCustomer = (props) => {
  const { className, closeModel } = props;

  const dispatch = useDispatch();

  const customerData = {
    Name: "",
    CompanyName: "",
    Country: "",
    Address: "",
    PostCode: "",
    City: "",
    Phone: 0,
    Email: "",
  };
  const [customer, setCustomer] = useState(customerData);

  // event
  const createUserSumbit = async (e) => {
    e.preventDefault();
    const result = await dispatch(createCustomer(customer)).unwrap();

    if (result.errCode === 0) {
      closeModel();
      setCustomer(customerData);
      e.target.reset();
    }
  };

  return (
    <form
      id="form-create-customer"
      className={`${className} fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-[45rem]`}
      onSubmit={createUserSumbit}
    >
      <fieldset className="flex flex-col bg-white-smoke border rounded-2xl gap-y-3 p-6">
        <legend className="heading-02">Form create customer</legend>
        {formCustomerManageData?.map((item, index) => {
          return (
            <div className="flex items-center" key={index}>
              <label className="w-32"> {item.name}:</label>
              <input
                className="border border-dark-silver rounded-2xl w-[32rem] mr-1 p-2"
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                onChange={(e) =>
                  setCustomer({ ...customer, [e.target.name]: e.target.value })
                }
              />
              <p>{item.notEmpty}</p>
            </div>
          );
        })}

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

export default CreateCustomer;
