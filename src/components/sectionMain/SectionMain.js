import React, { useEffect, useState } from "react";
import classes from "./sectionMain.module.scss";
import CardRow from "../CardRow/CardRow";
import Spinner from "../Spiner/Spiner";
import State from "../../state/state";

const SectionMain = (props) => {
  const state = new State();
  const cardLikesData = props.likePostData;
  const items = 8;
  const [data, setPhotosResponse] = useState(null);
  const [count, PageRender] = useState(1);

  function getApiReport(count, func) {
    return state.createApi.photos
      .list({
        page: count,
        perPage: items,
      })
      .then((result) => {
        func(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }
  useEffect(() => {
    getApiReport(count, setPhotosResponse);
  }, [count]);
  if (data === null) {
    return (
      <section className={classes.sectionMain}>
        <div className="container">
          <Spinner />
        </div>
      </section>
    );
  } else if (data !== null) {
    return (
      <section className={classes.sectionMain}>
        <div className="container">
          <CardRow
            data={data.response}
            items={items}
            count={count}
            PageRender={PageRender}
            likesRow={false}
            likePostData={props.likePostData}
            setLikedPost={props.setLikedPost}
          />
        </div>
      </section>
    );
  }
};
export default SectionMain;
