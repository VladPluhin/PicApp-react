import React, { useState, useEffect, useContext } from "react";
import classes from "./filter.module.scss";
import { CSSTransition } from "react-transition-group";
import Select from "../../UI/Select";
import Search from "../../UI/Search";
import Range from "../../UI/Range";
import BtnPrimary from "../../UI/BtnPrimary";
import { LikesContext } from "../../context/context";

const Filter = (props) => {
  const { state, switcherPost, setSwitcher, getResetFilter } =useContext(LikesContext);
  const [showed, setShowedFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [topic, setTopic]= useState('')
  const [typeOrientation, setOrientationValue]= useState('')
  const [value, setRengeValue]= useState(10)
  const [color, setColor]= useState('black')
  const [animateButton, setAnimateButton] = useState(false);
  function NewOptions (oldquery, oldperPage, oldcolor, oldtypeOrientation) {
    this.query = oldquery;
    this.perPage = oldperPage;
    this.color = oldcolor;
    if(oldtypeOrientation.length > 0) {
      this.orientation = oldtypeOrientation
    }
  }

  const getShowedFilter = () => {
      return showed ? setShowedFilter(false) : setShowedFilter(true);
  };

  const getNewPosts = (event) => {
    event.preventDefault()

    setSwitcher(false)
    console.log(switcherPost)
    const newobj  = {...new NewOptions(topic, value, color, typeOrientation)}
    return state.createApi.search.getPhotos(newobj)
      .then((result) => {
       props.getSorting(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }

  const getOrientirValue=(event)=> {
    event.preventDefault()
    setOrientationValue(event.target.text)
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
                onClickFunc = {getNewPosts}
                type="sybmit"/>
              <BtnPrimary
              value={"Reset filter"}
              onClickFunc = {(event)=>{
                event.preventDefault()
                return  setSwitcher(true)
              }}
              type="sybmit"/>
            </div>
          </div>
        </form>
      </CSSTransition>
    </div>
  );
};

export default Filter;
