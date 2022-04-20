import React, { useEffect, useRef, useContext } from "react";
import classes from "./sectionMain.module.scss";
import CardRow from "../CardRow/CardRow";
import Spinner from "../Spiner/Spiner";
import { useObserver } from "../../hooks/useObserver";

import { LikesContext } from "../../context/context";

const SectionMain = () => {
  const { data, setRespones, page, setPageRender, getData ,getPosts, posts ,noneFiltered , sortedPost, getSortedPostData, setSortedData, getSotedPosts, resuls, returned, sortedData} = useContext(LikesContext);
  const lastElement = useRef();

  useObserver(lastElement, data, () => {
  if(noneFiltered===false) {
   setPageRender(page + 1);
  }

  });

  useEffect(() => {
     getData(setRespones, page);
  }, [page, ]);

  useEffect(() => {
    getPosts(posts, data)
  }, [data]);

  useEffect(() => {
    returned(noneFiltered,posts,sortedPost)
  }, [posts]);


  useEffect(() => {
     getSortedPostData(setSortedData);
  }, [noneFiltered]);

  useEffect(() => {
    getSotedPosts(sortedData)
  }, [sortedData]);

  useEffect(() => {
    returned(noneFiltered, posts, sortedPost)
  }, [sortedPost]);

  if (resuls.length === 0) {
    return (
      <section className={classes.sectionMain}>
        <div className="container">
          <Spinner />
          <div ref={lastElement} style={{ height: 1 }}></div>
        </div>
      </section>
    );
  } else{
    return (
      <section className={classes.sectionMain}>
        <div className="container">
          <CardRow
            data={resuls}
            likesRow={false}
          />
          <div ref={lastElement} style={{ height: 1 }}></div>
        </div>
      </section>
    );
  }
};

export default SectionMain;
