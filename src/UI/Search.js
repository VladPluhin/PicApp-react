import React from "react";
import classes from "./ui.module.scss";

const Search = (props) => {
  const placeholderValue= props.placeholder ? props.placeholder : 'Search..'
  return(
    <input type="text"  className={classes.search} placeholder={placeholderValue}/>
  )
}

export default Search;
