import React from "react";
import classes from "./popup.module.scss";
import  "./popup.module.scss";

interface PopupProps {
  user:any;
}

const Popup = ({user}:PopupProps) => {
  return(
      <div className={classes.popup}>
        <div className={classes.infoWrapper}>
            <div className={classes.popupLogo}>
              <img src={user.profile_image.medium} alt={user.first_name} />
            </div>
            <div className={classes.popupDescription}>
                <h4 className={classes.name}>
                  {user.first_name}
                  {user.last_name ?
                    <span className={classes.lastName}>
                    {user.last_name}</span>:
                  ''}
                </h4>
            </div>
        </div>
        <div className={classes.btnWrapper}>
            <a href={user.links.self} className={classes.btnView}> View Portfolio</a>
        </div>
      </div >
  )
};

export default Popup;
