import React, {useContext}from "react";
import { Link } from "react-router-dom";
import classes from "./logo.module.scss";
import { LikesContext } from "../../context/context";

const Logo = () => {
  const { setSwitcher } = useContext(LikesContext);
  return (
    <div className={classes.logo}>
      <Link to="/" >PictureApp</Link>
    </div>
  );
};
export default Logo;
