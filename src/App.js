import React, { useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from  './components/Header/Header';
import State from  './state/state';
import SectionMain from './components/sectionMain/SectionMain';
import SectionAbout from './components/sectionAbout/SectionAbout';

const App = () => {
  const state = new State;
  const [pageData, setNewPage  ]= useState(false);

  return(
        <Router>
          <Header changeCardRows={ () => state.getRenderCards(setNewPage, pageData)}/>
          <Switch>
              <Route path= "/"
                     exact
                      render = { (  )   => {
                      return <SectionMain orientation= {' '}/>
                    }}/>
              <Route path= "/about/" component={SectionAbout}/>
              <Route path='/liked-photos/' 
                    render = { (  )   => {
                    return <SectionMain cardsPrefer= {pageData}/>
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
