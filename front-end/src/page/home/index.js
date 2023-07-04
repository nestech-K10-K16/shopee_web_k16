import "./index.css";
import {
  IMG_01,
  IMG_02,
  IMG_03,
  IMG_04,
  IMG_05,
  IMG_06,
  IMG_07,
} from "../../assets";

const Home = () => {
  return (
    <main>
      <section id="home">
        <div className="home__content display-flex-flex-direction-column">
          <div className="home__content__slider">
            <img src={IMG_01} alt="" />
          </div>

          <div className="home__content__product">
            <div className="home__content__product__heading display-flex margin-bottom-4rem">
              <p className="heading-01">Shop The Latest</p>

              <a
                className="heading-04 color-black-text-decoration-none"
                href="/shop"
              >
                View all
              </a>
            </div>

            <div className="home__content__product__row-1 display-flex margin-bottom-4rem">
              <div className="margin-right-2rem">
                <img src={IMG_02} alt="" />
                <p className="heading-03 margin-bottom-0-5rem">Lira Earrings</p>
                <p className="heading-04">$ 20,00</p>
              </div>

              <div className="margin-right-2rem">
                <img src={IMG_03} alt="" />
                <p className="heading-03 margin-bottom-0-5rem">Hal Earrings</p>
                <p className="heading-04">$ 25,00</p>
              </div>

              <div>
                <img src={IMG_04} alt="" />
                <p className="heading-03 margin-bottom-0-5rem">
                  Kaede Hair Pin Set Of 3{" "}
                </p>
                <p className="heading-04">$ 30,00</p>
              </div>
            </div>

            <div className="home__content__product__row-2 display-flex">
              <div className="margin-right-2rem">
                <img src={IMG_05} alt="" />
                <p className="heading-03 margin-bottom-0-5rem">
                  Hair Pin Set of 3
                </p>
                <p className="heading-04">$ 30,00</p>
              </div>

              <div className="margin-right-2rem">
                <img src={IMG_06} alt="" />
                <p className="heading-03 margin-bottom-0-5rem">
                  Plaine Necklace
                </p>
                <p className="heading-04">$ 19,00</p>
              </div>

              <div>
                <img src={IMG_07} alt="" />
                <p className="heading-03 margin-bottom-0-5rem">
                  Yuki Hair Pin Set of 3
                </p>
                <p className="heading-04">$ 29,00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
