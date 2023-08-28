import React from "react";
import "./index.scss";
import ReactSlider from "react-slider";
import styled from "styled-components";

const RangeSlider = () => {
  const min = 0;
  const max = 100;

  const valueSliderOnChange = (e) => {
    e.target.value = min;
  };

  const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 2px;
  `;

  const StyledThumb = styled.div`
    height: 25px;
    width: 28px;
    line-height: 25px;
    text-align: center;
    background-color: #000;
    color: #fff;
    cursor: grab;
    margin-top: -11px;
    outline: none;
  `;

  const Thumb = (props, state) => (
    <StyledThumb {...props}>{state.valueNow}</StyledThumb>
  );

  const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${(props) =>
      props.index === 2 ? "#f00" : props.index === 1 ? "#0f0" : "#ddd"};
  `;

  const Track = (props, state) => (
    <StyledTrack {...props} index={state.index} />
  );

  return (
    <div className="mt-4 mb-6">
      <StyledSlider
        defaultValue={[0, 100]}
        renderTrack={Track}
        renderThumb={Thumb}
        minDistance={12}
        value={[min, max]}
        onChange={(e) => valueSliderOnChange(e)}
      />

      <div className="mt-4">
        <span>
          Price: {min} - {max}
        </span>
      </div>
    </div>
  );
};

export default RangeSlider;
