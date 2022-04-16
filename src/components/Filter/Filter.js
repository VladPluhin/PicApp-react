import React, { useState, useEffect } from "react";
import classes from "./filter.module.scss";
import { CSSTransition } from "react-transition-group";
import Select from "../../UI/Select";
import Search from "../../UI/Search";
import Range from "../../UI/Range";
import BtnPrimary from "../../UI/BtnPrimary";

// import PropTypes from 'prop-types';

const Filter = (props) => {
  const [showed, setShowedFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [topic, setTopic]= useState('')
  const [ typeOrientation, setOrientationValue]= useState('')
  const [ value, setRengeValue]= useState('')
  const [ color, setColor]= useState('')
  const [options, setOptions]  = useState({
      query: topic,
      page: 1,
      perPage: value,
      color: color,
      orientation: typeOrientation,
  })

  const [newData, setNewData] = useState(false);
  const getShowedFilter = () => {
    return showed ? setShowedFilter(false) : setShowedFilter(true);
  };

  useEffect(() => {
    console.log(topic)
  }, [topic]);

  const getNewPosts = (e) => {
    setNewData(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.sorting}>
      <button
        className={classes.sortingclose}
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
        timeout={400}
        classNames="filter"
        unmountOnExit
      >
        <form className={classes.sortingHolder} onSubmit={handleSubmit}>
          <div className={classes.container}>
            <Search
              value={searchQuery}
              onChange={(e) => setTopic(e.target.value)}
            />
            <Range text={"Chose amount posts:"} />
            <div className={classes.orientation}>
              <BtnPrimary  linkHref={''} value={"landscape"} onClick={(e)=>{
                console.log(typeOrientation)
                setOrientationValue(e.target.value)}}/>
              <BtnPrimary linkHref={''}  value={"portrait"} onClick={(e)=>{ setOrientationValue(e.target.value)}}/>
              <BtnPrimary linkHref={''}  value={"squarish"} onClick={(e)=>{ setOrientationValue(e.target.value)}}/>
            </div>
            <div className={classes.colors}>
              <Select
              onChangeFunc={()}
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
                onClick={getNewPosts}
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
