import React from "react";
import { DefaultLayout, Jewelry } from "../../components";
import introduce from "../../assets/img__home-introduce.jpg";
import { home01, home02, home03, home04, home05, home06 } from "./import";
import "./style.css";

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <div className="shoppe__home ">
          <div className="shoppe__home-img">
            <img src={introduce} alt="introduce" />
            <div className="shoppe__home-slider">
              <div className="ellipse-10"></div>

              <div className="ellipse-11"></div>

              <div className="ellipse-12"></div>

              <div className="ellipse-13"></div>

              <div className="ellipse-14"></div>
            </div>
            <div className="shoppe__home-content">
              <h1>Gold big hoops</h1>
              <h2>$ 68,00</h2>
              <button>View Product</button>
            </div>
          </div>

          <div className="Shoppe__home-title">
            <h1>Shop The Latest</h1>
            <h4>View All</h4>
          </div>
          <div className="Shoppe__home-container">
            <div className="Shoppe__home-container_group">
              <Jewelry imgUrl={home01} text="Lira Earrings" dollar="$ 20,00" />
              <Jewelry imgUrl={home02} text="Hal Earrings" dollar="$ 25,00" />
              <Jewelry
                imgUrl={home03}
                text="Kaede Hair Pin Set Of 3 "
                dollar="$ 30,00"
              />
              <Jewelry
                imgUrl={home04}
                text="Hair Pin Set of 3"
                dollar="$ 30,00"
              />
              <Jewelry
                imgUrl={home05}
                text="Plaine Necklace"
                dollar="$ 19,00"
              />
              <Jewelry
                imgUrl={home06}
                text="Yuki Hair Pin Set of 3"
                dollar="$ 29,00"
              />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Home;
