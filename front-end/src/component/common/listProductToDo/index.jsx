import React from "react";
import { Link } from "react-router-dom";
import { IMG_PRODUCT_02, IMG_PRODUCT_03, IMG_PRODUCT_04 } from "assets";
import { PATHNAME_LIST } from "router/router";
import { toast } from "react-toastify";

class ListProductToDo extends React.Component {
  state = {
    listProductToDos: [
      {
        id: "Lira Earrings",
        url: IMG_PRODUCT_02,
        link: PATHNAME_LIST.PRODUCT,
        price: "$ 20,00",
      },
      {
        id: "Hal Earrings",
        url: IMG_PRODUCT_03,
        link: PATHNAME_LIST.PRODUCT,
        price: "$ 25,00",
      },
      {
        id: "Kaede Hair Pin Set Of 3",
        url: IMG_PRODUCT_04,
        link: PATHNAME_LIST.PRODUCT,
        price: "$ 30,00",
      },
      {
        id: "Kaede Hair Pin Set Of 3",
        url: IMG_PRODUCT_04,
        link: PATHNAME_LIST.PRODUCT,
        price: "$ 30,00",
      },
      {
        id: "Kaede Hair Pin Set Of 3",
        url: IMG_PRODUCT_04,
        link: PATHNAME_LIST.PRODUCT,
        price: "$ 30,00",
      },
      {
        id: "Kaede Hair Pin Set Of 3",
        url: IMG_PRODUCT_04,
        link: PATHNAME_LIST.PRODUCT,
        price: "$ 30,00",
      },
    ],
  };

  render() {
    let { listProductToDos } = this.state;
    const addToCartNotify = () => toast.success("Has been added to cart");

    return (
      <div className="grid grid-cols-3 gap-4">
        {listProductToDos &&
          listProductToDos.map((item) => {
            return (
              <div>
                <div id="product-style" key={item.id}>
                  <div>
                    <Link to={item.link}>
                      <img src={item.url} alt="" />
                    </Link>
                    <button className="body-large" onClick={addToCartNotify}>
                      Add to cart
                    </button>
                  </div>
                </div>

                <p className="heading-03 mb-1">{item.id}</p>
                <p className="heading-04 text-beaver">{item.price}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default ListProductToDo;
