import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header/Header";
import SectionMain from "./components/SectionMain/SectionMain";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionLikedPost from "./components/SectionLikedPost/SectionLikedPost";
import { LikesContext } from "./context/context";
import State from "./state/state";

const App = () => {
  const [likePostData, setLikedPost] = useState([]);
  const state = new State();
  const [data, setRespones] = useState();
  const [page, setPageRender] = useState(0);
  const [posts, setPosts] = useState([]);
  const [noneFiltered, setFilter] = useState(true);
  const [topic, setTopic]= useState('')
  const [typeOrientation, setOrientationValue]= useState('')
  const [value, setRengeValue]= useState(10)
  const [color, setColor]= useState('black')
  const [sortedPost, setSortedPosts]  = useState([]);


  function NewOptions (oldquery, oldperPage, oldcolor, oldtypeOrientation) {
    this.query = oldquery;
    this.perPage = oldperPage;
    this.color = oldcolor;
    if(oldtypeOrientation.length > 0) {
      this.orientation = oldtypeOrientation
    }
  }

  function getData(setRespones , page ) {
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

  function getPosts(posts, data, sortedPost, noneFiltered) {
    let newArr=[]
    if ( data && noneFiltered === false) {
        return setPosts(sortedPost);
    }else if (data && noneFiltered == true ) {
      newArr = [...posts, ...data.response.results];
      return setPosts(newArr);
    }
  }
  function getSortedPostData(setAllSortPosts) {
    const newobj  = {...new NewOptions(topic, value, color, typeOrientation)}
    return state.createApi.search.getPhotos(newobj)
      .then((result) => {
        return setSortedPosts(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
   }
  return (
    <LikesContext.Provider value={{state, getData, likePostData, setLikedPost, data, setRespones, page, setPageRender   ,topic, setTopic, typeOrientation, setOrientationValue,value, setRengeValue, color, setColor, NewOptions, setFilter, getSortedPostData, posts, getPosts, noneFiltered, setFilter, sortedPost}}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact   render={() => <SectionMain/>}/>
          <Route path="/about/"   render={() => <SectionAbout/>}/>
          <Route path="/liked-photos/"  render={() => <SectionLikedPost/>} />
        </Switch>
      </Router>
    </LikesContext.Provider>
  );
};

export default App;
