import React from 'react';
import  './nav.scss';
import {BrowserRouter, Link} from 'react-router-dom';

const Nav = (props) => {
   return(
   <BrowserRouter>
      <ul className='navLists'>
        <li><Link to='/liked-photos'  > liked photos </Link></li>
        <li><Link to='/about'> about</Link></li>
    </ul>
   </BrowserRouter>

   )
}

export default Nav;
