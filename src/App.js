import React, { useState } from "react";
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
  const [switcherPost, setSwitcher] = useState(true);

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

  const getResetFilter = (event)=> {
    event.preventDefault()
    setSwitcher(true)
  }

  function getPosts(posts, data) {

    if (data && switcherPost ===true) {

      let newArr = [...posts, ...data.response.results];
      return setPosts(newArr);
    }
    else if(data && !switcherPost) {
      let newArr = [];
      newArr = [...data.response.results];
      console.log(newArr)
      return setPosts(newArr);
    }
  }

  return (
    <LikesContext.Provider value={{ state, likePostData, setLikedPost, data, setRespones,page, setPageRender, getApiReport, getPosts , posts, setPosts, switcherPost, setSwitcher, getResetFilter}}>
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
