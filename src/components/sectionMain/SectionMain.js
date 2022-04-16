import React, { useEffect, useState, useRef } from "react";
import classes from "./sectionMain.module.scss";
import CardRow from "../CardRow/CardRow";
import Spinner from "../Spiner/Spiner";
import State from "../../state/state";
import {useObserver} from "../../hooks/useObserver";
import Sorting from "../Sorting/Sorting";

const SectionMain = (props) => {
  const state = new State();
  const [data, setRespones] = useState();
  const [page, setPageRender] = useState(2);
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
    if(data ) {
      let  newArr = [...posts, ...data.response.results]
      return setPosts(newArr)
    }
  }
  useObserver(
    lastElement,
    data,
    ()=> {
      console.log('obs')
      setPageRender(page + 1)
    },
  )
  useEffect(() => {
    getApiReport( setRespones, page);
     console.log('ger2')
  }, [page]);

  useEffect(() => {
   console.log('post')
    getPosts(posts, data);

  }, [data]);




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
          <Sorting/>
          <CardRow
            data={posts}
            page={page}
            PageRender={setPageRender}
            likesRow={false}
          />
          <div ref={lastElement} style={{ height: 5}}></div>
        </div>
      </section>
    );
  }
};

export default SectionMain;
