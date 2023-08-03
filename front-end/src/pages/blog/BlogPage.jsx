import React, { useState } from "react";
import { DefaultLayout } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BrandStuff from "components/common/brandStuff/BrandStuff";
import "configs/fontIcon";
import { Link } from "react-router-dom";
import { Blog01, Blog02, Blog03, Blog04 } from "./import";
import { Tabs, TabList, Tab } from "react-tabs";
import "./blog.css";

const BlogPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (index) => {
    setTabIndex(index);
  };

  const [whiteActive, setWhiteActive] = useState(true);
  const [blackActive, setBlackActive] = useState(false);
  const [blackActive02, setBlackActive02] = useState(false);
  const [blackActive03, setBlackActive03] = useState(false);
  const [blackActive04, setBlackActive04] = useState(false);

  const userChange = (index) => {
    setTabIndex(index);
    if (index === 0) {
      setWhiteActive(true);
      setBlackActive(false);
      setBlackActive02(false);
      setBlackActive03(false);
      setBlackActive04(false);
    } else if (index === 1) {
      setWhiteActive(false);
      setBlackActive(true);
      setBlackActive02(false);
      setBlackActive03(false);
      setBlackActive04(false);
    } else if (index === 2) {
      setWhiteActive(false);
      setBlackActive(false);
      setBlackActive02(true);
      setBlackActive03(false);
      setBlackActive04(false);
    } else if (index === 3) {
      setWhiteActive(false);
      setBlackActive(false);
      setBlackActive02(false);
      setBlackActive03(true);
      setBlackActive04(false);
    } else if (index === 4) {
      setWhiteActive(false);
      setBlackActive(false);
      setBlackActive02(false);
      setBlackActive03(false);
      setBlackActive04(true);
    }
  };

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
              <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
              >
                <TabList selectedIndex={tabIndex} onSelect={handleChange}>
                  <div className="Shoppe__blogPage-convert">
                    <Tab
                      className={`Shoppe__blogPage-white ${
                        whiteActive ? "active-tab" : ""
                      }`}
                      onClick={() => userChange(0)}
                    >
                      Categories
                    </Tab>
                    <Tab
                      className={`Shoppe__blogPage-black ${
                        blackActive ? "active-tab" : ""
                      }`}
                      onClick={() => userChange(1)}
                    >
                      Fashion
                    </Tab>
                    <Tab
                      className={`Shoppe__blogPage-black_02 ${
                        blackActive02 ? "active-tab" : ""
                      }`}
                      onClick={() => userChange(2)}
                    >
                      Style
                    </Tab>
                    <Tab
                      className={`Shoppe__blogPage-black_03 ${
                        blackActive03 ? "active-tab" : ""
                      }`}
                      onClick={() => userChange(3)}
                    >
                      Accessories
                    </Tab>
                    <Tab
                      className={`Shoppe__blogPage-black_04 ${
                        blackActive04 ? "active-tab" : ""
                      }`}
                      onClick={() => userChange(4)}
                    >
                      Season
                    </Tab>
                  </div>
                </TabList>
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
        </DefaultLayout>
      </div>
    </>
  );
};

export default BlogPage;
