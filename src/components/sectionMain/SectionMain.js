import React, { useEffect, useRef, useContext } from "react";
import classes from "./sectionMain.module.scss";
import CardRow from "../CardRow/CardRow";
import Spinner from "../Spiner/Spiner";
import { useObserver } from "../../hooks/useObserver";
import Filter from "../Filter/Filter";
import { LikesContext } from "../../context/context";

const SectionMain = () => {
 const { data, getPostData, setAllPosts,getDataForCards,getSortedPostData, setRespones, page, setPageRender, getApiData ,getCardData ,getSortedCardData , allposts, resetFilter , nonefiltered} = useContext(LikesContext);
  const lastElement = useRef();

  useObserver(lastElement, data, () => {
    setPageRender(page + 1);
  });

  useEffect(() => {
    getPostData();
  }, [page]);

  // useEffect(() => {
  //   getCardData(allposts, data);
  // }, [data]);


  if (allposts.length === 0) {
    return (
      <section className={classes.sectionMain}>
        <div className="container">
          <Spinner />
          <div ref={lastElement} style={{ height: 1 }}></div>
        </div>
      </section>
    );
  } else if (allposts.length !== 0) {
    return (
      <section className={classes.sectionMain}>
        <div className="container">
          <Filter getSorting={setRespones}/>
          <CardRow
            data={allposts}
            page={page}
            PageRender={setPageRender}
            likesRow={false}
          />
          <div ref={lastElement} style={{ height: 1 }}></div>
        </div>
      </section>
    );
  }
};

export default SectionMain;
