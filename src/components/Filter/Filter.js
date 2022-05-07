import React, { useState, useContext } from "react";
import classes from "./filter.module.scss";
import { CSSTransition } from "react-transition-group";
import Search from "../../UI/Search";
import { LikesContext } from "../../context/context";
import State from '../../state/state';
import BtnPrimary from  '../../UI/BtnPrimary';

const Filter = (props) => {
  const nodeRef = React.useRef(null)
  const state= new State;
  const { setFilter, setColor,} = useContext(LikesContext);
  const [showed, setShowedFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [animateButton, setAnimateButton] = useState(false);
  const [topic, setTopic]= useState('');
  const [filter, setFilters]= useState({
    query: null,
    page:1,
    perPage: null,
    color: null,
    orientation:null
  })
 
  function  getFilterValue( event, key) {
      setFilters((prev)=> ({
        ...prev,
        key: event.target.value
      })
   
    )
    console.log(filter)
}
  const getShowedFilter = () => {
      showed ?  document.body.classList.remove('active-filter'): 
      document.body.classList.add('active-filter')
      return showed ? setShowedFilter(false) : setShowedFilter(true);
  };
  const getfiltered=(event)=> {
    event.preventDefault()
    return setFilter(false)
  }

  const getallPosts=(event)=> {
    event.preventDefault()
    return setFilter(true)
  }
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
            <h4 className={classes.title}> Search posts</h4>
            <Search
              value={searchQuery}
              onChangeFunc={setTopic}/>
            <div className={classes.orientation}>
              <h4 className={classes.title}> Posts orientation</h4>
              <select className={classes.select} onChange={(event)=>{getFilterValue(event, 'query')}}>
                  {state.filterOptions.orientation.map((item)=>{
                    return <option value={item} key={item}>{item}</option>
                })}
              </select>
            </div>
            <div className={classes.count}>
              <h4 className={classes.title}>Count posts</h4>
              <select className={classes.select} >
                  {state.filterOptions.postsCounter.map((item)=>{
                    return <option value={item} key={item}>{item}</option>
                })}
              </select>
            </div>
            <div className={classes.colors}>
              <h4 className={classes.title}> Posts colors</h4>
              <select className={classes.select} >
                  {state.filterOptions.colors.map((item)=>{
                    return <option value={item} key={item}>{item}</option>
                })}
              </select>
            </div>
            <div className={classes.btnWrapper}>
                <BtnPrimary
                value={"Find Posts"}
                onClick = {getfiltered}
                type="sybmit"/>
              <BtnPrimary
                value={"Reset filter"}
                onClick = {getallPosts}
                type="sybmit"/>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Filter;
