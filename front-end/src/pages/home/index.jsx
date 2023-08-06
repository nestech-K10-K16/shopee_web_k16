import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import {
  IMG_PRODUCT_01,
  IMG_PRODUCT_02,
  IMG_PRODUCT_03,
  IMG_PRODUCT_04,
  IMG_PRODUCT_05,
  IMG_PRODUCT_06,
  IMG_PRODUCT_07,
} from "assets";
import { PATHNAME_LIST } from "router/router";
import { ProductStyle } from "component/common";

const Home = () => {
  return (
    <section id="home">
      <div className="home__content">
        <div className="home__content__slider mb-8">
          <img src={IMG_PRODUCT_01} alt=""/>
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

          <div className="grid md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-4">
            <div>
              <ProductStyle
                className="body-large"
                link={PATHNAME_LIST.PRODUCT}
                src={IMG_PRODUCT_02}
              />
              <p className="heading-03 mb-2">Lira Earrings</p>
              <p className="heading-04 text-beaver">$ 20,00</p>
            </div>

            <div>
              <ProductStyle
                className="body-large"
                link={PATHNAME_LIST.PRODUCT}
                src={IMG_PRODUCT_03}
              />
              <p className="heading-03 mb-2">Hal Earrings</p>
              <p className="heading-04 text-beaver">$ 25,00</p>
            </div>

            <div>
              <ProductStyle
                className="body-large"
                link={PATHNAME_LIST.PRODUCT}
                src={IMG_PRODUCT_04}
              />
              <p className="heading-03 mb-2">Kaede Hair Pin Set Of 3</p>
              <p className="heading-04 text-beaver">$ 30,00</p>
            </div>

            <div>
              <ProductStyle
                className="body-large"
                link={PATHNAME_LIST.PRODUCT}
                src={IMG_PRODUCT_05}
              />
              <p className="heading-03 mb-2">Hair Pin Set of 3</p>
              <p className="heading-04 text-beaver">$ 30,00</p>
            </div>

            <div>
              <ProductStyle
                className="body-large"
                link={PATHNAME_LIST.PRODUCT}
                src={IMG_PRODUCT_06}
              />
              <p className="heading-03 mb-2">Plaine Necklace</p>
              <p className="heading-04 text-beaver">$ 19,00</p>
            </div>

            <div>
              <ProductStyle
                className="body-large"
                link={PATHNAME_LIST.PRODUCT}
                src={IMG_PRODUCT_07}
              />
              <p className="heading-03 mb-2">Yuki Hair Pin Set of 3</p>
              <p className="heading-04 text-beaver">$ 29,00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
