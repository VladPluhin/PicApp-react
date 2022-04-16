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

  return (
    <LikesContext.Provider value={{ likePostData, setLikedPost, data, setRespones,page, setPageRender, getApiReport }}>
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
