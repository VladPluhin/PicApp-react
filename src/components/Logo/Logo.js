import React from 'react';
import {Link} from 'react-router-dom';
import classes from './logo.module.scss';

const  Logo= (props)=> {
     return (
        <div className={classes.logo}>
            <Link  onClick={props.getrenderCards()}>PicApp</Link>
        </div>
     )
 }
 export default Logo;