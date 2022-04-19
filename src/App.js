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
  const [sortPosts, setAllSortPosts] = useState();
  const [page, setPageRender] = useState(0);
  const [allposts, setAllPosts] = useState([]);
  const [nonefiltered, setFilter] = useState(true);
  const [topic, setTopic]= useState('')
  const [typeOrientation, setOrientationValue]= useState('')
  const [value, setRengeValue]= useState(10)
  const [color, setColor]= useState('black')
  const [resetFilter, setResetFilter] = useState(false);
  function NewOptions (oldquery, oldperPage, oldcolor, oldtypeOrientation) {
    this.query = oldquery;
    this.perPage = oldperPage;
    this.color = oldcolor;
    if(oldtypeOrientation.length > 0) {
      this.orientation = oldtypeOrientation
    }
  }
  function getSortedPostData(setAllSortPosts) {
      const newobj  = {...new NewOptions(topic, value, color, typeOrientation)}
      return state.createApi.search.getPhotos(newobj)
      .then((result) => {
        return setAllSortPosts(...result.response.results);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
   }
  function getPostData(setRespones) {
    return state.createApi.photos
    .list({
      per_page: 10,
      page: page,
    })
    .then((result) => {
      let newArr = [...allposts,...result.response.results]
       console.log(newArr)
      return  setAllPosts(newArr);
    })
    .catch(() => {
      console.log("something went wrong!");
    });
  }

  function getCardData(allposts, data) {

    if (data)  {
      let newArr = [...allposts,...data.response.results]

      return setAllPosts(newArr);
    }
  }

  function getSortedCardData(allposts, data) {
     if (data)  {
      let newArr = [...allposts]
      return newArr;
    }
  }
function getDataForCards(allposts, data) {
   let a = getCardData(allposts, data)
   console.log(a)
    if(nonefiltered===true) {
     return setAllPosts(getCardData(allposts, data))
    }else if(nonefiltered===true) {
      let a = getSortedCardData(allposts, data)
      return setAllPosts(getSortedCardData(allposts, data))
    }
  }
  return (
     <LikesContext.Provider value={{ state, resetFilter, likePostData, setLikedPost, data, setRespones, page, setPageRender, getPostData, getCardData  , allposts, setAllPosts ,topic, setTopic, typeOrientation, setOrientationValue,value, setRengeValue, color, setColor, NewOptions, nonefiltered, setFilter, getDataForCards, getSortedPostData, getDataForCards}}>
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
