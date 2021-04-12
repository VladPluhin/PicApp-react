import React from 'react';
import classes from  './Header.module.scss';
import Nav from '../Nav/Nav'
import Logo from "../Logo/Logo";


const Header = (props) => {
    return (
        <header className = {classes.header}>
            <div className={classes.container}>
                <Logo getrenderCards={()=> props.changeCardRows }/>
                <Nav  getrenderCards={()=> props.changeCardRows }/>
            </div>
        </header>
    )
}
export default Header;
