import React, { useState, useContext } from "react";
import classes from "./filter.module.scss";
import { CSSTransition } from "react-transition-group";
import State from "../state/state";
import BtnPrimary from  '../UI/BtnPrimary';
import { AppContext } from "../../components/context/context";


const Filter: React.FC = () => {
  const state = new State();
  const nodeRef = React.useRef(null)
  const [showed, setShowedFilter] = useState(false);
  const { searchPosts, setSearchPosts } = useContext(AppContext);
  const [animateButton, setAnimateButton] = useState(false);
  const [filter, setFilter]= useState({
    query: 'space',
    page: 1,
    perPage: 10,
    color: 'black',
    orientation: 'portrait'
  })
 
  const getFilterValue=( key: string, value:string) => {
    const newfilterValue: any = filter;
    Object.keys(newfilterValue).map((item)=> {
        if(item === key ) {
          newfilterValue[item] = value;
        }
      }
    )
   return setFilter(newfilterValue);
  } 
  
  function getPosts() {
    return state.getSortedPostData( filter, setSearchPosts!)
   } 
 
  const getShowedFilter = () => {
      return showed ? setShowedFilter( false) : setShowedFilter(true);
  };
 
  
  return (
    <div className={classes.sorting}>
      <button
        className={animateButton ?' sortingclose active' : 'sortingclose ' }
        onClick={() => {getShowedFilter()}}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <CSSTransition
        nodeRef={nodeRef} 
        in={showed}
        timeout={200}
        classNames="filter"
        unmountOnExit
        onEnter={() => setAnimateButton(true)}
        onExited={() => setAnimateButton(false)}>
        <div className={classes.sortingHolder} >
          <div className={classes.container}>
            <div className={classes.scrollwrapper}>
              <h4 className={classes.title}> Search posts</h4>
              <input type="text"  className={classes.search} placeholder="lets find posts.." onChange={(event)=>{getFilterValue('query', event.target.value)}} />
              <div className={classes.orientation}>
                <h4 className={classes.title}> Posts orientation</h4>
                <select className={classes.select} onChange={(event)=>{getFilterValue('orientation', event.target.value)}}>
                    {state.filterOptions.orientation.map((item)=>{
                      return <option value={item} key={item}>{item}</option>
                  })}
                </select>
              </div>
              <div className={classes.count}>
                <h4 className={classes.title}>Count posts</h4>
                <select className={classes.select}  onChange={(event) => {getFilterValue('perPage', event.target.value)}}>
                    {state.filterOptions.postsCounter.map((item)=>{
                      return <option value={item} key={item}>{item}</option>
                  })}
                </select>
              </div>
              <div className={classes.colors}>
                <h4 className={classes.title}> Posts colors</h4>
                <select className={classes.select}  onChange={(event)=>{getFilterValue('color', event.target.value)}}>
                    {state.filterOptions.colors.map((item)=>{
                      return <option value={item} key={item}>{item}</option>
                  })}
                </select>
              </div>
              <div className={classes.btnWrapper}>
                  <BtnPrimary
                   value={"Find Posts"}
                    onHandleFunction =  {() => {getShowedFilter()
                      getPosts()}}
                  type="sybmit"/>
                <BtnPrimary
                  value={"Reset filter"}
                  type="sybmit"/>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Filter;
