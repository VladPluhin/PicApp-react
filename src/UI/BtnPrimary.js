import React from "react";
import classes from "./ui.module.scss";

const BtnPrimary = (props) => {
  const value= props.value ? props.value :  'Button Primary';

  return(
    <button className={classes.BtnPrimary}>
      {value}
    </button>
  )
}

export default BtnPrimary;
