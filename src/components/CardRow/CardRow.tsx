import React, { useContext } from "react";
import classes from "./cardRow.module.scss";
import Card from "../Card/Card";
import { AppContext } from "../../components/context/context";

interface CardRowProps {
  data?: any;
  likesRow?: boolean
}

const CardRow = ({data, likesRow}: CardRowProps) => {
  const { likePostData} = useContext(AppContext);
  if (likesRow === false) {
    return (
      <div className={classes.cardRow}>
        {data.map((card:any, id:number) => (
          
          <div key={id + 1} className={classes.cardCol}>
           
            <Card likesRow={false} card={card} />
          </div>
        ))}
      </div>
    );
  } else {
   
    if (likePostData!.length === 0) {
      return <h1>No posts chosen...</h1>;
    } else {
      return (
        <div className={classes.cardRow}>
          {likePostData!.map((card:any) => (
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
