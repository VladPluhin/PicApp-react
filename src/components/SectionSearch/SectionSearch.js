import React, {useState} from "react";
import classes from "./sectionSearch.module.scss";
import CardRow from "../CardRow/CardRow";
import Spinner from "../Spiner/Spiner";
import Filter from "../Filter/Filter";
import { LikesContext } from "../../context/context";
import State from "../../state/state";
const SectionSearch = () => {
  const state = new State();
  const [data, setRespones] = useState();
  const [posts, setPosts] = useState([]);
  const [filter, setFilters]= useState({
    landscape: null,
    portrait:null,
    squarish: null
})
    
    if (posts.length === 0) {
      return (
        <section className={classes.sectionSearch}>
          <div className="container">
            <h2>Let`s find posts...</h2>
            <Filter/>
          </div>
        </section>
      );
    } else{
      return (
        <section className={classes.sectionSearch}>
          <div className="container">
            <Filter/>
            <CardRow
              data={posts}
              likesRow={false}
            />
          </div>
        </section>
      );
    }
};

export default SectionSearch;
