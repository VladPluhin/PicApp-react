import React from "react";
import classes from "./sectionLikedPost.module.scss";
import CardRow from "../CardRow/CardRow";

const SectionLikedPost = (props) => {
  return (
    <section className={classes.sectionLiked}>
      <div className="container">
        <CardRow likesRow={true} />
      </div>
    </section>
  );
};
export default SectionLikedPost;
