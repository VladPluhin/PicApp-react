
import React, { Component } from 'react';
import classes from  './spiner.module.scss';

export default class Spinner  extends Component {
    render() {
        return (
            <div className={classes.loadingioSpinner}>
                <div className={classes.spiner}>
                    <div></div>
                    <div className={classes.round2}></div>
                    <span>Loading...</span>
                </div>
            </div>
        )
    }
}
