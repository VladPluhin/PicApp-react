
import React from 'react';
import classes from  './pagination.module.scss';

const Pagination = (props) => {
    const  hasPrev = () => {
        return props.curentPage > 1;
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
                    onClick={props.onPrevPage}> Prev </span>
            </li>
            <li>
                <span>
                    {pageAmount()}
                </span> 
            </li>
            <li>
                <span  className='page'
                    role="button"
                    onClick={props.onNextPage}> Next </span>
            </li>
        </ul>
    )
}

export default Pagination;