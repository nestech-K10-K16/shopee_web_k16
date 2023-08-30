import React from "react";
import "./index.css";

const Privacy = () => {
  return (
    <section id="privacy">
      <div className="privacy__content">
        <p className="heading-01 text-center">Privacy Policy</p>
        <p className="heading-05 mb-5">
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis.
        </p>
        <p className="heading-02">Security</p>
        <p className="heading-05 mb-5">
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque.
        </p>
        <p className="heading-02">Cookies</p>

        <ul className="heading-05">
          <li>
            Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
            sollicitudin.
          </li>
          <li>
            Nam fringilla molestie velit, eget pellentesque risus scelerisque a
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Privacy;
