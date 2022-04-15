import React from "react";
import { Link } from "react-router-dom";
import classes from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Link to="/">PictureApp</Link>
    </div>
  );
};
export default Logo;
