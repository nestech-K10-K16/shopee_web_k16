import React, { useEffect, useState } from "react";
import "./index.scss";
import BillDetail from "./billDetail";
import { useDispatch, useSelector } from "react-redux";
import { billSliceSelector, customerSliceSelector } from "redux/selector";
import {
  deleteBill,
  getListBill,
  getListDeviveryOptionsBill,
  getListPaymentMothodsBill,
  getListStatusBill,
} from "redux/createAsyncThunk/billThunk";
import {
  deleteBillDetail,
  getByIdBillDetail,
} from "redux/createAsyncThunk/billDetailThunk";
import { getListCustomer } from "redux/createAsyncThunk/customerThunk";
import { CLASS_NAME } from "constants/common";
import { formatDate } from "utils/common";

const BillManage = () => {
  const { bill, statusBill, paymentMethodsBill, deliveryOptionsBill } =
    useSelector(billSliceSelector);
  const { customerList } = useSelector(customerSliceSelector);
  const dispatch = useDispatch();

  const [modelBillDetail, setModelBillDetail] = useState("hidden");

  useEffect(() => {
    dispatch(getListBill());
    dispatch(getListStatusBill());
    dispatch(getListPaymentMothodsBill());
    dispatch(getListDeviveryOptionsBill());
    dispatch(getListCustomer());
  }, [dispatch]);

  // event
  const handleModel = (e) => {
    const { tagName } = e.target;
    if (tagName && modelBillDetail === CLASS_NAME.OPEN_MODEL) {
      setModelBillDetail(CLASS_NAME.CLOSE_MODEL);
    }
  };

  return (
    <>
      <BillDetail
        className={modelBillDetail}
        closeModel={() => setModelBillDetail(CLASS_NAME.CLOSE_MODEL)}
      />

      <section id="bill-manage" className="h-[100vh]" onClick={handleModel}>
        <p className="heading-01 mb-4">List Bill</p>

        <table>
          <thead>
            <tr>
              <th>IdBill:</th>
              <th>IdCustomer:</th>
              <th>OrderDate:</th>
              <th>Status:</th>
              <th>TotalMoney:</th>
              <th>PaymentMethods:</th>
              <th>DeliveryOptions:</th>
              <th>Action:</th>
            </tr>
          </thead>

          {bill?.map((item) => {
            return (
              <tbody key={item.IdBill}>
                <tr>
                  <td>{item.IdBill}</td>
                  <td>
                    {
                      customerList.find(
                        (value) => value.IdCustomer === item.IdCustomer
                      )?.Name
                    }
                  </td>
                  <td className="w-32">{formatDate(item.OrderDate)}</td>
                  <td>
                    {
                      statusBill.find((value) => value.IdStatus === item.Status)
                        ?.Name
                    }
                  </td>
                  <td>{item.TotalMoney}</td>
                  <td>
                    {
                      paymentMethodsBill.find(
                        (value) =>
                          value.IdPaymentMethods === item.PaymentMethods
                      )?.Name
                    }
                  </td>
                  <td>
                    {
                      deliveryOptionsBill.find(
                        (value) =>
                          value.IdDeliveryOptions === item.DeliveryOptions
                      )?.Name
                    }
                  </td>
                  <td>
                    <div className="flex flex-col">
                      <button
                        className="bg-green-400 border rounded-full w-[7.5rem] py-2 px-4 mb-4"
                        onClick={() => {
                          dispatch(getByIdBillDetail(item.IdBill));
                          setModelBillDetail(CLASS_NAME.OPEN_MODEL);
                        }}
                      >
                        See Details
                      </button>
                      <button
                        className="bg-red-400 border rounded-full py-2 px-4"
                        onClick={() => {
                          dispatch(deleteBillDetail(item.IdBill));
                          dispatch(deleteBill(item.IdBill));
                        }}
                      >
                        Delete
                      </button>
                    </div>
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

export default BillManage;
