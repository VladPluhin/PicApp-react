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
  const state = new State();
  const [likePostData, setLikedPost] = useState([]);
  const [posts, setPosts] = useState([]);
  const [sortedPost, setSortedPosts]  = useState([]);
  const [data, setRespones] = useState();
  const [sortedData, setSortedData]  = useState([]);
  const [resuls, setResults] = useState([]);
  const [page, setPageRender] = useState(0);
  const [noneFiltered, setFilter] = useState(true);
  const [topic, setTopic]= useState('')
  const [typeOrientation, setOrientationValue]= useState('')
  const [value, setRengeValue]= useState(10)
  const [color, setColor]= useState('black')
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
  function getSortedPostData(setSortedData) {
    const newobj  = {...new NewOptions(topic, value, color, typeOrientation)}
    return state.createApi.search.getPhotos(newobj)
      .then((result) => {
        console.log(result)
        return setSortedData(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }
  function getPosts(posts, data) {
    let newArr=[]
    if (data) {
        newArr = [...posts, ...data.response.results];
        return setPosts(newArr);
      }
  }

  function getSotedPosts(data) {
    if ( data) {
      return setSortedPosts([...data.response.results]);
    }
  }
   function returned(noneFiltered,posts,sortedPost) {
      if (noneFiltered===true) {
       setResults(posts)

      }else{
          setResults(sortedPost)
      }
   }

  return (
    <LikesContext.Provider value={{state, getData, likePostData, setLikedPost, data, setRespones, page, setPageRender   ,topic, setTopic, typeOrientation, setOrientationValue,value, setRengeValue, color, setColor, NewOptions, setFilter, getSortedPostData, posts, getPosts, noneFiltered, setFilter, sortedPost, resuls, setResults, returned, getSotedPosts}}>
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
