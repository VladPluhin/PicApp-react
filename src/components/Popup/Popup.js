import React from "react";
import classes from "./popup.module.scss";
// import PropTypes from 'prop-types';

const Popup = (props) => {
  const user = props.user;
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
            <a href={user.links.portfolio} className={classes.btnView}> View Portfolio</a>
        </div>
      </div >
  )
};
// Card.propTypes={
// 	photo:PropTypes.shape({
// 		 urls: PropTypes.shape({
// 			regular: PropTypes.string
// 		 }),
// 		user: PropTypes.shape({
// 			name:PropTypes.string
// 		}),
// 	})
// }
export default Popup;
