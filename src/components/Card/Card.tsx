import React, { useContext, useState } from "react";
import classes from "./card.module.scss";
import { AppContext } from "../context/context";
import Popup from "../Popup/Popup";
import { CSSTransition } from 'react-transition-group';

interface Card{
  description: string;
  created_at: string;
  name: string;
  user: {
    username: string
  }
  urls: {
    small_s3: string
  }
}

interface CardProp {
  card: Card;
  likesRow: boolean

}

const Card:React.FC<CardProp>= ({card, likesRow}) => {
  const { likePostData, setLikedPost } = useContext(AppContext);
  const [hovered, setHovered] = useState(false);
  const hoverOff = React.createRef<HTMLInputElement>();
  const hoverOn = React.createRef<HTMLInputElement>();
  const gethoverOff=()=> {
    setHovered(false)
    return  ()=> {hoverOff.current!.removeEventListener("mouseleave", gethoverOff)}
  }
 
  const gethoverOn=()=> {
    setHovered(true)
    return  ()=> {hoverOn.current!.removeEventListener("mouseenter", gethoverOn)};
  }

  function getLike  (card:any, arr:any)    {
    let selectPhoto = card ;
    let newArr = arr;
    const even = (item:any) => item.id === selectPhoto.id;
    if (newArr.length === 0) {
      newArr.push(selectPhoto);
      return newArr;
    } else if (!newArr.some(even)) {
      newArr.push(selectPhoto);
      return newArr;
    }
    return newArr;
  };

  function deletedPost  (card:any, arr:any)  {
    var filtered = arr.filter(function (el:any) {
      return el.id !== card.id;
    });
    return filtered;
  };


  return (
    <div className={classes.card}  ref={hoverOff} onMouseLeave={gethoverOff}>
      <div className={classes.cardImg}>
        <img className="img" src={card.urls.small_s3} alt={card.description? card.description: 'image descriptiom'}/>
      </div>
      <div className={classes.cardBody}>
        { likesRow ?
          <button className={classes.btnDelet} onClick={() => setLikedPost!(deletedPost( card, likePostData))}>
            &#9747;
          </button>
         : <button className={classes.btnLike} onClick={() => setLikedPost!(getLike( card, likePostData))} >
            &#10084;
          </button>
        }
        <time className={classes.date} dateTime={ card.created_at ?  card.created_at.slice(0, 10) : ""}>
          { card.created_at ?  card.created_at.slice(0, 10) : ""}
        </time>
        <div className={classes.description}>
          { card.description ? <p> { card.description} </p> : " "}
        </div>
        <span className={classes.title}  ref={ hoverOn} onMouseOver={gethoverOn}>
          <span>Author:</span>
          {card.name ? card.name : card.user.username}
        </span>
      </div>
      <CSSTransition
        in={hovered}
        timeout={300}
        classNames="popup"
        unmountOnExit>
          <Popup user= { card.user}/>
      </CSSTransition>

    </div>
  );
};

export default Card;
