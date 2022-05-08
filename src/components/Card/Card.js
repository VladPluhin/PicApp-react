import React, { useContext, useState , useRef} from "react";
import classes from "./card.module.scss";
import { AppContext } from "../../context/context";
import Popup from "../Popup/Popup";
import { CSSTransition } from 'react-transition-group';

const Card = (props) => {
  const card = props.card;
  const { likePostData, setLikedPost } = useContext(AppContext);
  const [hovered, setHovered] = useState(false);
  const hoverOff = useRef();
  const hoverOn = useRef();
  const gethoverOff=()=> {
    setHovered(false)
    return  ()=> {hoverOff.current.removeEventLisener("mouseleave", gethoverOff)}
  }

  const gethoverOn=()=> {
    setHovered(true)
    return  ()=> {hoverOn.current.removeEventLisener("mouseenter", gethoverOn)};
  }

  const getLike = (card, arr) => {
    let selectPhoto = card ;
    let newArr = arr;
    const even = (item) => item.id === selectPhoto.id;
    if (newArr.length === 0) {
      newArr.push(selectPhoto);
      return newArr;
    } else if (!newArr.some(even)) {
      newArr.push(selectPhoto);
      return newArr;
    }
    return newArr;
  };

  const deletedPost = (card, arr) => {
    var filtered = arr.filter(function (el) {
      return el.id !== card.id;
    });
    return filtered;
  };


  return (
    <div className={classes.card}  ref={hoverOff} onMouseLeave={gethoverOff}>
      <div className={classes.cardImg}>
        <img className="img" src={card.urls.regular} alt={card.description? card.description: 'image descriptiom'}/>
      </div>
      <div className={classes.cardBody}>
        {props.likesRow ?
          <button className={classes.btnDelet} onClick={() => setLikedPost(deletedPost(props.card, likePostData))}>
            &#9747;
          </button>
         : <button className={classes.btnLike} onClick={() => setLikedPost(getLike(props.card, likePostData))} >
            &#10084;
          </button>
        }
        <time className={classes.date} dateTime={props.card.created_at ? props.card.created_at.slice(0, 10) : ""}>
          {props.card.created_at ? props.card.created_at.slice(0, 10) : ""}
        </time>
        <div className={classes.description}>
          {props.card.description ? <p> {props.card.description} </p> : " "}
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
          <Popup user= {props.card.user}/>
      </CSSTransition>

    </div>
  );
};
// Card.propTypes={
// 	photo:PropTypes.shape({
// 		 urls: PropTypes.shape({
// 			regular: PropTypes.string
// 		 }),
// 		user: PropTypes.shape({
// 			name:PropTypes.string
// 		}),
// 	})
// }
export default Card;
