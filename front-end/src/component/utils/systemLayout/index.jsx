import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Header from "./header";

const SystemLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default SystemLayout;
