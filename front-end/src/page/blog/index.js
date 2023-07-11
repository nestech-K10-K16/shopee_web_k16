import React from "react";
import "./index.css";
import {
  IMG_POST_01,
  IMG_POST_02,
  IMG_POST_03,
  IMG_POST_04,
} from "../../assets";

const Blog = () => {
  return (
    <section id="blog">
      <div className="blog__content d-flex">
        <div className="blog__content__left-side-bar">
          <p className="heading-01 margin-bottom-2rem">Blog</p>

          <div className="blog__content__left-side-bar__search">
            <input
              className="heading-05 border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem w-100 margin-bottom-4rem"
              placeholder="Search..."
            ></input>

            <button className="bg-body border-0">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <ul className="blog__content__left-side-bar__categories list-unstyled">
            <li className="heading-04 margin-bottom-1rem">Categories</li>
            <li className="heading-05 margin-bottom-0-5rem">
              <a className="text-black text-decoration-none" href="#">
                Fashion
              </a>
            </li>

            <li className="heading-05 margin-bottom-0-5rem">
              <a className="text-black text-decoration-none" href="#">
                Style
              </a>
            </li>

            <li className="heading-05 margin-bottom-0-5rem">
              <a className="text-black text-decoration-none" href="#">
                Accessories
              </a>
            </li>

            <li className="heading-05 margin-bottom-0-5rem">
              <a className="text-black text-decoration-none" href="#">
                Season
              </a>
            </li>
          </ul>
        </div>

        <div className="blog__content__blog-post pt-5 ms-5">
          <div className="row mb-5">
            <a className="text-black text-decoration-none col " href="#">
              <img src={IMG_POST_01} alt="" />

              <p className="body-medium text-dark-silver">
                Fashion - October 8, 2020
              </p>

              <p className="heading-03">Top Trends From Spring</p>

              <p className="heading-05 text-dark-silver">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                faucibus augue, a maximus elit ex vitae libero...{" "}
              </p>

              <p className="body-large text-beaver">Read More</p>
            </a>

            <a className="text-black text-decoration-none col" href="#">
              <img src={IMG_POST_02} alt="" />

              <p className="body-medium text-dark-silver">
                Fashion - October 8, 2020
              </p>

              <p className="heading-03">Top Trends From Spring</p>

              <p className="heading-05 text-dark-silver">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                faucibus augue, a maximus elit ex vitae libero...{" "}
              </p>

              <p className="body-large text-beaver">Read More</p>
            </a>
          </div>

          <div className="row">
            <a className="text-black text-decoration-none col" href="#">
              <img src={IMG_POST_03} alt="" />

              <p className="body-medium text-dark-silver">
                Fashion - October 8, 2020
              </p>

              <p className="heading-03">Top Trends From Spring</p>

              <p className="heading-05 text-dark-silver">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                faucibus augue, a maximus elit ex vitae libero...{" "}
              </p>

              <p className="body-large text-beaver">Read More</p>
            </a>

            <a className="text-black text-decoration-none col" href="#">
              <img src={IMG_POST_04} alt="" />

              <p className="body-medium text-dark-silver">
                Fashion - October 8, 2020
              </p>

              <p className="heading-03">Top Trends From Spring</p>

              <p className="heading-05 text-dark-silver">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                faucibus augue, a maximus elit ex vitae libero...{" "}
              </p>

              <p className="body-large text-beaver">Read More</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
