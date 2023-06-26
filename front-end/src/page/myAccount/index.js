import React from "react";
import "./index.css";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";

const MyAccout = () => {
  return (
    <main>
      <Navbar />

      <section id="my-account">
        <div>
          <div>
            <p className="heading-01">My account</p>
          </div>

          <div className="my-account__switch">
            <a className="my-account__switch-sign-in" href="#">
              <p className="heading-03">Sign in</p>
            </a>

            <a className="my-account__switch-register" href="#">
              <p className="heading-03">Register</p>
            </a>
          </div>

          <form className="my-account__user">
            <input
              className="my-account__user-account 
                         border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0"
              type="text"
              placeholder="Email"
            ></input>

            <input
              className="my-account__user-password 
                         border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0"
              type="password"
              placeholder="Password"
            ></input>

            <div className="my-account__user-remember-me">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>

            <a className="my-account__user-login text-decoration-none" href="#">
              <p>SIGN IN</p>
            </a>

            <a className="my-account__user-forgot-password" href="#">
              <p>Have you forgotten your password</p>
            </a>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MyAccout;
