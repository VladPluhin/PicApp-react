import React from 'react';
import classes from './sectionMain.module.scss';
import CardRow from "../cardRow/CardRow";

const SectionMain = ({cardsPrefer}) => {
    return (
        <section  className = {classes.sectionMain}>
            <div  className ='container'>
                  <CardRow cardsPrefer={cardsPrefer}/>
            </div>
        </section>
    )
}
export default SectionMain;
