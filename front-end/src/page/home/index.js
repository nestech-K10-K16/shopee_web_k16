import "./index.css";
import {
  IMG_PRODUCT_01,
  IMG_PRODUCT_02,
  IMG_PRODUCT_03,
  IMG_PRODUCT_04,
  IMG_PRODUCT_05,
  IMG_PRODUCT_06,
  IMG_PRODUCT_07,
} from "../../assets";
import { PATH_NAME } from "../../constants/common";

const Home = () => {
  return (
    <main>
      <section id="home">
        <div className="home__content">
          <div className="home__content__slider margin-bottom-4rem">
            <img src={IMG_PRODUCT_01} alt="" />
          </div>

          <div className="home__content__product">
            <div className="home__content__product__heading d-flex justify-content-between align-items-center margin-bottom-2rem">
              <p className="heading-01 m-0">Shop The Latest</p>

              <a
                className="heading-04 text-black text-decoration-none"
                href="/shop"
              >
                View all
              </a>
            </div>

            <div className="home__content__product__row row margin-bottom-2rem">
              <div className="col text-black text-decoration-none">
                <div className="position-relative margin-bottom-0-5rem">
                  <a href={PATH_NAME.PRODUCT}>
                    <img className="w-100" src={IMG_PRODUCT_02} alt="" />
                  </a>
                  <button className="home__content__product__row__add-to-cart body-large w-100">
                    Add to cart
                  </button>
                </div>
                <p className="heading-03 margin-bottom-0-5rem">Lira Earrings</p>
                <p className="heading-04 text-beaver">
                  $ 20,00
                </p>
              </div>

              <div className="col text-black text-decoration-none">
                <div className="position-relative margin-bottom-0-5rem">
                  <a href={PATH_NAME.PRODUCT}>
                    <img className="w-100" src={IMG_PRODUCT_03} alt="" />
                  </a>
                  <button className="home__content__product__row__add-to-cart body-large w-100">
                    Add to cart
                  </button>
                </div>
                <p className="heading-03 margin-bottom-0-5rem">Hal Earrings</p>
                <p className="heading-04 text-beaver">$ 25,00</p>
              </div>

              <div className="col text-black text-decoration-none">
                <div className="position-relative margin-bottom-0-5rem">
                  <a href={PATH_NAME.PRODUCT}>
                    <img className="w-100" src={IMG_PRODUCT_04} alt="" />
                  </a>
                  <button className="home__content__product__row__add-to-cart body-large w-100">
                    Add to cart
                  </button>
                </div>
                <p className="heading-03 margin-bottom-0-5rem">
                  Kaede Hair Pin Set Of 3
                </p>
                <p className="heading-04 text-beaver">$ 30,00</p>
              </div>
            </div>

            <div className="home__content__product__row row">
              <div className="col text-black text-decoration-none">
                <div className="position-relative margin-bottom-0-5rem">
                  <a href={PATH_NAME.PRODUCT}>
                    <img className="w-100" src={IMG_PRODUCT_05} alt="" />
                  </a>
                  <button className="home__content__product__row__add-to-cart body-large w-100">
                    Add to cart
                  </button>
                </div>
                <p className="heading-03 margin-bottom-0-5rem">
                  Hair Pin Set of 3
                </p>
                <p className="heading-04 text-beaver">$ 30,00</p>
              </div>

              <div className="col text-black text-decoration-none">
                <div className="position-relative margin-bottom-0-5rem">
                  <a href={PATH_NAME.PRODUCT}>
                    <img className="w-100" src={IMG_PRODUCT_06} alt="" />
                  </a>
                  <button className="home__content__product__row__add-to-cart body-large w-100">
                    Add to cart
                  </button>
                </div>
                <p className="heading-03 margin-bottom-0-5rem">
                  Plaine Necklace
                </p>
                <p className="heading-04 text-beaver">$ 19,00</p>
              </div>

              <div className="col text-black text-decoration-none">
                <div className="position-relative margin-bottom-0-5rem">
                  <a href={PATH_NAME.PRODUCT}>
                    <img className="w-100" src={IMG_PRODUCT_07} alt="" />
                  </a>
                  <button className="home__content__product__row__add-to-cart body-large w-100">
                    Add to cart
                  </button>
                </div>
                <p className="heading-03 margin-bottom-0-5rem">
                  Yuki Hair Pin Set of 3
                </p>
                <p className="heading-04 text-beaver">$ 29,00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
