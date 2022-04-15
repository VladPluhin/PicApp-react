import React, { useContext } from "react";
import classes from "./cardRow.module.scss";
import Card from "../Card/Card";
import { LikesContext } from "../../context/context";

const CardRow = (props) => {
  const { likePostData } = useContext(LikesContext);

  if (props.likesRow == false) {
    return (
      <div className={classes.cardRow}>
        {props.data.map((card, id) => (
          <div key={id + 1} className={classes.cardCol}>
            <Card likesRow={false} card={card} />
          </div>
        ))}

      </div>
    );
  } else {
    if (likePostData.length == 0) {
      return <h1>No posts chosen...</h1>;
    } else {
      return (
        <div className={classes.cardRow}>
          {likePostData.map((card) => (
            <div key={card.id} className={classes.cardCol}>
              <Card likesRow={true} card={card} />
            </div>
          ))}
        </div>
      );
    }
  }
};

export default CardRow;
