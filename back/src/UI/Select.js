import React from "react";
import classes from "./ui.module.scss";

const Select = ({options}) => {
  const optionsValue= options ? options :  [];

  return(
    <select className={classes.select}  >
        {optionsValue.map((item)=>{
          return <option value={item} key={item}>{item}</option>
       })}
    </select>
  )
}

export default Select;
