import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Header from  './components/Header/Header';
import State from  './state/state';
import SectionMain from './components/sectionMain/SectionMain';
import SectionAbout from './components/sectionAbout/SectionAbout';

const App = () => {
  const state = new State;
  return(
        <Router>
          <Header/>
          <Switch>
              <Route path= "/"
                     exact
                    render = { (  )   => {
                      return <SectionMain orientation= {' '}/>
                    }}/>
              <Route path= "/about/" component={SectionAbout}/>
              <Route path= "/landscape/"
                render = { (  )   => {
                  return <SectionMain orientation= {state.landscape}/>
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
