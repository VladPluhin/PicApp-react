import React, { useEffect, useRef, useContext, useState } from "react";
import classes from "./sectionMain.module.scss";
import CardRow from "../CardRow/CardRow";
import Spinner from "../Spiner/Spiner";
import { useObserver } from "../../hooks/useObserver";
import BtnPrimary from "../../UI/BtnPrimary";
import { LikesContext } from "../../context/context";

const SectionMain = () => {
    const { state } = useContext(LikesContext);
    const lastElement = useRef();
    const [data, setRespones] = useState();
    const [soRtPospts, setsoRtPospts] = useState()
    const [posts, setPosts] = useState({
        sortedPosts: [],
        posts: []
    });
    const [page, setPageRender] = useState(0);

    function getdatas(event) {
        event.preventDefault()
        getData(1)
        getSortedPostData()
        let newArr = posts;

        if (data || soRtPospts) {
            newArr.posts = [...posts.posts, ...data.response.results];
            newArr.sortedPosts = [...soRtPospts.response.results];
            console.log(newArr)

        }

        return setPosts(newArr);
    }


    function getData(page) {
        return state.createApi.photos
            .list({
                page: page,
            })
            .then((result) => {
                return setRespones(result);
            })
            .catch(() => {
                console.log("something went wrong!");
                return []
            });
    }

    function getSortedPostData() {
        return state.createApi.search.getPhotos({
                query: 'cat',
                page: 1,
                perPage: 10,
                color: 'green',
                orientation: 'portrait',
            })
            .then((result) => {
                return setsoRtPospts(result);
            })
            .catch(() => {
                console.log("something went wrong!");
                return []
            });
    }
    // useObserver(lastElement, data, () => {
    //  setPageRender(page + 1);
    // });

    // useEffect(() => {
    //    getData( page);
    // }, [page ]);







    // useEffect(() => {
    //   getPosts(posts, data)
    // }, [data]);



    // if (posts.length === 0) {
    //   return (
    //     <section className={classes.sectionMain}>
    //       <div className="container">
    //         <Spinner />
    //         <div ref={lastElement} style={{ height: 1 }}></div>
    //       </div>
    //     </section>
    //   );
    // } else{
    //   return (
    //     <section className={classes.sectionMain}>
    //       <div className="container">
    //         <CardRow
    //           data={resuls}
    //           likesRow={false}
    //         />
    //         <div ref={lastElement} style={{ height: 1 }}></div>
    //       </div>
    //     </section>
    //   );
    // }
    return ( <
        BtnPrimary value = { "Find Posts" }
        handleclick = { getdatas }
        type = "sybmit" / >
    )
};

export default SectionMain;