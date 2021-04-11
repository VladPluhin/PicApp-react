import React, { useEffect, useState } from "react";
import Card from '../Card/Card';
import classes from  './CardRow.module.scss';
import Pagination from '../pagination/Pagination';
import State from "../../state/state";
import Spinner from '../spiner/spiner';

const CardRow  = (props) => { 
  const state = new State;
  const apiData= state.createApi;
  const items= 8;
  const [data, setPhotosResponse] = useState(null);
  const [count, PageRender] = useState(1);
  const [photosArr, setPreferPhotos] = useState([]);
 
  const getLike =(author ,url,arr) => {
    let selectPhoto = new GetUser(author, url);
    const even=(elem) => elem.url == url;
    
    if(arr.some(even) !=true ){
      arr.push(selectPhoto);
    } else {
      arr = arr.filter(elem =>  elem.url !== url)
    }
    
    return(arr)
  }
 
  function GetUser(author ,url) {
    this.author = author;
    this.url = url;
  }

  useEffect(() => {
    state.getApiReport(count, items, setPhotosResponse);
   }, [count]);
 
   if (data === null) {
    return<Spinner/>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <div className={classes.cardRow} >
          {data.response.results.map(photo => (
            <div key={photo.id} className = {classes.cardCol}>
              <Card photo={photo}
                    getLike={ () => setPreferPhotos(getLike(photo.user.name, photo.urls.regular, photosArr ))}
                  />
            </div>
          ))}
             <Pagination 
                      itemAmount= {items}
                      totalItem= {data.response.total}
                      curentPage= {count}
                      PageRender= {PageRender}
                      onNextPage= { () => state.getNextPage(count,PageRender) }
                      onPrevPage= { () => state.getPrevPage(items,count,PageRender) }
                      />
      </div>
    );
  }
}
export default CardRow;
