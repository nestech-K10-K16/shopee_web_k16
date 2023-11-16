import React, { useState, useEffect } from "react";
import "./index.scss";
import CreateCustomer from "./createCustomer";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCustomer,
  getListCustomer,
} from "redux/createAsyncThunk/customerThunk";
import { customerSliceSelector } from "redux/selector";
import { CLASS_NAME } from "constants/common";

const CustomerManage = () => {
  const { customerList } = useSelector(customerSliceSelector);
  const dispatch = useDispatch();

  const [modelCreate, setModelCreate] = useState("hidden");

  useEffect(() => {
    dispatch(getListCustomer());
  }, [dispatch]);

  const handleModel = (e) => {
    const { tagName } = e.target;
    if (tagName && modelCreate === CLASS_NAME.OPEN_MODEL) {
      setModelCreate(CLASS_NAME.CLOSE_MODEL);
    }
  };

  return (
    <>
      <CreateCustomer
        className={modelCreate}
        closeModel={() => setModelCreate(CLASS_NAME.CLOSE_MODEL)}
      />

      <section id="customer-manage" className="h-[100vh]" onClick={handleModel}>
        <div className="flex justify-between mb-4">
          <p className="heading-01">List Customer</p>
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
              <th>IdCustomer:</th>
              <th>Name:</th>
              <th>CompanyName:</th>
              <th>Country:</th>
              <th>Address:</th>
              <th>PostCode:</th>
              <th>City:</th>
              <th>Phone:</th>
              <th>Email</th>
              <th>Action:</th>
            </tr>
          </thead>

          {customerList?.map((item) => {
            return (
              <tbody key={item.IdCustomer}>
                <tr>
                  <td>{item.IdCustomer}</td>
                  <td>{item.Name}</td>
                  <td>{item.CompanyName}</td>
                  <td>{item.Country}</td>
                  <td>{item.Address}</td>
                  <td>{item.PostCode}</td>
                  <td>{item.City}</td>
                  <td>{item.Phone}</td>
                  <td>{item.Email}</td>
                  <td>
                    <button
                      className="bg-red-400 border rounded-full py-2 px-4"
                      onClick={() => dispatch(deleteCustomer(item.IdCustomer))}
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

export default CustomerManage;
