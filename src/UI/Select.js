import React from "react";
import classes from "./ui.module.scss";

const Select = (props) => {
  const value= props.value ? props.value :  [];

  return(
    <select className={classes.select}>
      {value.map((item)=>{
        return <option value={item} key={item}>{item}</option>
      })}
    </select>
  )
}

export default Select;
