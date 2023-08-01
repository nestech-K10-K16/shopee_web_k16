import React from "react";
import { DefaultLayout } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../configs/fontIcon";
import { Link } from "react-router-dom";
import "./blog.css";

const BlogPage = () => {
  return (
    <>
      <div className="Shoppe__blogPage">
        <DefaultLayout>
          <div className="Shoppe__blogPage-container">
            <div className="Shoppe__blogPage-text">
              <h1>Blog</h1>
              <div className="Shoppe__blogPage-search">
                <input type="search" placeholder="Search.." />
                <Link to="/search">
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </Link>
              </div>
              <h3>Categories</h3>
              <h4>Fashion</h4>
              <h4>Style</h4>
              <h4>Accessories</h4>
              <h4>Season</h4>
            </div>
            <div className="Shoppe__blogPage-content"></div>
          </div>
        </DefaultLayout>
      </div>
    </>
  );
};

export default BlogPage;
