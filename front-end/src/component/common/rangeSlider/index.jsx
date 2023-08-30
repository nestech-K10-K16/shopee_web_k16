import React, { useState } from "react";
import "./index.scss";
import ReactSlider from "react-slider";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TYPE_REDUX } from "constants/common";

const RangeSlider = () => {
  const product = useSelector((state) => state.product);
  const productPrice = product.map((item) => item.price);
  const dispatch = useDispatch();

  const min = Math.min.apply(null, productPrice);
  const max = Math.max.apply(null, productPrice);
  const [slider, setSlider] = useState([min, max]);

  const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 2px;
  `;

  const StyledThumb = styled.div`
    padding: 6px;
    text-align: center;
    background-color: #000;
    color: #fff;
    cursor: grab;
    margin-top: -15px;
    outline: none;
    font-size: 15px;
    border-radius: 50%;
  `;

  const Thumb = (props, state) => (
    <StyledThumb {...props}>{state.valueNow}</StyledThumb>
  );

  const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${(props) =>
      props.index === 2 ? "#ddd" : props.index === 1 ? "black" : "#ddd"};
  `;

  const Track = (props, state) => (
    <StyledTrack {...props} index={state.index} />
  );

  return (
    <div className="mt-4 mb-6">
      <StyledSlider
        renderTrack={Track}
        renderThumb={Thumb}
        pearling
        value={slider}
        min={min}
        max={max}
        onAfterChange={setSlider}
      />

      <div className="flex justify-between mt-8">
        <span>
          Price: $ {slider[0]} - $ {slider[1]}
        </span>
        <button
          onClick={() =>
            dispatch({
              type: TYPE_REDUX.PRICE_FILTER_PRODUCT,
              payload_min: slider[0],
              payload_max: slider[1],
            })
          }
        >
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    </div>
  );
};

export default RangeSlider;
