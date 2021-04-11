import React from 'react';
import classes from './sectionMain.module.scss';
import CardRow from "../cardRow/CardRow";

const SectionMain = () => {
    return (
        <section  className = {classes.sectionMain}>
            <div  className ='container'>
                  <CardRow/>
            </div>
        </section>
    )
}
export default SectionMain;
