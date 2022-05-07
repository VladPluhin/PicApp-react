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
import SectionSearch from "./components/SectionSearch/SectionSearch";
import { LikesContext } from "./context/context";
import State from "./state/state";

const App = () => {
  const state = new State();
  const [likePostData, setLikedPost] = useState([]);
 
  const [sortedPost, setSortedPosts]  = useState([]);
  const [sortedData, setSortedData]  = useState([]);
  const [results, setResults] = useState([]);
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
      console.log(result)
        setRespones(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }
 

  // function getSortedPostData(setSortedData) {
  //   const newobj  = {...new NewOptions(topic, value, color, typeOrientation)}
  //    if(noneFiltered===false) {
  //       return state.createApi.search.getPhotos(newobj)
  //     .then((result) => {
  //        setSortedData(result);
  //        console.log(result)
  //     })
  //     .catch(() => {
  //       console.log("something went wrong!!");
  //     });
  //  }

  // }



  // function getSortedPosts(data) {
  //   if ( data) {
  //     return setSortedPosts([...data.response.results]);
  //   }
  // }

  // function getFilteredPostData(noneFiltered, posts, sortedPost) {
  //     if (noneFiltered==true) {
  //      return setResults(posts)
  //     }else{
  //       return  setResults(sortedPost)
  //     }
  //  }

  return (
    <LikesContext.Provider value={{
    likePostData, 
    setLikedPost, 
    topic, setTopic, typeOrientation, 
    setOrientationValue,value, setRengeValue, 
    color, setColor, NewOptions, setFilter}}> 
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact   render={() => <SectionMain/>}/>
          <Route path="/search/"  render={() => <SectionSearch/>} />
          <Route path="/liked-photos/"  render={() => <SectionLikedPost/>} />
          <Route path="/about/"   render={() => <SectionAbout/>}/>
        </Switch>
      </Router>
    </LikesContext.Provider>
  );
};

export default App;
