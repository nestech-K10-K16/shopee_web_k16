import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SlideShowImage = (props) => {
  const { image, widthMainImg, heightMainImg, heightChildImg } = props;
  const [slideIndex, setSlideIndex] = useState(0);
  const [animation, setAnimation] = useState("slide-from-left");

  const getNewSlideIndex = (step) => {
    var newSlideIndex = slideIndex + step;

    if (newSlideIndex >= image.length) {
      newSlideIndex = 0;
    } else if (newSlideIndex < 0) {
      newSlideIndex = image.length - 1;
    }

    return newSlideIndex;
  };

  const fordwardOnClick = () => {
    setSlideIndex(getNewSlideIndex(1));
    setAnimation("slide-from-right");
  };

  const backwardOnClick = () => {
    setSlideIndex(getNewSlideIndex(-1));
    setAnimation("slide-from-left");
  };

  return (
    <div id="slide-show-image">
      <div
        className="slide-show-image__container relative mb-4 "
        style={{
          width: `${widthMainImg}`,
          height: `${heightMainImg}`,
        }}
      >
        {image.map((item, index) => {
          return (
            <div
              className={`slide-show-image__container--${animation}`}
              key={index}
            >
              <img
                className={`${
                  slideIndex === index ? "active" : ""
                } absolute collapse`}
                style={{
                  width: `${widthMainImg}`,
                  height: `${heightMainImg}`,
                }}
                src={item.src}
                alt=""
              />
              <p className="heading-02 absolute top-0 left-2">
                {slideIndex + 1} / {image.length}
              </p>
            </div>
          );
        })}
        <button
          className="slide-show-image__container--forward absolute top-[50%] right-0 mr-4"
          onClick={() => fordwardOnClick()}
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" size="2xl" />
        </button>
        <button
          className="slide-show-image__container--backward absolute top-[50%] left-0 ml-4"
          onClick={() => backwardOnClick()}
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" size="2xl" />
        </button>
      </div>

      <div className="slide-show-image__img-list flex justify-between">
        {image.map((item, index) => {
          return (
            <img
              key={index}
              className={`${
                slideIndex === index ? "active" : ""
              } cursor-pointer`}
              style={{ height: `${heightChildImg}` }}
              src={item.src}
              alt=""
              onClick={() => setSlideIndex(index)}
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default SlideShowImage;
