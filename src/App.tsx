import React, { useState } from "react";

import {Routes, Route,  Router } from 'react-router-dom';
import SectionMain from "./components/SectionMain/SectionMain";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionLikedPost from "./components/SectionLikedPost/SectionLikedPost";
import SectionSearch from "./components/SectionSearch/SectionSearch";
import { AppContext } from "./components/context/context";
import Layout from "./components/Layout/Layout";

const App = () => {
  const [likePostData, setLikedPost] = useState([]);
  const [searchPosts, setSearchPosts] = useState([]);
  
  return (
    
    <AppContext.Provider value={{
      likePostData, setLikedPost,
      searchPosts, setSearchPosts}}> 
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={ <SectionMain/>}/>
              <Route path="search" element={ < SectionSearch/>} />
              <Route path="liked-photos" element={ <SectionLikedPost/>} />
              <Route path="about" element={ <SectionAbout/>}/> 
          </Route>
        </Routes>
    </AppContext.Provider>
  );
};

export default App;
