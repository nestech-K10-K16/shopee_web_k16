import React, { Fragment, useState, useEffect } from "react";
import "./index.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "component/common";
import { TYPE_BUTTON } from "constants/common";
import { PATHNAME_LIST } from "router/router";
import { formLoginData, formRegisterData } from "data/common";
import {
  handleRegisterUser,
  hanldeLoginUser,
} from "redux/createAsyncThunk/userThunk";

const MyAccount = () => {
  const { success } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  const [tabIndex, setTabIndex] = useState(0);
  const [login, setLogin] = useState({
    Email: "",
    Password: "",
  });
  const [register, setRegister] = useState({
    Name: "",
    Email: "",
    Password: "",
    RePassword: "",
  });
  const navigate = useNavigate();

  // event
  const loginSubmit = async (e) => {
    e.preventDefault();
    dispatch(hanldeLoginUser(login));
  };

  useEffect(() => {
    if (success) navigate(PATHNAME_LIST.HOME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  const registerSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(handleRegisterUser(register)).unwrap();
    if (result.errCode === 0) {
      setTabIndex(0);
      e.target.reset();
    }
  };

  const tabData = ["Login", "Register"];
  return (
    <section id="my-account">
      <div className="my-account__content">
        <p className="heading-01 mb-5">My account</p>

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="my-account__content__switch heading-03 flex mb-8">
            {tabData?.map((item, index) => {
              return (
                <Tab
                  key={index}
                  className={tabIndex === index ? "tab-active" : ""}
                >
                  <Link className="text-black-1">{item}</Link>
                </Tab>
              );
            })}
          </TabList>

          <TabPanel className="my-account__content__login">
            <form className="flex flex-col" onSubmit={loginSubmit}>
              <div className="flex flex-col gap-3 mb-4">
                {formLoginData?.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <Input
                        id="input"
                        className="heading-05"
                        name={item.name}
                        type={item.type}
                        placeholder={item.name}
                        onChange={(e) =>
                          setLogin({
                            ...login,
                            [e.target.name]: e.target.value,
                          })
                        }
                      ></Input>
                    </Fragment>
                  );
                })}
              </div>

              <div className="flex items-center mb-8">
                <input className="heading-05 me-3" type="checkbox" />
                Remember me
              </div>

              <Button
                id="button"
                className="style-01 body-large mb-3"
                type="submit"
                typeButton={TYPE_BUTTON.BUTTON}
              >
                SIGN IN
              </Button>

              <Link className="heading-05 text-dark-silver hover:text-black-1">
                Have you forgotten your password
              </Link>
            </form>
          </TabPanel>

          <TabPanel className="my-account__content__register ">
            <form className="flex flex-col" onSubmit={registerSubmit}>
              {formRegisterData.map((item, index) => {
                return (
                  <div className="flex items-center" key={index}>
                    <Input
                      id="input"
                      className="heading-05 mb-2 w-full"
                      name={item.name}
                      type={item.type}
                      placeholder={item.placeholder}
                      onChange={(e) =>
                        setRegister({
                          ...register,
                          [e.target.name]: e.target.value,
                        })
                      }
                    ></Input>
                    (*)
                  </div>
                );
              })}

              <Button
                id="button"
                type="submit"
                className="style-01 body-large mt-4"
                typeButton={TYPE_BUTTON.BUTTON}
              >
                SIGN UP
              </Button>
            </form>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default MyAccount;
