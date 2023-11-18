import React from "react";
import "./index.scss";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Paginate = (props) => {
  const { totalPage, handlePageClick } = props;

  return (
    <div id="paginate" className="py-6">
      <ReactPaginate
        pageCount={totalPage}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        containerClassName={"pagination"}
        activeClassName={"item active "}
        disabledClassName={"disabled-page"}
        pageClassName={"item pagination-page"}
        breakLabel={"..."}
        nextClassName={"item"}
        nextLabel={<FontAwesomeIcon icon={"arrow-right"} size="xl" />}
        previousClassName={"item"}
        previousLabel={<FontAwesomeIcon icon={"arrow-left"} size="xl" />}
      />
    </div>
  );
};

export default Paginate;
