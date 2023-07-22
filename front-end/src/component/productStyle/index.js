import "./index.css";

const ProductStyle = (props) => {
  return (
    <div id="product-style">
      <a href={props.href}>
        <img src={props.src} alt="" />
      </a>
      <button className={props.className}>Add to cart</button>
    </div>
  );
};

export default ProductStyle;
