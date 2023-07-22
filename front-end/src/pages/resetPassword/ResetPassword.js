import React from "react";
import DefaultLayout from "../../layouts/defaultLayout";
import "./index.css";

const ResetPassword = () => {
  return (
    <>
      <DefaultLayout>
        <div className="Shoppe__resetPassword">
          <div className="Shoppe__resetPassword-container">
            <h1>Have you Forgotten Your Password ?</h1>
            <h3>
              If you've forgotten your password, enter your e-mail address and
              we'll send you an e-mail
            </h3>
            <input type="email" placeholder="Email"></input>
            <button type="submit" className="btn">
              RESET PASSWORD
            </button>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default ResetPassword;
