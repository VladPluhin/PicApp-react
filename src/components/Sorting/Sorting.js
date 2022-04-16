import React, {useState} from "react";
import classes from "./sorting.module.scss";
import { CSSTransition } from 'react-transition-group';
import Select from "../../UI/Select";
import Search from "../../UI/Search";
import Range from "../../UI/Range";
import BtnPrimary from '../../UI/BtnPrimary';

// import PropTypes from 'prop-types';

const Sorting = (props) => {
  const [showed, setShowedFilter] = useState(false);
  const [searchQuery, setSearchQuery]= useState('');
  const [colorValue, setColorValue]  = useState(['black_and_white', 'black', 'white', 'yellow', 'orange', 'red', 'purple', 'magenta', 'green', 'teal', 'blue'])

  const getShowedFilter = ()=> {
    return showed ? setShowedFilter(false) :  setShowedFilter(true)
  }

  return(
      <div className={classes.sorting} >
          <button className={classes.sortingclose}
            onClick={()=>{getShowedFilter()}}>
              <span></span>
              <span></span>
              <span></span>
          </button>
          <CSSTransition
            in={showed}
            timeout={400}
            classNames="filter"
            unmountOnExit>
            <form className={classes.sortingHolder}>
              <div className={classes.container}>
               <Search value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
               />
               <Range text={'Chose amount posts:'}/>
                <div className={classes.orientation}>
                  <BtnPrimary value={'landscape'}/>
                  <BtnPrimary value={'portrait'}/>
                  <BtnPrimary value={'squarish'}/>

                </div>
                <div className={classes.colors}>
                   <Select value= {colorValue}/>
                </div>
                <div className={classes.btnWrapper}>
                   <BtnPrimary value={'Find Posts'}/>
                </div>
              </div>
            </form>
          </CSSTransition>
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
