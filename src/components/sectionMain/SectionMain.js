import React, { useEffect, useState, useRef } from "react";
import classes from "./sectionMain.module.scss";
import CardRow from "../CardRow/CardRow";
import Spinner from "../Spiner/Spiner";
import State from "../../state/state";
import {useObserver} from "../../hooks/useObserver";


const SectionMain = (props) => {
  const state = new State();
  const [data, setRespones] = useState(null);
  const [page, PageRender] = useState(1);
  const [posts, setPosts] = useState([]);
  const lastElement = useRef();
  function getApiReport(setRespones , page ) {
    return state.createApi.photos
      .list({
        page: page,
      })
      .then((result) => {
        setRespones(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }



  function getPosts (posts, data) {
    if(data !== null) {
      let  newArr = [...posts, ...data.response.results]
      return setPosts(newArr)
    }
  }

  useEffect(() => {
    getApiReport( setRespones, page);
  }, [page]);

  useEffect(() => {
    getPosts(posts, data);
  }, [data]);

  useObserver(lastElement, data, ()=> {
    PageRender(page + 1)
  }, page)


  if (posts.length === 0) {
    return (
      <section className={classes.sectionMain}>
        <div className="container">
          <Spinner />
          <div ref={lastElement} style={{ height: 5}}></div>
        </div>
      </section>
    );
  } else if (posts.length !== 0) {
    return (
      <section className={classes.sectionMain}>
        <div className="container">
          <CardRow
            data={posts}
            page={page}
            PageRender={PageRender}
            likesRow={false}
          />
          <div ref={lastElement} style={{ height: 5}}></div>
        </div>
      </section>
    );
  }
};

export default SectionMain;
