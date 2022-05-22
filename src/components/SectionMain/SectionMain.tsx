import React, { useEffect, createRef , useState} from "react";
import classes from "./sectionMain.module.scss";
import CardRow from "../CardRow/CardRow";
import Spinner from "../Spiner/Spiner";
import { useObserver } from "../hooks/useObserver";
import State from "../state/state";

const SectionMain:React.FC = () => {
		const state = new State();
		const lastElement =  React.createRef<HTMLDivElement>();
    const [page, setPageRender] = useState(0);
    const [data, setRespones] = useState(null);
    const [posts, setPosts] = useState([]);
    let observCallback= ()=> {
      setPageRender(page + 1)
    } 
    function getPosts(posts:Array<any>, data:any) {
			let newArr: any = []
			if (data) {
					newArr = [...posts, ...data?.response.results];
					return setPosts(newArr);
				}
		}
    
    useObserver(lastElement, data, observCallback);

    useEffect(() => {
			state.getData( page, setRespones);
    }, [page]);

		useEffect(() => {
			getPosts(posts, data)
		}, [data]);
  
  if (posts.length === 0) {
    return (
      <section className={classes.sectionMain}>
        <div className="container">
          <Spinner />
          <div ref={lastElement} style={{ height: 1 }}></div>
        </div>
      </section>
    );
  } else{
    return (
      <section className={classes.sectionMain}>
        <div className="container">
          <CardRow
            data={posts}
            likesRow={false}
          />
          <div ref={lastElement} style={{ height: 1 }}></div>
        </div>
      </section>
    );
  }
};

export default SectionMain;
