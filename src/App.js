import React, { useState} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Header from  './components/Header/Header';
import SectionMain from './components/SectionMain/SectionMain';
import SectionAbout from './components/SectionAbout/SectionAbout';
import SectionLikedPost from './components/SectionLikedPost/SectionLikedPost';

const App = () => {
  const [likePostData, setLikedPost]= useState([]);
  return(
      <Router >
          <Header/>
          <Switch>
              <Route path= "/"
                exact
                render = {()=> {
                  return <SectionMain
                      likePostData={likePostData}
                      setLikedPost= {setLikedPost}/>
                }}/>
              <Route path= "/about/" component={SectionAbout}/>
              <Route path='/liked-photos/'
                    render = {()=> {
                    return <SectionLikedPost
                      likePostData={likePostData}
                      setLikedPost= {setLikedPost}/>
                }}/>
               <Route
                    render = {()=> {
                      return <h1>Page not Found</h1>
                    }}/>
          </Switch>
          {/* <Route path= "/contact/" component={ContactPage}/>
          <Route path= "/product/" component={ProductPage}/> */}
        </Router >
  )
}

export default App;
