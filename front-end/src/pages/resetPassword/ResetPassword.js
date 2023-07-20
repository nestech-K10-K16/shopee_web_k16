import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";
import "./index.css";

const Resetpassword = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <Navbar />
      <div className="Shoppe_resetPassword section-padding">
        <form>
          <h1>Have you Forgotten Your Password ?</h1>
          <h3>
            If you've forgotten your password, enter your e-mail address and
            we'll send you an e-mail
          </h3>
          <div data-validate="email is required" className="fill-email">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            ResetPassword
          </button>
        </form>
      </div>
    </>
  );
};

export default Resetpassword;
