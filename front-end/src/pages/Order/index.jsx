import React, { useEffect, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getByIdBill,
  getListDeviveryOptionsBill,
  getListPaymentMothodsBill,
} from "redux/createAsyncThunk/billThunk";
import { getByIdCustomer } from "redux/createAsyncThunk/customerThunk";
import { YourOrderBill } from "component/common";
import { KEY_LOCAL_STORAGE } from "constants/common";
import { formatDate } from "utils/common";
import { useNavigate } from "react-router-dom";
import { PATHNAME_LIST } from "router/router";
import {
  billDetailSliceSelector,
  billSliceSelector,
  customerSliceSelector,
} from "redux/selector";
import { getByIdBillDetail } from "redux/createAsyncThunk/billDetailThunk";

const Order = () => {
  const { paymentMethodsBill, deliveryOptionsBill } =
    useSelector(billSliceSelector);
  const { billDetailById, totalMoneyBillDetail } = useSelector(
    billDetailSliceSelector
  );
  const { customerById } = useSelector(customerSliceSelector);
  const [bill, setBill] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getListPaymentMothodsBill());
    dispatch(getListDeviveryOptionsBill());
  }, [dispatch]);

  useEffect(() => {
    const fetchBill = async () => {
      const idBill = localStorage.getItem(KEY_LOCAL_STORAGE.ID_BILL);
      if (idBill) {
        const getBill = await dispatch(getByIdBill(idBill)).unwrap();
        setBill(getBill[0]);

        dispatch(getByIdBillDetail(getBill[0].IdBill));
        dispatch(getByIdCustomer(getBill[0].IdCustomer));
      } else {
        navigate(PATHNAME_LIST.HOME);
      }
    };
    fetchBill();
  }, [dispatch, navigate]);

  // data
  const { IdBill, PaymentMethods, OrderDate, DeliveryOptions } = bill;
  const orderDetailData1 = [
    { name: "ORDER NUMBER", content: IdBill },
    { name: "EMAIL", content: customerById.Email },
    {
      name: "PAYMENT METHOD",
      content: paymentMethodsBill.find(
        (item) => item.IdPaymentMethods === PaymentMethods
      )?.Name,
    },
    {
      name: "ORDER DATE",
      content: formatDate(OrderDate),
    },
    {
      name: "DELIVERY OPTIONS",
      content: deliveryOptionsBill.find(
        (item) => item.IdDeliveryOptions === DeliveryOptions
      )?.Name,
    },
    {
      name: "DELIVERY ADDRESS",
      content: customerById.Address,
    },
    {
      name: "CONTACT NUMBER",
      content: customerById.Phone,
    },
  ];

  return (
    <section id="view-order">
      <div className="view-order__content flex justify-between">
        <div className="view-order__content__left-side">
          <p className="heading-02 mb-5">Order Details</p>

          <div className="flex justify-between w-[30rem]">
            <div className="flex flex-col gap-y-6 w-56">
              <span className="heading-05">
                {orderDetailData1.map((item, index) => {
                  return (
                    index <= 3 && (
                      <div className="mb-4" key={index}>
                        <p>{item.name}:</p>
                        <p>{item.content}</p>
                      </div>
                    )
                  );
                })}
              </span>
            </div>

            <div className="flex flex-col gap-y-6 ">
              <span className="heading-05">
                {orderDetailData1.map((item, index) => {
                  return (
                    index >= 4 && (
                      <div className="mb-4" key={index}>
                        <p>{item.name}:</p>
                        <p>{item.content}</p>
                      </div>
                    )
                  );
                })}
              </span>
            </div>
          </div>
        </div>

        <div className="view-order__content__right-side w-[35rem]">
          <p className="heading-02 mb-6">ORDER Summary</p>
          <YourOrderBill
            map={billDetailById}
            totalMoney={totalMoneyBillDetail}
          />
        </div>
      </div>
    </section>
  );
};

export default Order;
