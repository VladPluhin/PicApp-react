import React from "react";
import classes from "./sorting.module.scss";
// import PropTypes from 'prop-types';

const Sorting = (props) => {
  return(
      <div className={classes.sortingHolder}>
          <button className={classes.sortingclose}>
              <span></span>
              <span></span>
              <span></span>
          </button>
        <div className={classes.list}>
        </div>
      </div>
  )
};
// Card.propTypes={
// 	photo:PropTypes.shape({
// 		 urls: PropTypes.shape({
// 			regular: PropTypes.string
// 		 }),
// 		user: PropTypes.shape({
// 			name:PropTypes.string
// 		}),
// 	})
// }
export default Sorting;
