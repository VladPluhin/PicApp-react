import React from "react";
import classes from "./Header.module.scss";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};
export default Header;
