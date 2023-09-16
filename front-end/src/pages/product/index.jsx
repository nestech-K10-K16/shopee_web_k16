import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
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
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "redux/reducers/feature/productSlice";

const Product = () => {
  const { productDetail, product } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();

  const [heart, setHeart] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const Items = () => {
    return (
      <div>
        {productDetail?.map((item) => {
          const image = [
            { src: item.src },
            { src: item.src },
            { src: item.src },
            { src: item.src },
          ];

          const icon = [
            "fa-regular fa-envelope",
            "fa-brands fa-facebook-f",
            "fa-brands fa-instagram",
            "fa-brands fa-twitter",
          ];

          return (
            <div className="flex mb-16" key={item.id}>
              <div className="mr-6">
                <SlideShowImage
                  image={image}
                  widthMainImg={"32rem"}
                  heightMainImg={"32rem"}
                  heightChildImg={"7.6rem"}
                />
              </div>

              <div className="product__content__top__product-infomation">
                <p className="heading-02 mb-6">{item.name}</p>
                <p className="heading-04 mb-14">$ {item.price}</p>
                <Rating
                  className="mb-5"
                  name="half-rating"
                  defaultValue={2.5}
                  precision={0.5}
                />
                <p className="heading-05 mb-11">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam placerat, augue a volutpat hendrerit, sapien tortor
                  faucibus augue, a maximus elit ex vitae libero. Sed quis
                  mauris eget arcu facilisis consequat sed eu felis.
                </p>

                <div className="flex text-center mb-[4.6rem]">
                  <AmountInput
                    className="amount-input-01 mr-5"
                    item={item}
                    amount={item.amount}
                  />
                  <Button
                    className="white body-large w-full"
                    onClick={() => dispatch(addProductToCart(item))}
                  >
                    ADD TO CART
                  </Button>
                </div>

                <div className="flex mb-9 gap-x-8">
                  <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    size="xl"
                    style={{ color: heart ? "red" : "black" }}
                    onClick={() => setHeart(!heart)}
                  />

                  <div className="border border-solid border-bright-gray"></div>

                  <div className="flex gap-x-6">
                    {icon?.map((item, index) => {
                      return (
                        <Link key={index}>
                          <FontAwesomeIcon
                            className="text-dark-silver hover:text-black-1"
                            icon={item}
                            size="xl"
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="flex">
                  <p className="heading-05 mr-4">SKU:</p>
                  <p className="heading-05 text-dark-silver">12</p>
                </div>

                <div className="flex">
                  <p className="heading-05 mr-4">Categories:</p>
                  <p className="heading-05 text-dark-silver">Fashion, Style</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const tab = ["Description", "Aditional information", "Reviews(0)"];

  const aditionalInformation = [
    { name: "Weight", info: "0.3kg" },
    { name: "Dimentions", info: "15 x 10 x 1" },
    { name: "Colours", info: "Black, Browns, White" },
    { name: "Material", info: "Metal" },
  ];

  return (
    <section id="product">
      <div className="product__content">
        <Items />

        <Tabs
          className="product__content__information mb-24"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="product__content__information__heading heading-03 flex gap-x-16 mb-5">
            {tab?.map((item, index) => {
              return (
                <Tab
                  className={tabIndex === index ? "tab-active" : ""}
                  key={index}
                >
                  {item}
                </Tab>
              );
            })}
          </TabList>

          <div className="border border-solid border-bright-gray mb-5"></div>

          <TabPanel className="heading-05 text-dark-silver">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor
            odio, in molestie diam bibendum sed.
          </TabPanel>

          <TabPanel className="heading-05">
            <ul className="flex flex-col gap-y-3">
              {aditionalInformation?.map((item, index) => {
                return (
                  <li key={index}>
                    <span>{item.name}: </span>
                    <span className="text-dark-silver">{item.info}</span>
                  </li>
                );
              })}
            </ul>
          </TabPanel>

          <TabPanel className="flex justify-between">
            <div className="heading-03">0 Reviews for lira earings</div>

            <div className="flex flex-col">
              <p className="heading-03 mb-3">Add a Review</p>
              <p className="heading-05 text-dark_silver mb-[2.8rem]">
                Your email address will not be published. Required fields are
                marked *
              </p>

              <form className="flex flex-col gap-y-4 mb-4">
                <TextArea placeholder="Your Review*" />
                <Input placeholder="Enter your name*" />
                <Input placeholder="Enter your Email*" />
              </form>

              <div className="flex mb-4">
                <input className="mr-3" type="checkbox" />
                <p className="heading-05 text-dark-silver">
                  Save my name, email, and website in this browser for the next
                  time I comment
                </p>
              </div>

              <div className="mb-6">
                <p className="body-medium text-dark-silver">Your Rating*</p>
                <Rating
                  className="margin-bottom-2rem"
                  name="half-rating"
                  defaultValue={2.5}
                  precision={0.5}
                />
              </div>

              <div>
                <Button className="black body-large py-4 px-6">submit</Button>
              </div>
            </div>
          </TabPanel>
        </Tabs>

        <div className="product__content__similar-items-list">
          <p className="heading-02 mb-12">Similar Items</p>
          <ListProduct map={product} />
        </div>
      </div>
    </section>
  );
};

export default Product;
