import React from 'react';
import  './nav.scss';
import {Link} from 'react-router-dom';

const Nav = () => {
   return(
    <ul className='navLists'>
        <li><Link to='/landscape'> landscape </Link></li>
        <li><Link to='/portrait'> portrait </Link></li>
        <li><Link to='/squarish'> squarish </Link></li>
        <li><Link to='/contact'> contact </Link></li>
        <li><Link to='/about'> about</Link></li>
    </ul>
   )
}

export default Nav;
