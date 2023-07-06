import "./index.css";

const ResetPassword = () => {
  return (
    <main>
      <section id="reset-password">
        <div className="reset-password__content">
          <p
            className="reset-password__content__heading
                         heading-01"
          >
            Have you Forgotten Your Password ?
          </p>

          <div>
            <p
              className="reset-password__content__title
                           heading-03"
            >
              If you've forgotten your password, enter your e-mail address and
              we'll send you an e-mail
            </p>

            <input
              className="reset-password__content__email
                           border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0"
              type="text"
              placeholder="Email"
            ></input>

            <a
              className="reset-password_content__btn-reset-password
                           body-large
                           background-color-black-color-white-text-decoration-none-padding-1rem-4rem-border-radius-6px"
              href="#"
            >
              <p>RESET PASSSWORD</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResetPassword;
