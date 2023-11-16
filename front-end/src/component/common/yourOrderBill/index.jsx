import React from "react";
import { useSelector } from "react-redux";
import { productSliceSelector } from "redux/selector";

const YourOrderBill = (props) => {
  const { children, map, totalMoney } = props;
  const { productList } = useSelector(productSliceSelector);

  // event
  const getByIdProduct = (id) => {
    const product = productList.find((value) => value.IdProduct === id);
    return product;
  };

  //data
  const yourOrderData = [
    {
      heading: "SUBTOTAL",
      title: "$ 0",
    },
    {
      heading: "SHIPPING",
      title: "Free shipping",
    },
  ];

  return (
    <div className="heading-05 bg-bright-gray flex flex-col gap-y-4 p-8">
      <table className="w-full">
        <thead className="border-b border-light-sivler">
          <tr>
            <th className="heading-05 text-left pb-3">PRODUCT</th>
            <th className="heading-05 text-right pb-3">TOTAL</th>
          </tr>
        </thead>

        <tbody className="border-b border-light-sivler">
          {map?.map((item) => {
            const id = item.IdProduct;
            return (
              <tr key={item.IdProduct}>
                <td className="text-dark-silver text-left py-3">
                  {getByIdProduct(id)?.Name}
                </td>
                <td className="text-dark-silver text-right py-3">
                  $ {item.IntoMoney}
                </td>
              </tr>
            );
          })}
        </tbody>

        <tbody>
          {yourOrderData.map((item, index) => {
            return (
              <tr key={index} className="border-b border-light-sivler">
                <th className="heading-05 text-left py-3">{item.heading}</th>
                <td className="text-dark-silver text-right py-3">
                  {item.title}
                </td>
              </tr>
            );
          })}

          <tr>
            <th className="text-left py-3">TOTAL</th>
            <th className="text-right py-3">$ {totalMoney}</th>
          </tr>
        </tbody>
      </table>
      {children}
    </div>
  );
};

export default YourOrderBill;
