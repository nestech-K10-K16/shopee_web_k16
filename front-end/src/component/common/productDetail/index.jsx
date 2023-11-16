import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { refreshProductDetail } from "redux/reducers/productSlice";
import {
  Button,
  Heart,
  InputAmountObject,
  SlideShowImage,
} from "component/common";
import { TYPE_BUTTON } from "constants/common";
import { createCart } from "redux/createAsyncThunk/cartThunk";

const ProductDetail = () => {
  const { productDetail } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    dispatch(refreshProductDetail());
  }, [dispatch]);

  useEffect(() => {
    setAmount(productDetail.Amount);
  }, [productDetail]);

  const { IdProduct, Name, Price, Image } = productDetail;
  const image = [
    { src: Image },
    { src: Image },
    { src: Image },
    { src: Image },
  ];

  const icon = [
    "fa-regular fa-envelope",
    "fa-brands fa-facebook-f",
    "fa-brands fa-instagram",
    "fa-brands fa-twitter",
  ];

  return (
    <div className="flex mb-16">
      <div className="product__content__left-side mr-6">
        {Image && (
          <SlideShowImage
            image={image}
            widthMainImg={"32rem"}
            heightMainImg={"32rem"}
            heightChildImg={"7.6rem"}
          />
        )}
      </div>

      <div className="product__content__right-side">
        <p className="heading-02 mb-6">{Name}</p>
        <p className="heading-04 mb-14">$ {Price}</p>
        <Rating
          className="mb-5"
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
        />
        <p className="heading-05 mb-11">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis.
        </p>

        <div className="flex text-center mb-[4.6rem]">
          <InputAmountObject
            className="amount-input-01 mr-5"
            value={amount}
            onChange={setAmount}
          />
          <Button
            id="button"
            className="style-02 body-large w-full"
            typeButton={TYPE_BUTTON.BUTTON}
            onClick={() =>
              dispatch(
                createCart({
                  IdProduct: IdProduct,
                  Amount: amount,
                  IntoMoney: Price,
                })
              )
            }
          >
            ADD TO CART
          </Button>
        </div>

        <div className="flex mb-9 gap-x-8">
          <Heart />

          <div className="border border-solid border-bright-gray"></div>

          <div className="flex gap-x-6">
            {icon.map((item, index) => {
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
};

export default ProductDetail;
