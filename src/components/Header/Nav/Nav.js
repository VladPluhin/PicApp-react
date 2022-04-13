import React from "react";
import "./nav.scss";
import {  Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <ul className="navLists">
      <li>
        <Link to="/liked-photos"> liked photos </Link>
      </li>
      <li>
        <Link to="/about"> about</Link>
      </li>
    </ul>
  );
};

export default Nav;
