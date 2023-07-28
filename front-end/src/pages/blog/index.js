import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import {
  IMG_POST_01,
  IMG_POST_02,
  IMG_POST_03,
  IMG_POST_04,
} from "../../assets";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Input from "../../component/common/input";
import { PATHNAME_LIST } from "../../router/router";

const Blog = () => {
  return (
    <section id="blog">
      <div className="blog__content d-flex">
        <div className="blog__content__left-side-bar me-5">
          <p className="heading-01">Blog</p>

          <div className="blog__content__left-side-bar__search mb-5">
            <Input className="heading-05 w-100" placeholder="Search..." />
            <button className="bg-body border-0">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <ul className="blog__content__left-side-bar__categories list-unstyled">
            <li className="heading-04 mb-3">Categories</li>
            <li className="heading-05 mb-2">
              <Link className="text-dark-silver text-decoration-none">
                Fashion
              </Link>
            </li>
            <li className="heading-05 mb-2">
              <Link className="text-dark-silver text-decoration-none">
                Style
              </Link>
            </li>
            <li className="heading-05 mb-2">
              <Link className="text-dark-silver text-decoration-none">
                Accessories
              </Link>
            </li>
            <li className="heading-05 mb-2">
              <Link className="text-dark-silver text-decoration-none">
                Season
              </Link>
            </li>
          </ul>
        </div>

        <div className="blog__content__blog-post">
          <div className="row mb-5">
            <div className="col">
              <img src={IMG_POST_01} alt="" />
              <p className="body-medium text-dark-silver">
                Fashion - October 8, 2020
              </p>
              <p className="heading-03">Top Trends From Spring</p>
              <p className="heading-05 text-dark-silver">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                faucibus augue, a maximus elit ex vitae libero...
              </p>
              <Link
                className="body-large text-beaver text-decoration-none"
                to={PATHNAME_LIST.BLOG_SINGLE}
              >
                Read More
              </Link>
            </div>

            <div className="col">
              <img src={IMG_POST_02} alt="" />
              <p className="body-medium text-dark-silver">
                Fashion - October 8, 2020
              </p>
              <p className="heading-03">Top Trends From Spring</p>
              <p className="heading-05 text-dark-silver">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                faucibus augue, a maximus elit ex vitae libero...
              </p>
              <Link
                className="body-large text-beaver text-decoration-none"
                to={PATHNAME_LIST.BLOG_SINGLE}
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <img src={IMG_POST_03} alt="" />
              <p className="body-medium text-dark-silver">
                Fashion - October 8, 2020
              </p>
              <p className="heading-03">Top Trends From Spring</p>
              <p className="heading-05 text-dark-silver">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                faucibus augue, a maximus elit ex vitae libero...
              </p>
              <Link
                className="body-large text-beaver text-decoration-none"
                to={PATHNAME_LIST.BLOG_SINGLE}
              >
                Read More
              </Link>
            </div>

            <div className="col">
              <img src={IMG_POST_04} alt="" />
              <p className="body-medium text-dark-silver">
                Fashion - October 8, 2020
              </p>
              <p className="heading-03">Top Trends From Spring</p>
              <p className="heading-05 text-dark-silver">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                faucibus augue, a maximus elit ex vitae libero...
              </p>
              <Link
                className="body-large text-beaver text-decoration-none"
                to={PATHNAME_LIST.BLOG_SINGLE}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
