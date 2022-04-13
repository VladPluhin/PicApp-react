import React, { useContext, useState } from "react";
import classes from "./card.module.scss";
// import PropTypes from 'prop-types';
import { LikesContext } from "../../context/context";

const Card = (props) => {
  const card = props.card;
  const { likePostData, setLikedPost } = useContext(LikesContext);
  function GetAuthor(card) {
    return (this.card = card);
  }

  const getLike = (card, arr) => {
    let selectPhoto = new GetAuthor(card);
    let newArr = arr;
    const even = (item) => item.id == selectPhoto.id;
    if (newArr.length === 0) {
      newArr.push(selectPhoto);
      return newArr;
    } else if (!newArr.some(even)) {
      newArr.push(selectPhoto);
      return newArr;
    }

    return newArr;
  };

  const deletedPost = (card, arr) => {
    var filtered = arr.filter(function (el) {
      return el.id != card.id;
    });
    return filtered;
  };

  return (
    <div className={classes.card}>
      <div className={classes.cardImg}>
        <img className="img" src={card.urls.regular} />
      </div>
      <div className={classes.cardBody}>
        {props.likesRow ? (
          <button
            className={classes.btnDelet}
            onClick={() => setLikedPost(deletedPost(props.card, likePostData))}
          >
            &#9747;
          </button>
        ) : (
          <button
            className={classes.btnLike}
            onClick={() => setLikedPost(getLike(props.card, likePostData))}
          >
            &#10084;
          </button>
        )}
        <time
          className={classes.date}
          dateTime={
            props.card.created_at ? props.card.created_at.slice(0, 10) : ""
          }
        >
          {props.card.created_at ? props.card.created_at.slice(0, 10) : ""}
        </time>
        <div className={classes.description}>
          {props.card.description ? <p> {props.card.description} </p> : " "}
        </div>
        <a
          href={`https://unsplash.com/@${card.user.username}`}
          className={classes.title}
        >
          <span>Author:</span>
          {card.name ? card.name : card.user.username}
        </a>
      </div>
    </div>
  );
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
export default Card;
