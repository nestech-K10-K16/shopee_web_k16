import "./index.css";
import { Link } from "react-router-dom";

const ProductStyle = (props) => {
  return (
    <div id="product-style">
      <Link to={props.link}>
        <img src={props.src} alt="" />
      </Link>
      <button className={props.className}>Add to cart</button>
    </div>
  );
};

export default ProductStyle;
