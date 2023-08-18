import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { PATHNAME_LIST } from "router/router";
import { SlideShowImage, ListProduct } from "component/common";
import {
  IMG_BANNER,
  IMG_PRODUCT_01,
  IMG_PRODUCT_02,
  IMG_PRODUCT_03,
  IMG_PRODUCT_04,
  IMG_PRODUCT_05,
  IMG_PRODUCT_06,
} from "assets";

const Home = () => {
  const image = [
    { src: IMG_BANNER },
    { src: IMG_PRODUCT_01 },
    { src: IMG_PRODUCT_02 },
    { src: IMG_PRODUCT_03 },
    { src: IMG_PRODUCT_04 },
    { src: IMG_PRODUCT_05 },
    { src: IMG_PRODUCT_06 },
  ];

  const product = [
    {
      name: "Lira Earrings",
      price: 20,
      src: IMG_PRODUCT_01,
      to: PATHNAME_LIST.PRODUCT,
    },
    {
      name: "Hal Earrings",
      price: 25,
      src: IMG_PRODUCT_02,
      to: PATHNAME_LIST.PRODUCT,
    },
    {
      name: "Kaede Hair Pin Set Of 3 ",
      price: 30,
      src: IMG_PRODUCT_03,
      to: PATHNAME_LIST.PRODUCT,
    },
    {
      name: "Hair Pin Set of 3",
      price: 30,
      src: IMG_PRODUCT_04,
      to: PATHNAME_LIST.PRODUCT,
    },
    {
      name: "Plaine Necklace",
      price: 19,
      src: IMG_PRODUCT_05,
      to: PATHNAME_LIST.PRODUCT,
    },
    {
      name: "Yuki Hair Pin Set of 3",
      price: 2,
      src: IMG_PRODUCT_06,
      to: PATHNAME_LIST.PRODUCT,
    },
  ];

  return (
    <section id="home">
      <div className="home__content">
        <div className="home__content__banner mb-8">
          <SlideShowImage
            image={image}
            heightMainImg={"632px"}
            widthMainImg={"1221px"}
            heightChildImg={"9rem"}
          ></SlideShowImage>
        </div>

        <div className="home__content__product">
          <div className="flex justify-between items-center mb-4">
            <p className="heading-01">Shop The Latest</p>
            <Link
              className="heading-04 text-beaver hover:text-black"
              to={PATHNAME_LIST.SHOP}
            >
              View all
            </Link>
          </div>

          <div>
            <ListProduct listProduct={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
