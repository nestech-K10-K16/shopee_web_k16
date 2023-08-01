import React from "react";
import { DefaultLayout } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BrandStuff from "components/common/brandStuff/BrandStuff";
import "configs/fontIcon";
import { Link } from "react-router-dom";
import { Blog01, Blog02, Blog03, Blog04 } from "assets";
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
            <div className="Shoppe__blogPage-content">
              <div className="Shoppe__blogPage-text">
                <div className="update">
                  <Blog01 />
                </div>

                <BrandStuff
                  text_01="Fashion - October 8, 2020"
                  text_02="Top Trends From Spring"
                  text_03="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... "
                  text_04="Read More"
                />
              </div>
              <div className="Shoppe__blogPage-text">
                <div className="update">
                  <Blog02 />
                </div>

                <BrandStuff
                  text_01="Fashion - October 8, 2020"
                  text_02="Top Trends From Spring"
                  text_03="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... "
                  text_04="Read More"
                />
              </div>
              <div className="Shoppe__blogPage-text">
                <div className="update">
                  <Blog03 />
                </div>

                <BrandStuff
                  text_01="Fashion - October 8, 2020"
                  text_02="Top Trends From Spring"
                  text_03="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... "
                  text_04="Read More"
                />
              </div>
              <div className="Shoppe__blogPage-text">
                <div className="update">
                  <Blog04 />
                </div>

                <BrandStuff
                  text_01="Fashion - October 8, 2020"
                  text_02="Top Trends From Spring"
                  text_03="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... "
                  text_04="Read More"
                />
              </div>
            </div>
          </div>
        </DefaultLayout>
      </div>
    </>
  );
};

export default BlogPage;
