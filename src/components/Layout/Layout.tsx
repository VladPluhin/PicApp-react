import React from "react";
import classes from "./layout.module.scss";
import {  Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Link to="/" >PictureApp</Link>
        </div>
        <ul className={classes.navLists}>
          <li>
            <Link to="/liked-photos">  
              <span className="icons-heart"> &#10084; </span>
              <span></span>
            </Link>
          </li>
          <li>
            <Link to="/search"> 
              <span className= {classes.iconSearch}> &#9906;</span>
            </Link>
          </li>
          <li>
            <Link to="/about"> about</Link>
          </li>
        </ul>
      </div>
    </header>
    <Outlet/>
    </>
  );
};
export default Layout;
 