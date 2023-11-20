import React, { useEffect, useState } from "react";
import "./index.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getByIdUser,
  hanldeLogoutUser,
} from "redux/createAsyncThunk/userThunk";
import {
  getByIdUserBill,
  getListDeviveryOptionsBill,
  getListPaymentMothodsBill,
  getListStatusBill,
} from "redux/createAsyncThunk/billThunk";
import { billSliceSelector, userSliceSelector } from "redux/selector";
import { PATHNAME_LIST } from "router/router";
import { formatDate } from "utils/common";

const Account = () => {
  const { userToken } = useSelector(userSliceSelector);
  const {
    billByIdCustomer,
    statusBill,
    paymentMethodsBill,
    deliveryOptionsBill,
  } = useSelector(billSliceSelector);
  const dispatch = useDispatch();

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const fetchIdCustomerBill = async () => {
      const userById = await dispatch(
        getByIdUser(userToken.data?.Email)
      ).unwrap();
      dispatch(getByIdUserBill(userById[0]?.IdCustomer));
    };
    fetchIdCustomerBill();
  }, [dispatch, userToken.data?.Email]);

  useEffect(() => {
    dispatch(getListStatusBill());
    dispatch(getListPaymentMothodsBill());
    dispatch(getListDeviveryOptionsBill());
  }, [dispatch]);

  // data
  const tab = [
    { name: "Dashboard" },
    { name: "Orders" },
    {
      name: userToken.data?.Role === 0 && "System",
      to: PATHNAME_LIST.USER_MANAGE,
    },
  ];

  //event
  const logoutAccount = () => {
    dispatch(hanldeLogoutUser());
  };

  return (
    <section id="account">
      <div className="account__content">
        <p className="heading-01 text-center">My Account</p>

        <Tabs selectedIndex={tabIndex} onSelect={(e) => setTabIndex(e)}>
          <TabList className="account__content__tab-list heading-03 flex pb-4 mb-4">
            {tab?.map((item, index) => {
              return (
                <Tab
                  key={index}
                  className={tabIndex === index ? "tab-active" : ""}
                >
                  <Link to={item.to}>{item.name}</Link>
                </Tab>
              );
            })}
          </TabList>

          <TabPanel className="account__content__dashboard heading-05">
            <div className="flex mb-2">
              <p className="heading-05 mr-1">
                Hello {userToken.data?.Name} (not {userToken.data?.Name}?
              </p>
              <Link
                className="heading-05 text-beaver hover:text-black-1"
                to={PATHNAME_LIST.MY_ACCOUNT}
                onClick={() => logoutAccount()}
              >
                Log out)
              </Link>
            </div>
            <p>
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your password
              and account details.
            </p>
          </TabPanel>

          <TabPanel className="account__content__order">
            <table>
              <thead>
                <tr>
                  <th>IdBill:</th>
                  <th>OrderDate:</th>
                  <th>Status:</th>
                  <th>TotalMoney:</th>
                  <th>PaymentMethods:</th>
                  <th>DeliveryOptions:</th>
                </tr>
              </thead>

              {billByIdCustomer?.map((item) => {
                return (
                  <tbody key={item.IdBill}>
                    <tr>
                      <td>{item.IdBill}</td>
                      <td className="w-32">{formatDate(item.OrderDate)}</td>
                      <td>
                        {
                          statusBill.find(
                            (value) => value.IdStatus === item.Status
                          )?.Name
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
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Account;
