import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

class SlideShowImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
      styleSlide: "slide-show-image__container__slide-from-left",
    };
  }

  getNewSlideIndex(step) {
    const slideIndex = this.state.slideIndex;
    const numberSlide = this.props.image.length;

    let newSlideIndex = slideIndex + step;

    if (newSlideIndex >= numberSlide) newSlideIndex = 0;
    else if (newSlideIndex < 0) newSlideIndex = numberSlide - 1;

    return newSlideIndex;
  }

  setSlideIndex(index) {
    this.setState({
      slideIndex: index,
    });
  }

  forward() {
    this.setState({
      slideIndex: this.getNewSlideIndex(1),
      styleSlide: "slide-show-image__container__slide-from-right",
    });
  }

  backward() {
    this.setState({
      slideIndex: this.getNewSlideIndex(-1),
      styleSlide: "slide-show-image__container__slide-from-left",
    });
  }

  render() {
    const { image, widthMainImg, heightMainImg, heightChildImg } = this.props;

    return (
      <div id="slide-show-image">
        <div
          className="slide-show-image__container relative mb-4 "
          style={{
            width: `${widthMainImg}`,
            height: `${heightMainImg}`,
          }}
        >
          {image.map((image, index) => {
            return (
              <div className={`${this.state.styleSlide}`} key={index}>
                <img
                  className={`${
                    this.state.slideIndex === index ? "active" : ""
                  } absolute collapse`}
                  style={{
                    width: `${widthMainImg}`,
                    height: `${heightMainImg}`,
                  }}
                  src={image.src}
                  alt=""
                />
              </div>
            );
          })}
          <button
            className="slide-show-image__container__forward absolute top-[50%] right-0 mr-4"
            onClick={() => this.forward()}
          >
            <FontAwesomeIcon icon={faChevronRight} size="2xl" />
          </button>
          <button
            className="slide-show-image__container__backward absolute top-[50%] left-0 ml-4"
            onClick={() => this.backward()}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2xl" />
          </button>
        </div>

        <div className="slide-show-image__img-list flex justify-between">
          {image.map((item, index) => {
            return (
              <img
                key={index}
                className={`cursor-pointer ${
                  this.state.slideIndex === index ? "active" : ""
                }`}
                style={{ height: `${heightChildImg}` }}
                src={item.src}
                alt=""
                onClick={() => this.setSlideIndex(index)}
              ></img>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SlideShowImage;
