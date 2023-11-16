import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import { billDetailSliceSelector } from "redux/selector";

const BillDetail = (props) => {
  const { className, closeModel } = props;
  const { billDetailById, totalMoneyBillDetail } = useSelector(
    billDetailSliceSelector
  );

  return (
    <div
      id="bill-detail"
      className={`${className} bg-white-smoke rounded-2xl fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-[45rem] p-8`}
    >
      <div className="flex justify-between mb-2">
        <p>
          IdBill: <u>{billDetailById[0]?.IdBill}</u>
        </p>
        <p>
          TotalMoney: <u>{totalMoneyBillDetail}</u>
        </p>
      </div>

      <table className="bg-white mb-4">
        <thead>
          <tr>
            <th>Product:</th>
            <th>Amount:</th>
            <th>IntoMoney:</th>
          </tr>
        </thead>

        {billDetailById?.map((item) => {
          return (
            <tbody key={item.IdProduct}>
              <tr>
                <td>{item.IdProduct}</td>
                <td>{item.Amount}</td>
                <td>{item.IntoMoney}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <button
        className="bg-red-400 border rounded-2xl w-full p-2"
        onClick={closeModel}
      >
        Close
      </button>
    </div>
  );
};

export default BillDetail;
