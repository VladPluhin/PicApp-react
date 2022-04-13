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
const App = () => {
  const [likePostData, setLikedPost] = useState([]);
  return (
    <LikesContext.Provider value={{ likePostData, setLikedPost }}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={SectionMain} />
          <Route path="/about/" component={SectionAbout} />
          <Route path="/liked-photos/" component={SectionLikedPost} />
          <Route
            render={() => {
              return <h1>Page not Found</h1>;
            }}
          />
        </Switch>
        {/* <Route path= "/contact/" component={ContactPage}/>
          <Route path= "/product/" component={ProductPage}/> */}
      </Router>
    </LikesContext.Provider>
  );
};

export default App;
