import React, {useState} from "react";
import classes from "./ui.module.scss";

const Range = ({text, onChangeFunc}) => {
  const textValue = text ? text : 'Chose amount posts:';

  const [rangeValue, setRangeValue] = useState(1)
  const handleChange = (event) => {
    setRangeValue(event.target.value)
    return  onChangeFunc(event.target.value)
  }

  return(
    <div className={classes.rangeInput}>
      <input
        type="range"
        min="1" max="30"
        value={rangeValue}
        onChange={handleChange}
        step="1"/>
        <span className={classes.rangeText}>{textValue}<span>{rangeValue}</span></span>

    </div>
  )
}

export default Range;
