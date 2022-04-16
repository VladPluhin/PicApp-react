import React, { useState, useEffect } from "react";
import classes from "./filter.module.scss";
import { CSSTransition } from "react-transition-group";
import Select from "../../UI/Select";
import Search from "../../UI/Search";
import Range from "../../UI/Range";
import BtnPrimary from "../../UI/BtnPrimary";


const Filter = (props) => {
  const [showed, setShowedFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [topic, setTopic]= useState('')
  const [ typeOrientation, setOrientationValue]= useState('')
  const [ value, setRengeValue]= useState(10)
  const [ color, setColor]= useState('black')
  const [animateButton, setAnimateButton] = useState(false);
  const [newData, setNewData] = useState(false);
  const [options, setOptions]  = useState({
      query: topic,
      page: 1,
      perPage: value,
      color: color,
      orientation: typeOrientation,
  })
  const getShowedFilter = () => {
    return showed ? setShowedFilter(false) : setShowedFilter(true);
  };

  useEffect(() => {
    setOptions(options)
  }, [newData]);

  const getNewPosts = (event) => {
  event.preventDefault()
    if (newData === false ) {
     setNewData(true);
    }
    setNewData(false);
  };
  const getOrientirValue=(event)=> {
    event.preventDefault()
    setOrientationValue(event.target.text)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.sorting}>
      <button
        className={animateButton ?' sortingclose active' : 'sortingclose ' }
        onClick={() => {
          getShowedFilter();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <CSSTransition
        in={showed}
        timeout={200}
        classNames="filter"
        unmountOnExit
        onEnter={() => setAnimateButton(true)}
        onExited={() => setAnimateButton(false)}
      >
        <form className={classes.sortingHolder} onSubmit={handleSubmit}>
          <div className={classes.container}>
            <Search
              value={searchQuery}
              onChangeFunc={() => setTopic()}
            />
            <Range text={"Chose amount posts:"}
               onChangeFunc={() => setRengeValue()}
            />
            <div className={classes.orientation}>
              <BtnPrimary  linkHref={'#'} value={"landscape"}
                  onClickFunc={ getOrientirValue}/>
              <BtnPrimary linkHref={'#'}  value={"portrait"}
                onClickFunc={ getOrientirValue}/>
              <BtnPrimary linkHref={'#'}  value={"squarish"}
               onClickFunc={ getOrientirValue}/>
            </div>
            <div className={classes.colors}>
              <Select
                onChangeFunc={()=>{setColor()}}
                options={[
                    "black_and_white",
                    "black",
                    "white",
                    "yellow",
                    "orange",
                    "red",
                    "purple",
                    "magenta",
                    "green",
                    "teal",
                    "blue",
                  ]}/>
            </div>
            <div className={classes.btnWrapper}>
              <BtnPrimary
                value={"Find Posts"}
                onClickFunc = {getNewPosts}
                type="sybmit"
              />
            </div>
          </div>
        </form>
      </CSSTransition>
    </div>
  );
};

export default Filter;
