import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { useTabs } from "hook/useTabs/useTabs";
import "./index.css";

const Account = () => {
  const { tabIndex, activeTabs, handleChange, userChange, setTabIndex } =
    useTabs(0);

  return (
    <div className="shoppe__account">
      <div className="shoppe__account-container ">
        <h1 className="heading-01">My Account</h1>
        <Tabs
          data-selected-index={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList data-selected-index={tabIndex} onSelect={handleChange}>
            <div className="shoppe__account-tabs">
              <Tab
                value={1}
                className={`shoppe__account-tab ${
                  activeTabs[0] ? "active-tab" : ""
                }`}
                onClick={() => userChange(0)}
              >
                Dashboard
              </Tab>
              <Tab
                value={2}
                className={`shoppe__account-tab ${
                  activeTabs[1] ? "active-tab" : ""
                }`}
                onClick={() => userChange(1)}
              >
                Orders
              </Tab>
              <Tab
                value={3}
                className={`shoppe__account-tab ${
                  activeTabs[2] ? "active-tab" : ""
                }`}
                onClick={() => userChange(2)}
              >
                Downloads
              </Tab>
              <Tab
                value={4}
                className={`shoppe__account-tab ${
                  activeTabs[3] ? "active-tab" : ""
                }`}
                onClick={() => userChange(3)}
              >
                Addresses
              </Tab>
              <Tab
                value={5}
                className={`shoppe__account-tab ${
                  activeTabs[4] ? "active-tab" : ""
                }`}
                onClick={() => userChange(4)}
              >
                Account details
              </Tab>
              <Tab
                value={6}
                className={`shoppe__account-tab ${
                  activeTabs[5] ? "active-tab" : ""
                }`}
                onClick={() => userChange(5)}
              >
                Logout
              </Tab>
            </div>
          </TabList>
          <TabPanel value={1}>
            <div className="dashboard">
              <h3>
                Hello Vitatheme (not Vitatheme? <span>Log out</span>)
              </h3>
              <h3>
                From your account dashboard you can view your{" "}
                <span>recent orders</span>, manage your{" "}
                <span>shipping and billing addresses</span>, and edit your{" "}
                <span>password and account details</span>.
              </h3>
            </div>
          </TabPanel>
          <TabPanel value={2}>
            <div className="orders">
              <h4>No order has been made yet.</h4>
              <span>BROWSE PRODUCT</span>
            </div>
          </TabPanel>
          <TabPanel value={3}>
            <div className="orders">
              <h4>No downloads available yet.</h4>
              <span>BROWSE PRODUCT</span>
            </div>
          </TabPanel>
          <TabPanel value={4}>
            <div className="address">
              <h2>
                The following addresses will be used on the checkout page by
                default.
              </h2>
              <div className="add">
                <div className="bill">
                  <h3>Billing address</h3>
                  <p>ADD</p>
                  <h6>You have not set up this type of address yet.</h6>
                </div>
                <div className="bill">
                  <h3>Shipping address </h3>
                  <p>ADD</p>
                  <h6>You have not set up this type of address yet.</h6>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={5}>
            <div className="details">
              <h1>Account details</h1>
              <div className="input">
                <input type="text" placeholder="First name*" />
                <input type="text" placeholder="Last name*" />
                <input type="text" placeholder="Display name*" />
                <input type="text" placeholder="Email address*" />
              </div>
              <h3>Password change</h3>
              <div className="input">
                <input
                  type="text"
                  placeholder="Current password (leave blank to leave unchanged)"
                />
                <input
                  type="text"
                  placeholder="New password (leave blank to leave unchanged)"
                />
                <input type="text" placeholder="Confirm new password" />
              </div>
              <button className="btn-black">SAVE CHANGES</button>
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Account;
