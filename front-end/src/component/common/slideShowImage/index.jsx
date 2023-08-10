import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import {
  IMG_POST_01,
  IMG_PRODUCT_01,
  IMG_PRODUCT_02,
  IMG_PRODUCT_03,
  IMG_PRODUCT_04,
  IMG_PRODUCT_05,
} from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

class SlideShowImage extends React.Component {
  state = {
    slideIndex: 0,

    mainImg: [{ url: "" }],

    listImage: [
      {
        id: "1",
        url: IMG_POST_01,
      },
      {
        id: "2",
        url: IMG_PRODUCT_01,
      },
      {
        id: "3",
        url: IMG_PRODUCT_02,
      },
      {
        id: "4",
        url: IMG_PRODUCT_03,
      },
      {
        id: "5",
        url: IMG_PRODUCT_04,
      },
      {
        id: "6",
        url: IMG_PRODUCT_05,
      },
      {
        id: "7",
        url: IMG_PRODUCT_05,
      },
    ],
  };

  setSlideIndex(index) {
    this.setState({ slideIndex: index });
  }

  render() {
    let { listImage, mainImg } = this.state;

    return (
      <div>
        {mainImg.map((item, index) => {
          return (
            <div id="slider" key={index}>
              <div className="slider-main">
                <img
                  className="slider-main__image-main"
                  src={IMG_PRODUCT_01}
                  alt=""
                />
                <button className="slider-main__prev">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    size="2xl"
                    onClick={listImage.length + 1}
                  />
                </button>
                <button className="slider-main__next">
                  <FontAwesomeIcon icon={faChevronRight} size="2xl" />
                </button>
              </div>
            </div>
          );
        })}

        <div className="flex justify-between">
          {listImage.map((item, index) => {
            return (
              <div>
                <img
                  key={index}
                  className="slider-image-list"
                  src={item.url}
                  alt=""
                  onClick={() => this.setSlideIndex(index)}
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SlideShowImage;
