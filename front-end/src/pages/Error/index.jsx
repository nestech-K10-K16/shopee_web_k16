import React from "react";
import { Button } from "component/common";
import { TYPE_BUTTON } from "constants/common";
import { PATHNAME_LIST } from "router/router";

const Error = () => {
  return (
    <section id="error" className="flex flex-col justify-center h-[100vh]">
      <div className="text-center">
        <p className="heading-01 mb-8">404 NOT FOUND</p>
        <p className="heading-03 text-dark-silver mb-24">
          This page not found; <br />
          back to home and start again
        </p>
        <Button
          id="button"
          className="style-02 px-6 py-4"
          to={PATHNAME_LIST.HOME}
          typeButton={TYPE_BUTTON.LINK}
        >
          HOMEPAGE
        </Button>
      </div>
    </section>
  );
};

export default Error;
