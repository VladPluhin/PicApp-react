import React from "react";
import classes from "./ui.module.scss";

const BtnPrimary = (props) => {
  const value= props.value ? props.value :  'Button Primary';
  const linkHref = props.href ? props.href : '';
return(
  <span className={classes.BtnPrimary}>
      {linkHref ? <button > {value} </button> :
      <a href={linkHref}>{value}</a>}
  </span>
)
}

export default BtnPrimary;
