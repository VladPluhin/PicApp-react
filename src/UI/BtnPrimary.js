import React from "react";
import classes from "./ui.module.scss";

const BtnPrimary = ({value, href, onHandleFunction}) => {
  const btnValue= value ? value :  'Button Primary';
  const linkHref = href ? href : '';
  if(linkHref) {
    return(
      <a className={classes.BtnPrimary} href={linkHref} onClick={onHandleFunction}>{btnValue}</a>
    )
  }else {
    return(
      <button className={classes.BtnPrimary} onClick={onHandleFunction}>{btnValue}</button>
    )
  }
  
}

export default BtnPrimary;
