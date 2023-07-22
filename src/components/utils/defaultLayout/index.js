import { React } from "react";

import Header from "./header";
import Footer from "./footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="my-5">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
