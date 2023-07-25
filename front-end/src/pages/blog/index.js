import React from "react";
import "./index.css";
import {
  IMG_POST_01,
  IMG_POST_02,
  IMG_POST_03,
  IMG_POST_04,
} from "../../assets";
import Input from "../../component/common/input";

const Blog = () => {
  return (
    <section id="blog">
      <div className="blog__content d-flex">
        <div className="blog__content__left-side-bar me-5">
          <p className="heading-01">Blog</p>

          <div className="blog__content__left-side-bar__search mb-5">
            <Input className="heading-05 w-100" placeholder="Search..." />

            <button className="bg-body border-0">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <ul className="blog__content__left-side-bar__categories list-unstyled">
            <li className="heading-04 mb-3">Categories</li>
            <li className="heading-05 mb-2">
              <a className="text-black text-decoration-none" href="/">
                Fashion
              </a>
            </li>
            <li className="heading-05 mb-2">
              <a className="text-black text-decoration-none" href="/">
                Style
              </a>
            </li>
            <li className="heading-05 mb-2">
              <a className="text-black text-decoration-none" href="/">
                Accessories
              </a>
            </li>
            <li className="heading-05 mb-2">
              <a className="text-black text-decoration-none" href="/">
                Season
              </a>
            </li>
          </ul>
        </div>

        <div className="blog__content__blog-post">
          <div className="row mb-5">
            <div className="col">
              <IMG_POST_01 />
              <p className="body-medium text-dark-silver">
                Fashion - October 8, 2020
              </p>
              <p className="heading-03">Top Trends From Spring</p>
              <p className="heading-05 text-dark-silver">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                faucibus augue, a maximus elit ex vitae libero...
              </p>
              <a
                className="body-large text-beaver text-decoration-none"
                href="/"
              >
                Read More
              </a>
            </div>

            <div className="col">
              <IMG_POST_02 />
              <p className="body-medium text-dark-silver">
                Fashion - October 8, 2020
              </p>
              <p className="heading-03">Top Trends From Spring</p>
              <p className="heading-05 text-dark-silver">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                faucibus augue, a maximus elit ex vitae libero...
              </p>
              <a
                className="body-large text-beaver text-decoration-none"
                href="/"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <IMG_POST_03 />
              <p className="body-medium text-dark-silver">
                Fashion - October 8, 2020
              </p>
              <p className="heading-03">Top Trends From Spring</p>
              <p className="heading-05 text-dark-silver">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                faucibus augue, a maximus elit ex vitae libero...
              </p>
              <a
                className="body-large text-beaver text-decoration-none"
                href="/"
              >
                Read More
              </a>
            </div>

            <div className="col">
              <IMG_POST_04 />
              <p className="body-medium text-dark-silver">
                Fashion - October 8, 2020
              </p>
              <p className="heading-03">Top Trends From Spring</p>
              <p className="heading-05 text-dark-silver">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                faucibus augue, a maximus elit ex vitae libero...
              </p>
              <a
                className="body-large text-beaver text-decoration-none"
                href="/"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
