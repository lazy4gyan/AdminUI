import React from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import style from "./style.module.scss";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.pagination_container}>
      <button
        className={style.pagination_button}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaLessThan/>
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`${style.pagination_button} ${
            currentPage === pageNumber ? style.pagination_actives : ""
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className={style.pagination_button}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaGreaterThan/>
      </button>
    </div>
  );
};

export default Pagination;
