import React from "react";
import classes from "./ui.module.scss";

const Select = ({options, onChangeFunc}) => {
  const optionsValue= options ? options :  [];
 const getSelelctchValue = (event) => {
   return onChangeFunc(event.target.value)
  }
  return(
    <select className={classes.select}  onChange={getSelelctchValue}>
        {optionsValue.map((item)=>{
          return <option value={item} key={item}>{item}</option>
       })}
    </select>
  )
}

export default Select;
