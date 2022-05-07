import React from "react";
import classes from "./ui.module.scss";

const BtnPrimary = ({value, href, handleclick}) => {
  const btnValue= value ? value :  'Button Primary';
  const linkHref = href ? href : '';
  return(
    <a className={classes.BtnPrimary} href={linkHref} onClick={handleclick}>{btnValue}</a>
  )
}

export default BtnPrimary;
