import React, {Fragment, useEffect, useState } from "react";
import Card from '../Card/Card';
import classes from  './CardRow.module.scss';
import Pagination from '../pagination/pagination';
import State from "../../state/state";

const CardRow = () => {
  const state = new State;
  const apiData= state.createApi;
  const items= 8;
  const [data, setPhotosResponse] = useState(null);
  const [count, PageRender] = useState(1);


  const getApiReport = (count,items) => {
    return apiData.photos.list({ 
      page: count,
      perPage: items,
    })
    .then(result => {
      setPhotosResponse(result);
    })
    .catch(() => {
      console.log("something went wrong!");
    });
  }
  
  useEffect(() => {
    getApiReport(count,items);
   }, [count]);
 
  if (data === null) {
    return <div>Loading...</div>;
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
              <Card photo={photo} />
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
