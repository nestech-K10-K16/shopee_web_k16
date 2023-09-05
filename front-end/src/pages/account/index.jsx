import React, { useState } from "react";
import "./index.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { Button, Input } from "component/common";
import { PATHNAME_LIST } from "router/router";

const Account = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const tab = [
    { name: "Dashboard" },
    { name: "Orders" },
    { name: "Downloads" },
    { name: "Addresses" },
    { name: "Account details" },
    { name: "Logout", to: PATHNAME_LIST.MY_ACCOUNT },
  ];

  return (
    <section id="account">
      <div className="account__content">
        <p className="heading-01 text-center">My Account</p>

        <Tabs selectedIndex={tabIndex} onSelect={(e) => setTabIndex(e)}>
          <TabList className="account__content__tab-list heading-03 flex pb-4 mb-4">
            {tab?.map((item, index) => {
              return (
                <Tab className={tabIndex === index ? "tab-active" : ""}>
                  <Link to={item.to}>{item.name}</Link>
                </Tab>
              );
            })}
          </TabList>

          <TabPanel className="heading-05">
            <div className="flex mb-2">
              <p className="heading-05 mr-1">Hello Vitatheme (not Vitatheme?</p>
              <Link
                className="heading-05 text-beaver hover:text-black-1"
                to={PATHNAME_LIST.MY_ACCOUNT}
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

          <TabPanel></TabPanel>

          <TabPanel></TabPanel>

          <TabPanel>
            <p className="heading-05 mb-8">
              The following addresses will be used on the checkout page by
              default.
            </p>

            <div className="flex justify-between w-[60rem]">
              <div className="flex flex-col gap-y-4">
                <p className="heading-03">Billing address</p>
                <button className="body-large flex text-beaver hover:text-black-1">
                  ADD
                </button>
                <p className="body-medium text-dark-silver">
                  You have not set up this type of address yet.
                </p>
              </div>

              <div className="flex flex-col gap-y-4">
                <p className="heading-03">Shipping address</p>
                <button className="body-large flex text-beaver hover:text-black-1">
                  ADD
                </button>
                <p className="body-medium text-dark-silver">
                  You have not set up this type of address yet.
                </p>
              </div>
            </div>
          </TabPanel>

          <TabPanel className="flex flex-col items-center">
            <div className="w-[30rem]">
              <p className="heading-01 text-center">Account details</p>

              <form className="flex flex-col w-full gap-y-6">
                <Input className="body-medium" placeholder="First name*" />
                <Input className="body-medium" placeholder="Last name*" />
                <div>
                  <Input
                    className="body-medium mb-4"
                    placeholder="Display name*"
                  />
                  <p className="body-small text-dark-silver">
                    This will be how your name will be displayed in the account
                    section and in reviews.
                  </p>
                </div>
                <Input className="body-medium" placeholder="Email address*" />
                <p className="body-large">Password change</p>
                <Input
                  className="body-medium"
                  placeholder="Current password (leave blank to leave unchanged)"
                />
                <Input
                  className="body-medium"
                  placeholder="New password (leave blank to leave unchanged)"
                />
                <Input
                  className="body-medium"
                  placeholder="Confirm new password"
                />

                <Button className="black text-center">SAVE CHANGES</Button>
              </form>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Account;
