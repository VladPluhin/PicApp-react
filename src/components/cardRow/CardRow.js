import React, { } from "react";
import classes from "./cardRow.module.scss";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

const CardRow = (props) => {

 if(props.likesRow==false) {
      return (
        <div className={classes.cardRow}>
            {props.data.results.map((card) => (
              <div key={card.id} className={classes.cardCol}>
                <Card
                  likesRow={false}
                  setLikedPost={props.setLikedPost}
                  likePostData={props.likePostData}
                  card={card}
                />
              </div>
            ))}
            <Pagination
              itemAmount={props.items}
              curentPage={props.count}
              totalItem= {props.data.total}
              PageRender={props.PageRender}
            />
          </div>
      )
 }else {
    if(props.likePostData.length==0) {
        return(
          <h1>No posts chosen</h1>
        )
      }else {
        return(
          <div className={classes.cardRow}>
              {props.likePostData.map((card) => (
                  <div key={card.id} className={classes.cardCol}>
                    <Card
                      likesRow={true}
                      setLikedPost={props.setLikedPost}
                      likePostData={props.likePostData}
                      card={card}
                    />
                  </div>
              ))}
          </div>
        )
      }
    }
};

export default CardRow;
