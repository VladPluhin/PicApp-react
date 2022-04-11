
import React from 'react';
import classes from  './pagination.module.scss';

const Pagination = (props) => {
    const  hasPrev = () => {
        return props.curentPage > 1;
    }

    function getPrevPage(item, count, func) {
      if(item > 1){
        return func(count - 1);
      }
    }

    function getNextPage(count, func) {
      return func(count + 1);
    }

    const pageAmount= () => {
        return Math.ceil(props.totalItem / props.itemAmount )
    }

    return(
        <ul className={classes.pagination}>
            <li>
                <span
                    role="button"
                    className= { !hasPrev() ? "hidden page" : "page"}
                    onClick={()=>
                        getPrevPage(props.itemAmount, props.curentPage, props.PageRender)}>
                    Prev </span>
            </li>
            <li>
                <span>
                    {pageAmount()}
                </span>
            </li>
            <li>
                <span className='page'
                    role="button"
                    onClick={()=>
                    getNextPage( props.curentPage, props.PageRender)}>Next </span>
            </li>
        </ul>
    )
}

export default Pagination;
