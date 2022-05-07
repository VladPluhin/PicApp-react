import React from "react";
import classes from "./ui.module.scss";

const BtnPrimary = ({value, href}) => {
  const btnValue= value ? value :  'Button Primary';
  const linkHref = href ? href : '';
  return(
    <a className={classes.BtnPrimary} href={linkHref} >{btnValue}</a>
  )
}

export default BtnPrimary;
