import React, {useState} from "react";
import classes from "./ui.module.scss";

const Range = (props) => {
  const text = props.text? props.text : 'Chose amount posts:';

  const [rangeValue, setRangeValue] = useState(1)
   const handleChange=(event)=> {
    setRangeValue(event.target.value)
  }
  return(
    <div className={classes.rangeInput}>
      <input
        type="range"
        min="1" max="10"
        value={rangeValue}
        onChange={handleChange}
        step="1"/>
        <span className={classes.rangeText}>{text}</span>
        <span>{rangeValue}</span>
    </div>
  )
}

export default Range;
