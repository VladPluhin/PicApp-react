import React from "react";
import classes from "./ui.module.scss";

const Select = ({options, onChangeFunc}) => {
  const optionsValue= options ? options :  [];

  return(
    <select className={classes.select}  onChange={event => {
        onChangeFunc(event.target.value)}}>
        {optionsValue.map((item)=>{
        return <option value={item} key={item}>{item}</option>
      })}
    </select>
  )
}

export default Select;
