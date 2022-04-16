import React from "react";
import classes from "./ui.module.scss";

const Select = ({options, onChangeFunc}) => {
  const optionsValue= options ? options :  [];

  return(
    <select className={classes.select}  onChangeFunc={event => {
      console.log(event.target.value)
      onChange(event.target.value)}}>
      {optionsValue.map((item)=>{
        return <option value={item} key={item}>{item}</option>
      })}
    </select>
  )
}

export default Select;
