import { React, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import {
  IMG_PRODUCT_01,
  IMG_PRODUCT_02,
  IMG_PRODUCT_03,
  IMG_PRODUCT_04,
} from "assets";
import {
  Input,
  Button,
  AmountInput,
  TextArea,
  ListProduct,
  SlideShowImage,
} from "component/common";
import Rating from "@mui/material/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { PATHNAME_LIST } from "router/router";

const Product = () => {
  const image = [
    { src: IMG_PRODUCT_01 },
    { src: IMG_PRODUCT_02 },
    { src: IMG_PRODUCT_03 },
    { src: IMG_PRODUCT_04 },
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
  ];

  const [heart, setHeart] = useState(false);

  const onClickHeart = () => {
    setHeart(!heart);
  };

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section id="product">
      <div className="product__content">
        <div className="product__content__top flex mb-24">
          <div className="mr-6">
            <SlideShowImage
              image={image}
              widthMainImg={"32rem"}
              heightMainImg={"32rem"}
              heightChildImg={"7.5rem"}
            />
          </div>

          <div className="product__content__top__product-infomation">
            <p className="heading-02 mb-6">Lira Earrings</p>
            <p className="heading-04 mb-14">$ 20,00</p>
            <Rating
              className="mb-5"
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
            />
            <p className="heading-05 mb-11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis.
            </p>

            <div className="flex text-center mb-[4.6rem]">
              <AmountInput className="mr-5" />
              <Button className="button--secondary body-large w-full">
                ADD TO CART
              </Button>
            </div>

            <div className="flex mb-9 gap-x-8">
              <FontAwesomeIcon
                icon={faHeart}
                size="xl"
                style={{ color: heart ? "red" : "black" }}
                onClick={onClickHeart}
              />

              <div className="border border-solid border-bright_gray"></div>

              <div className="flex gap-x-6">
                <Link>
                  <FontAwesomeIcon icon={faEnvelope} size="xl" />
                </Link>

                <Link>
                  <FontAwesomeIcon icon={faFacebookF} size="xl" />
                </Link>

                <Link>
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </Link>

                <Link>
                  <FontAwesomeIcon icon={faTwitter} size="xl" />
                </Link>
              </div>
            </div>

            <div className="flex">
              <p className="heading-05 mr-4">SKU:</p>
              <p className="heading-05 text-dark_silver">12</p>
            </div>

            <div className="flex">
              <p className="heading-05 mr-4">Categories:</p>
              <p className="heading-05 text-dark_silver">Fashion, Style</p>
            </div>
          </div>
        </div>

        <Tabs
          className="product__content__information mb-24"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="product__content__information__heading heading-03 flex gap-x-16 mb-5">
            <Tab className={tabIndex === 0 ? "tab-active" : ""}>
              Description
            </Tab>
            <Tab className={tabIndex === 1 ? "tab-active" : ""}>
              Aditional information
            </Tab>
            <Tab className={tabIndex === 2 ? "tab-active" : ""}>Reviews(0)</Tab>
          </TabList>

          <div className="border border-solid border-bright_gray mb-5"></div>

          <TabPanel className="heading-05 text-dark_silver">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor
            odio, in molestie diam bibendum sed.
          </TabPanel>

          <TabPanel className="heading-05">
            <ul className="flex flex-col gap-y-3">
              <li>
                <span>Weight: </span>
                <span className="text-dark_silver">0.3kg</span>
              </li>
              <li>
                <span>Dimentions: </span>
                <span className="text-dark_silver">15 x 10 x 1</span>
              </li>
              <li>
                <span>Colours: </span>
                <span className="text-dark_silver">Black, Browns, White</span>
              </li>
              <li>
                <span>Material: </span>
                <span className="text-dark_silver">Metal</span>
              </li>
            </ul>
          </TabPanel>

          <TabPanel className="flex justify-between">
            <div></div>

            <div className="flex flex-col">
              <p className="heading-03 mb-3">Add a Review</p>
              <p className="heading-05 text-dark_silver mb-[2.8rem]">
                Your email address will not be published. Required fields are
                marked *
              </p>

              <form className="flex flex-col gap-y-[2.8rem] mb-[1.5rem]">
                <TextArea placeholder="Your Review*" />
                <Input placeholder="Enter your name*" />
                <Input placeholder="Enter your Email*" />
              </form>

              <div className="flex mb-4">
                <input className="mr-3" type="checkbox" />
                <p className="heading-05 text-dark_silver">
                  Save my name, email, and website in this browser for the next
                  time I comment
                </p>
              </div>

              <div className="mb-12">
                <p className="body-medium text-dark_silver">Your Rating*</p>
                <Rating
                  className="margin-bottom-2rem"
                  name="half-rating"
                  defaultValue={2.5}
                  precision={0.5}
                />
              </div>

              <div>
                <Button className="body-large py-4 px-6">submit</Button>
              </div>
            </div>
          </TabPanel>
        </Tabs>

        <div className="product__content__similar-items-list">
          <p className="heading-02 mb-[4.9rem]">Similar Items</p>

          <ListProduct listProduct={product} />
        </div>
      </div>
    </section>
  );
};

export default Product;
