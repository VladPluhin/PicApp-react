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
   }
   GetUser(author ,url, creatDate) {
    this.author = author;
    this.url = url;
    this.creatDate=creatDate 
  }

}
