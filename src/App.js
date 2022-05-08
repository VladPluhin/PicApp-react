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
import SectionSearch from "./components/SectionSearch/SectionSearch";
import { AppContext } from "./context/context";

const App = () => {
  const [likePostData, setLikedPost] = useState([]);
  const [searchPosts, setSearchPosts] = useState([]);
  
  return (
    <AppContext.Provider value={{
      likePostData, setLikedPost,
      searchPosts, setSearchPosts}}> 
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact   render={() => <SectionMain/>}/>
          <Route path="/search/"  render={() => <SectionSearch/>} />
          <Route path="/liked-photos/"  render={() => <SectionLikedPost/>} />
          <Route path="/about/"   render={() => <SectionAbout/>}/>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
