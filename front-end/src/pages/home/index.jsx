import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { PATHNAME_LIST } from "router/router";
import { SlideShowImage, ListProductToDo } from "component/common";

const Home = () => {
  return (
    <section id="home">
      <div className="home__content">
        <div className="home__content__banner mb-8">
          <SlideShowImage></SlideShowImage>
        </div>

        <div className="home__content__product">
          <div className="flex justify-between items-center mb-4">
            <p className="heading-01">Shop The Latest</p>
            <Link
              className="heading-04 text-beaver hover:text-black no-underline"
              to={PATHNAME_LIST.SHOP}
            >
              View all
            </Link>
          </div>

          <div>
            <ListProductToDo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
