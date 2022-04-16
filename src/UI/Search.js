import React from "react";
import classes from "./ui.module.scss";

const Search = ({onChangeFunc, placeholder}) => {
  const placeholderValue= placeholder ? placeholder : 'Search..'
  return(
    <input type="text"  className={classes.search} placeholder={placeholderValue}
      onChange={event => {
      onChangeFunc(event.target.value)}}
    />
  )
}

export default Search;
