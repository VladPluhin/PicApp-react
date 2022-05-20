import React from "react";
import "./nav.scss";
import {  Link, Outlet } from "react-router-dom";


const Nav = () => {
  return (
   <>
    <ul className="navLists">
      <li>
        <Link to="/liked-photos">  
          <span className="icons-heart"> &#10084; </span>
          <span></span>
        </Link>
      </li>
      <li>
        <Link to="/search"> 
          <span className="icons-search"> &#9906;</span>
         </Link>
      </li>
      <li>
        <Link to="/about"> about</Link>
      </li>
    </ul>
   < Outlet/>
     </>
  );
};

export default Nav;
