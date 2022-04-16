import React, { useEffect, useRef, useContext } from "react";
import classes from "./sectionMain.module.scss";
import CardRow from "../CardRow/CardRow";
import Spinner from "../Spiner/Spiner";
import { useObserver } from "../../hooks/useObserver";
import Filter from "../Filter/Filter";
import { LikesContext } from "../../context/context";

const SectionMain = () => {
  const { data, setRespones, page, setPageRender, getApiReport ,getPosts, posts, setPosts } =useContext(LikesContext);
  const lastElement = useRef();

  useObserver(lastElement, data, () => {
    setPageRender(page + 1);
  });

  useEffect(() => {
    getApiReport(setRespones, page);
  }, [page]);

  useEffect(() => {
    getPosts(posts, data);
  }, [data]);

  if (posts.length === 0) {
    return (
      <section className={classes.sectionMain}>
        <div className="container">
          <Spinner />
          <div ref={lastElement} style={{ height: 5 }}></div>
        </div>
      </section>
    );
  } else if (posts.length !== 0) {
    return (
      <section className={classes.sectionMain}>
        <div className="container">
          <Filter />
          <CardRow
            data={posts}
            page={page}
            PageRender={setPageRender}
            likesRow={false}
          />
          <div ref={lastElement} style={{ height: 5 }}></div>
        </div>
      </section>
    );
  }
};

export default SectionMain;
