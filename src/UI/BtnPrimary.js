import React from "react";
import classes from "./ui.module.scss";

const BtnPrimary = ({value, href, onClickFunc}) => {
  const btnValue= value ? value :  'Button Primary';
  const linkHref = href ? href : '';
  return(
    <a className={classes.BtnPrimary} href={linkHref} onClick={onClickFunc}>{btnValue}</a>
  )
}

export default BtnPrimary;
