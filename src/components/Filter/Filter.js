import React, { useState, useContext } from "react";
import classes from "./filter.module.scss";
import { CSSTransition } from "react-transition-group";
import Select from "../../UI/Select";
import Search from "../../UI/Search";
import Range from "../../UI/Range";
import BtnPrimary from "../../UI/BtnPrimary";
import { LikesContext } from "../../context/context";

const Filter = (props) => {
  const { setFilter, setTopic, setRengeValue, setColor, setOrientationValue,} = useContext(LikesContext);
  const [showed, setShowedFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [animateButton, setAnimateButton] = useState(false);

  const getShowedFilter = () => {
      return showed ? setShowedFilter(false) : setShowedFilter(true);
  };

  const getOrientirValue=(event)=> {
    event.preventDefault()
    setOrientationValue(event.target.text)
  }

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
        in={showed}
        timeout={200}
        classNames="filter"
        unmountOnExit
        onEnter={() => setAnimateButton(true)}
        onExited={() => setAnimateButton(false)}>
        <form className={classes.sortingHolder} onSubmit={(e)=>e.preventDefault()}>
          <div className={classes.container}>
            <Search
              value={searchQuery}
              onChangeFunc={setTopic}/>
            <Range text={"Chose amount posts:"}
              onChangeFunc={setRengeValue}/>
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
                onChangeFunc={setColor}
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
                    "blue",]}/>
            </div>
            <div className={classes.btnWrapper}>
              <BtnPrimary
                value={"Find Posts"}
                onClickFunc = {getfiltered}
                type="sybmit"/>
              <BtnPrimary
                value={"Reset filter"}
                onClickFunc = {getallPosts}
                type="sybmit"/>
            </div>
          </div>
        </form>
      </CSSTransition>
    </div>
  );
};

export default Filter;
