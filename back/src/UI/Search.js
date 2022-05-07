import React from "react";
import classes from "./ui.module.scss";

const Search = ({onChangeFunc, placeholder}) => {
  const placeholderValue = placeholder ? placeholder : 'Search..';
  const getSearchValue = (event) => {
   return onChangeFunc(event.target.value)
  }
  return(
    <input type="text"  className={classes.search} placeholder={placeholderValue}
      onChange={getSearchValue}
    />
  )
}

export default Search;
