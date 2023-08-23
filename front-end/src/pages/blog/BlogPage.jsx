import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BrandStuff from "components/common/brandStuff/BrandStuff";
import "configs/fontIcon";
import { Link } from "react-router-dom";
import { Blog01, Blog02, Blog03, Blog04 } from "./import";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { useTabs } from "hook/useTabs/useTabs";
import "./blog.css";

const BlogPage = () => {
  const { tabIndex, activeTabs, handleChange, userChange, setTabIndex } =
    useTabs(0);

  return (
    <div className="Shoppe__blogPage-container">
      <div className="Shoppe__blogPage-text">
        <h1>Blog</h1>
        <div className="Shoppe__blogPage-search">
          <input type="search" placeholder="Search.." />
          <Link to="/search">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </Link>
        </div>
        <Tabs
          data-selected-index={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList data-selected-index={tabIndex} onSelect={handleChange}>
            <div className="Shoppe__blogPage-convert">
              <Tab
                className={`Shoppe__blogPage-tab ${
                  activeTabs[0] ? "active-tab" : ""
                }`}
                onClick={() => userChange(0)}
              >
                Categories
              </Tab>
              <Tab
                className={`Shoppe__blogPage-tab ${
                  activeTabs[1] ? "active-tab" : ""
                }`}
                onClick={() => userChange(1)}
              >
                Fashion
              </Tab>
              <Tab
                className={`Shoppe__blogPage-tab ${
                  activeTabs[2] ? "active-tab" : ""
                }`}
                onClick={() => userChange(2)}
              >
                Style
              </Tab>
              <Tab
                className={`Shoppe__blogPage-tab ${
                  activeTabs[3] ? "active-tab" : ""
                }`}
                onClick={() => userChange(3)}
              >
                Accessories
              </Tab>
              <Tab
                className={`Shoppe__blogPage-tab ${
                  activeTabs[4] ? "active-tab" : ""
                }`}
                onClick={() => userChange(4)}
              >
                Season
              </Tab>
            </div>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
      <div className="Shoppe__blogPage-content">
        <div className="Shoppe__blogPage-title">
          <div className="update">
            <BrandStuff
              imgUrl={Blog01}
              text_01="Fashion - October 8, 2020"
              text_02="Top Trends From Spring"
              text_03="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... "
              text_04="Read More"
            />
          </div>
        </div>
        <div className="Shoppe__blogPage-title">
          <div className="update">
            <BrandStuff
              imgUrl={Blog02}
              text_01="Fashion - October 8, 2020"
              text_02="Top Trends From Spring"
              text_03="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... "
              text_04="Read More"
            />
          </div>
        </div>
        <div className="Shoppe__blogPage-title">
          <div className="update">
            <BrandStuff
              imgUrl={Blog03}
              text_01="Fashion - October 8, 2020"
              text_02="Top Trends From Spring"
              text_03="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... "
              text_04="Read More"
            />
          </div>
        </div>
        <div className="Shoppe__blogPage-title">
          <div className="update">
            <BrandStuff
              imgUrl={Blog04}
              text_01="Fashion - October 8, 2020"
              text_02="Top Trends From Spring"
              text_03="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... "
              text_04="Read More"
            />
          </div>
        </div>

        <div className="Shoppe__blogPage-button">
          <button>1</button>
          <button>2</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
