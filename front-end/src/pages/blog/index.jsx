import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { IMG_POST_01, IMG_POST_02, IMG_POST_03, IMG_POST_04 } from "assets";
import { PATHNAME_LIST } from "router/router";
import { Input } from "component/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

const Blog = () => {
  const categories = ["Fashion", "Style", "Accessories", "Season"];
  $(function () {
    $(".blog__content__left-side-bar__categories a").click(function () {
      $(".blog__content__left-side-bar__categories a").removeClass("active");
      $(this).addClass("active");
    });
  });

  return (
    <section id="blog">
      <div className="blog__content flex">
        <div className="blog__content__left-side-bar w-96 mr-8">
          <p className="heading-01 mb-4">Blog</p>

          <div className="blog__content__left-side-bar__search mb-10">
            <Input className="heading-05 w-full pr-4" placeholder="Search..." />
            <button className="bg-body border-0 -ml-4">
              <FontAwesomeIcon icon="search" />
            </button>
          </div>

          <ul className="blog__content__left-side-bar__categories flex flex-col gap-y-3">
            <li className="heading-04">Categories</li>
            {categories?.map((item, index) => {
              return (
                <li className="heading-05" key={index}>
                  <Link>{item}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="blog__content__blog-post">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img className="mb-2" src={IMG_POST_01} alt="" />
              <p className="body-medium text-dark_silver mb-2">
                Fashion - October 8, 2020
              </p>
              <p className="heading-03">Top Trends From Spring</p>
              <p className="heading-05 text-dark_silver mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                faucibus augue, a maximus elit ex vitae libero...
              </p>
              <Link className="body-large" to={PATHNAME_LIST.BLOG_SINGLE}>
                Read More
              </Link>
            </div>

            <div>
              <img className="mb-2" src={IMG_POST_02} alt="" />
              <p className="body-medium text-dark_silver mb-2">
                Fashion - October 8, 2020
              </p>
              <p className="heading-03">Top Trends From Spring</p>
              <p className="heading-05 text-dark_silver mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                faucibus augue, a maximus elit ex vitae libero...
              </p>
              <Link className="body-large" to={PATHNAME_LIST.BLOG_SINGLE}>
                Read More
              </Link>
            </div>

            <div>
              <img className="mb-2" src={IMG_POST_03} alt="" />
              <p className="body-medium text-dark_silver mb-2">
                Fashion - October 8, 2020
              </p>
              <p className="heading-03">Top Trends From Spring</p>
              <p className="heading-05 text-dark_silver mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                faucibus augue, a maximus elit ex vitae libero...
              </p>
              <Link className="body-large" to={PATHNAME_LIST.BLOG_SINGLE}>
                Read More
              </Link>
            </div>

            <div>
              <img className="mb-2" src={IMG_POST_04} alt="" />
              <p className="body-medium text-dark_silver mb-2">
                Fashion - October 8, 2020
              </p>
              <p className="heading-03">Top Trends From Spring</p>
              <p className="heading-05 text-dark_silver mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                faucibus augue, a maximus elit ex vitae libero...
              </p>
              <Link className="body-large" to={PATHNAME_LIST.BLOG_SINGLE}>
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
