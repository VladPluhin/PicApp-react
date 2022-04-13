import React, { useEffect, useState, useRef } from "react";
import classes from "./sectionMain.module.scss";
import CardRow from "../CardRow/CardRow";
import Spinner from "../Spiner/Spiner";
import State from "../../state/state";

const SectionMain = (props) => {
  const state = new State();
  const [data, setPhotosResponse] = useState(null);
  const [count, PageRender] = useState(1);
  const [posts, setPosts] = useState([]);
  const lastElement = useRef();
  const observer = useRef();

  function getApiReport(count, setRespones) {
    return state.createApi.photos
      .list({
        page: count,
        perPage: 4
      })
      .then((result) => {
        setRespones(result);
        getPosts(posts, result)
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }

  function getPosts (posts, data) {
    if(data !== null ) {
        let newArr = [...posts, ...data.response.results]
        return setPosts(newArr)
    }
  }

  useEffect(() => {
    getApiReport(count, setPhotosResponse);
  }, []);

  useEffect(() => {
    getApiReport(count, setPhotosResponse);
  }, [count]);

  useEffect(() => {
    var callback = function (entries, observer) {
      if (data === null) {return;}
      if (observer.current) observer.current.disconnect();
      if (entries[0].isIntersecting) {
      console.log(1)
        return getApiReport(PageRender(count + 1), setPhotosResponse);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, []);

  if (posts.length === 0) {
    return (
      <section className={classes.sectionMain}>
        <div className="container">
          <Spinner />
          <div ref={lastElement} style={{ height: 20, background: '#fff' }}></div>
        </div>
      </section>
    );
  } else if (posts.length !== 0) {
    return (
      <section className={classes.sectionMain}>
        <div className="container">
          <CardRow
            data={posts}
            count={count}
            PageRender={PageRender}
            likesRow={false}
          />
          <div ref={lastElement} style={{ height: 20 , background: '#fff'}}></div>
        </div>
      </section>
    );
  }
};

export default SectionMain;
