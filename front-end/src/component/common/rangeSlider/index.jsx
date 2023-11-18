import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { productSliceSelector } from "redux/selector";
import { filterProductPrice } from "redux/reducers/productSlice";

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

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const RangeSlider = () => {
  const { productList } = useSelector(productSliceSelector);
  const dispatch = useDispatch();

  const [slider, setSlider] = useState([]);
  const [number, setNumber] = useState([]);

  useEffect(() => {
    const fetchPriceProduct = async () => {
      const priceProduct = await productList.map((item) => {
        return item.Price;
      });

      const min = Math.min(...priceProduct);
      const max = Math.max(...priceProduct);

      setSlider([min, max]);
      setNumber([min, max]);
    };
    fetchPriceProduct();
  }, [productList]);

  return (
    <div className="mt-4 mb-6">
      <StyledSlider
        renderTrack={Track}
        renderThumb={Thumb}
        pearling
        min={number[0]}
        max={number[1]}
        value={slider}
        onAfterChange={setSlider}
      />

      <div className="flex justify-between mt-8">
        <span>
          Price: $ {slider[0]} - $ {slider[1]}
        </span>
        <button onClick={() => dispatch(filterProductPrice(slider))}>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    </div>
  );
};

export default RangeSlider;
