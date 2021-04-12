import { createApi } from "unsplash-js";


export default class  State {
    landscape = `'landscape'`;
    _arrayPreferItem= [];

    createApi = createApi({
        accessKey: "k6MK8xSwdSo_9QcKO4iLm0r_nirfy7FUADRtpAMqhRw",
        headers: { 'X-Custom-Header': 'foo' }
    });
 
    getPrevPage(item,count,func) {
      if(item > 1){
        return func(count - 1);
      }
    }

    getNextPage(count, func) {
      return func(count + 1);
    }
      
    hasPrev (countItem){
      return countItem > 1;
    }
    
    pageAmount (totalItem,itemAmount)  {
      return Math.ceil(totalItem / itemAmount )
    }

   getApiReport(count,items, func) {
      return this.createApi.photos.list({ 
        page: count,
        perPage: items,
      }) 
     
      .then(result => {
        func(result);
      })
      
      .catch(() => {
        console.log("something went wrong!");
      });
   };

   GetPreferPhotos(author ,url) {
      this.author = author;
      this.url = url;
    }
    
    getRenderCards(funct, seletcRow) {
      switch (seletcRow){
          case false:
          seletcRow = true;
          console.log(0)
          return funct(seletcRow);
          break;
          case true:
          seletcRow = false;
          console.log(1)
          return funct(seletcRow);
          break;
      }
    }
}
