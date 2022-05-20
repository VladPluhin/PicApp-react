import React from "react";
import classes from "./pagination.module.scss";


interface PaginationProps {
  curentPage: number;
  totalItem: number;
  itemAmount: number;
  PageRender: () => void
}

const Pagination:React.FC<PaginationProps> = ({curentPage, totalItem, itemAmount, PageRender}) => {
  const hasPrev = () => {
    return curentPage > 1;
  };

  function getPrevPage(item:number, count:number, func: Function) {
    if (item > 1) {
      return func(count - 1);
    }
  }

  function getNextPage(count:number, func: Function) {
    return func(count + 1);
  }

  const pageAmount = () => {
    return Math.ceil(totalItem / itemAmount);
  };

  return (
    <ul className={classes.pagination}>
      <li>
        <span
          role="button"
          className={!hasPrev() ? "hidden page" : "page"}
          onClick={() =>
            getPrevPage(itemAmount, curentPage, PageRender)
          }
        >
          Prev{" "}
        </span>
      </li>
      <li>
        <span>{pageAmount()}</span>
      </li>
      <li>
        <span
          className="page"
          role="button"
          onClick={() => getNextPage(curentPage, PageRender)}
        >
          Next{" "}
        </span>
      </li>
    </ul>
  );
};

export default Pagination;
