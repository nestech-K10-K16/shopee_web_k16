import React, { Fragment, useEffect, useState } from "react";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  billSliceSelector,
  cartSliceSelector,
  userSliceSelector,
} from "redux/selector";
import {
  createBill,
  getListPaymentMothodsBill,
} from "redux/createAsyncThunk/billThunk";
import { createBillDetail } from "redux/createAsyncThunk/billDetailThunk";
import { getByIdCustomer } from "redux/createAsyncThunk/customerThunk";
import { getByIdUser } from "redux/createAsyncThunk/userThunk";
import { deleteByIdUserCart } from "redux/createAsyncThunk/cartThunk";
import { Button, Input, YourOrderBill } from "component/common";
import { formBillDetailsData } from "data/common";
import { KEY_LOCAL_STORAGE, TYPE_BUTTON } from "constants/common";
import { PATHNAME_LIST } from "router/router";

const CheckOut = () => {
  const { userToken } = useSelector(userSliceSelector);
  const { cartByIdUser, totalMoneyCart } = useSelector(cartSliceSelector);
  const { paymentMethodsBill } = useSelector(billSliceSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const [bill, setBill] = useState({
    TotalMoney: 0,
    PaymentMethods: 0,
  });

  // call api
  useEffect(() => {
    dispatch(getListPaymentMothodsBill());
  }, [dispatch]);

  useEffect(() => {
    const fetchCustomer = async () => {
      const user = await dispatch(getByIdUser(userToken.data?.Email)).unwrap();
      const customer = await dispatch(
        getByIdCustomer(user[0]?.IdCustomer)
      ).unwrap();
      if (customer[0]) {
        setCustomer(customer[0]);
      }
    };
    fetchCustomer();
  }, [dispatch, userToken.data?.Email]);

  // event
  const placeOrderClick = async () => {
    const createbill = await dispatch(
      createBill({
        customer: customer,
        bill: {
          ...bill,
          TotalMoney: totalMoneyCart,
        },
      })
    ).unwrap();

    if (createbill.errCode === 0) {
      const product = await cartByIdUser.map((item) => {
        return [createbill.IdBill, item.IdProduct, item.Amount, item.IntoMoney];
      });
      dispatch(createBillDetail(product));
      navigate(PATHNAME_LIST.ORDER);
      localStorage.setItem(KEY_LOCAL_STORAGE.ID_BILL, createbill.IdBill);
      dispatch(deleteByIdUserCart());
    }
  };

  // data
  const { Name, CompanyName, Country, Address, PostCode, City, Phone, Email } =
    customer;
  const newFormBillDetailsData = [...formBillDetailsData];
  newFormBillDetailsData[0].value = Name;
  newFormBillDetailsData[1].value = CompanyName;
  newFormBillDetailsData[2].value = Country;
  newFormBillDetailsData[3].value = Address;
  newFormBillDetailsData[4].value = PostCode;
  newFormBillDetailsData[5].value = City;
  newFormBillDetailsData[6].value = Phone;
  newFormBillDetailsData[7].value = Email;

  return (
    <section id="check-out">
      <div className="check-out__content">
        <p className="heading-01 text-center">Checkout</p>

        <div className="check-out__content__title flex flex-col mb-16">
          <div className="mb-4">
            <span className="text-dark-silver">Have a coupon? </span>
            <button className="hover:text-beaver">
              Click here to enter your code
            </button>
          </div>

          <div className="border border-bright-gray w-[36rem] p-6">
            <p className="text-dark-silver mb-8">
              If you have a coupon code, please apply it below.
            </p>

            <div className="flex">
              <Input
                id="input"
                className="body-small w-full mr-6"
                placeholder="Coupon Code"
              ></Input>
              <Button
                id="button"
                className="style-01 body-large rounded-md w-48"
                typeButton={TYPE_BUTTON.BUTTON}
              >
                APPLY COUPON
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="check-out__content__billing-details heading-05 w-[35rem]">
            <p className="heading-01 mb-6">Billing Details</p>
            {userToken.data ? (
              <form className="flex flex-col gap-y-4">
                {newFormBillDetailsData?.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <Input
                        id="input"
                        className="w-full"
                        name={item.name}
                        placeholder={item.placeholder}
                        value={item.value || ""}
                        onChange={(e) =>
                          setCustomer({
                            ...customer,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </Fragment>
                  );
                })}

                <div className="flex items-center">
                  <input className="mr-2" type="checkbox" />
                  Ship to a different address?
                </div>

                <Input
                  id="input"
                  className="w-full"
                  placeholder="Order notes"
                ></Input>
              </form>
            ) : (
              <>
                <span className="text-dark-silver">Returning customer? </span>
                <Link
                  className="hover:text-beaver"
                  to={PATHNAME_LIST.MY_ACCOUNT}
                >
                  Click here to login
                </Link>
              </>
            )}
          </div>

          {userToken.data && (
            <div className="check-out__content__your-order w-[35rem]">
              <p className="heading-01">YOUR ORDER</p>
              <YourOrderBill map={cartByIdUser} totalMoney={totalMoneyCart}>
                <div className="flex flex-col gap-y-4 mb-4">
                  <span className="flex item-center">
                    <input
                      className="mr-2"
                      name="pay"
                      type="radio"
                      defaultChecked
                      value={paymentMethodsBill[0]?.IdPaymentMethods}
                      onChange={(e) =>
                        setBill({ ...bill, PaymentMethods: e.target.value })
                      }
                    />
                    {paymentMethodsBill[0]?.Name}
                  </span>
                  <p className="body-small text-dark-silver">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account
                  </p>
                  {paymentMethodsBill.map((item) => {
                    return (
                      item.IdPaymentMethods !== 0 && (
                        <span
                          key={item.IdPaymentMethods}
                          className="flex item-center"
                        >
                          <input
                            className="mr-2"
                            name="pay"
                            type="radio"
                            value={item.IdPaymentMethods}
                            onChange={(e) =>
                              setBill({
                                ...bill,
                                PaymentMethods: e.target.value,
                              })
                            }
                          />
                          {item.Name}
                        </span>
                      )
                    );
                  })}
                </div>

                {cartByIdUser[0] && (
                  <Button
                    id="button"
                    className="style-01 text-center"
                    typeButton={TYPE_BUTTON.BUTTON}
                    onClick={() => placeOrderClick()}
                  >
                    PLACE ORDER
                  </Button>
                )}
              </YourOrderBill>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
