import React from "react";
import { DefaultLayout } from "components";
import "./privacy.css";

const Privacy = () => {
  return (
    <>
      <DefaultLayout>
        <div className="Shoppe__privacy">
          <div className="Shoppe__privacy-container">
            <h1>Privacy Policy</h1>
            <h4>
              Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
              sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
              eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor
              magna et, placerat urna. Curabitur eu magna enim. Proin placerat
              tortor lacus, ac sodales lectus placerat quis.
            </h4>
            <h3>Security</h3>
            <h4>
              Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
              sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
              eget pellentesque risus scelerisque.
            </h4>
            <h3>Cookies</h3>
            <ul>
              <li>
                Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
                sollicitudin.
              </li>
              <li>
                Nam fringilla molestie velit, eget pellentesque risus
                scelerisque a.
              </li>
            </ul>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Privacy;
