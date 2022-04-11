import React from 'react';
import classes from './sectionLikedPost.module.scss';
import CardRow from "../CardRow/CardRow";

const SectionLikedPost = (props) => {

    return (
        <section  className = {classes.sectionLiked}>
             <div className ='container'>
                  <CardRow
                        likesRow={true}
                        likePostData={props.likePostData}
                        setLikedPost= {props.setLikedPost}
                    />
            </div>
        </section>
    )
}
export default SectionLikedPost;
