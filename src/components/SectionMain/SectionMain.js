import React, { useEffect, useRef, useContext } from "react";
import classes from "./sectionMain.module.scss";
import CardRow from "../CardRow/CardRow";
import Spinner from "../Spiner/Spiner";
import { useObserver } from "../../hooks/useObserver";

import { LikesContext } from "../../context/context";

const SectionMain = () => {
  const { data, setRespones, page, setPageRender, getData ,getPosts, posts ,getSortedPosts} = useContext(LikesContext);
  const lastElement = useRef();

  useObserver(lastElement, data, () => {
    setPageRender(page + 1);
  });

  useEffect(() => {
     getData(setRespones, page);
  }, [page]);

  useEffect(() => {
    getPosts(posts, data)
  }, [data]);

  // useEffect(() => {
  //   getFilteredPostData(noneFiltered,posts,sortedPost)
  // }, [posts]);


  // useEffect(() => {
  //    getSortedPostData(setSortedData);
  // }, [noneFiltered]);

  // useEffect(() => {
  //   getSortedPosts(sortedData)
  // }, [sortedData]);

  // useEffect(() => {
  //   getFilteredPostData(noneFiltered, posts, sortedPost)
  // }, [sortedPost]);

  if (posts.length === 0) {
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
            data={posts}
            likesRow={false}
          />
          <div ref={lastElement} style={{ height: 1 }}></div>
        </div>
      </section>
    );
  }
};

export default SectionMain;
