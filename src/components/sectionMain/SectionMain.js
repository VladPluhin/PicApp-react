import React from 'react';
import classes from './sectionMain.module.scss';
import CardRow02 from "../cardRow/CardRow02";

const SectionMain = () => {
    return (
        <section  className = {classes.sectionMain}>
            <div  className ='container'>
                  <CardRow02/>
            </div>
        </section>
    )
}
export default SectionMain;
