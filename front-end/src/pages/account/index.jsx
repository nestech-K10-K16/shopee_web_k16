import { React, useState } from "react";
import "./index.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { Button, Input } from "component/common";
import { PATHNAME_LIST } from "router/router";

const Account = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section id="account">
      <div className="account__content">
        <p className="heading-01 text-center">My Account</p>

        <Tabs selectedIndex={tabIndex} onSelect={(e) => setTabIndex(e)}>
          <TabList className="account__content__tab-list heading-03 d-flex list-unstyled pb-3">
            <Tab className={tabIndex === 0 ? "tab-active" : ""}>
              <Link>Dashboard</Link>
            </Tab>
            <Tab className={tabIndex === 1 ? "tab-active" : ""}>
              <Link>Orders</Link>
            </Tab>
            <Tab className={tabIndex === 2 ? "tab-active" : ""}>
              <Link>Downloads</Link>
            </Tab>
            <Tab className={tabIndex === 3 ? "tab-active" : ""}>
              <Link>Addresses</Link>
            </Tab>
            <Tab className={tabIndex === 4 ? "tab-active" : ""}>
              <Link>Account details</Link>
            </Tab>
            <Tab className={tabIndex === 5 ? "tab-active" : ""}>
              <Link to={PATHNAME_LIST.MY_ACCOUNT}>Logout</Link>
            </Tab>
          </TabList>

          <TabPanel className="heading-05" value={0}>
            <p>Hello Vitatheme (not Vitatheme? Log out)</p>
            <p>
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your password
              and account details.
            </p>
          </TabPanel>
          <TabPanel value={1}>
            <table className="table">
              <thead>
                <tr className="heading-05">
                  <th>ORDER NUMBER</th>
                  <th>DATE</th>
                  <th>STATUS</th>
                  <th>TOTAL</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>7643980998990</td>
                  <td>October 8,2021</td>
                  <td>Delivered</td>
                  <td>$ 105</td>
                  <td>
                    <Link className="text-beaver text-decoration-none">
                      View Order
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td>943980998990</td>
                  <td>October 8,2021</td>
                  <td>Processing</td>
                  <td>$ 100</td>
                  <td>
                    <Link className="text-beaver text-decoration-none">
                      View Order
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td>879980998990</td>
                  <td>October 8,2021</td>
                  <td>Delivered</td>
                  <td>$ 65</td>
                  <td>
                    <Link className="text-beaver text-decoration-none">
                      View Order
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
          <TabPanel value={2}>
            <table className="table">
              <thead>
                <tr className="heading-05">
                  <th>ORDER NUMBER</th>
                  <th>DATE</th>
                  <th>STATUS</th>
                  <th>TOTAL</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>7643980998990</td>
                  <td>October 8,2021</td>
                  <td>Delivered</td>
                  <td>$ 105</td>
                  <td>
                    <Link
                      className="text-beaver text-decoration-none"
                      to={PATHNAME_LIST.VIEW_ORDER}
                    >
                      View Order | Dowload
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td>943980998990</td>
                  <td>October 8,2021</td>
                  <td>Processing</td>
                  <td>$ 100</td>
                  <td>
                    <Link className="text-beaver text-decoration-none">
                      View Order | Dowload
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td>879980998990</td>
                  <td>October 8,2021</td>
                  <td>Delivered</td>
                  <td>$ 65</td>
                  <td>
                    <Link className="text-beaver text-decoration-none">
                      View Order | Dowload
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
          <TabPanel value={3}>
            <p>
              The following addresses will be used on the checkout page by
              default.
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="heading-03">Billing address</p>
                <p className="body-large text-beaver">ADD</p>
                <p className="body-medium text-dark-silver">
                  You have not set up this type of address yet.
                </p>
              </div>

              <div>
                <p className="heading-03">Shipping address</p>
                <p className="body-large text-beaver">ADD</p>
                <p className="body-medium text-dark-silver">
                  You have not set up this type of address yet.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="d-flex flex-column align-items-center" value={4}>
            <div style={{ width: "30rem" }}>
              <p className="heading-01 text-center">Account details</p>

              <form className="d-flex flex-column w-100">
                <Input className="body-medium mb-3" placeholder="First name*" />
                <Input className="body-medium mb-3" placeholder="Last name*" />
                <Input
                  className="body-medium mb-2"
                  placeholder="Display name*"
                />
                <p className="body-small text-dark-silver mb-2">
                  This will be how your name will be displayed in the account
                  section and in reviews.
                </p>
                <Input
                  className="body-medium mb-3"
                  placeholder="Email address*"
                />
                <p className="body-large">Password change</p>
                <Input
                  className="body-medium mb-3"
                  placeholder="Current password (leave blank to leave unchanged)"
                />
                <Input
                  className="body-medium mb-3"
                  placeholder="New password (leave blank to leave unchanged)"
                />
                <Input
                  className="body-medium mb-5"
                  placeholder="Confirm new password"
                />

                <Button className="text-center">SAVE CHANGES</Button>
              </form>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Account;
