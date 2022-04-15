import React from "react";
import classes from  './spiner.module.scss';

const Spinner = () => {
    return (
        <div className={classes.spinnerWrapper}>
            <div className={classes.loadingioSpinner}>
                <div className={classes.spiner}>
                    <div></div>
                    <div className={classes.round2}></div>
                    <span>Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Spinner;
