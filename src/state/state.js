import { createApi } from "unsplash-js";

export default class  State {
    landscape = `'landscape'`;
    createApi = createApi({
        accessKey: "k6MK8xSwdSo_9QcKO4iLm0r_nirfy7FUADRtpAMqhRw",
        headers: { 'X-Custom-Header': 'foo' }
    });
    getData = (page) => {
     return this.createApi.photos
        .list({
            page: 7,
        })
        .then((data) => {
            return  data
        })
        .catch(() => {
            console.log("something went wrong!");
            return [ ]
        });

    }
    getSortedPostData=(options) =>{
        return this.createApi.search.getPhotos({
        query: 'cat',
        page: 1,
        perPage: 10,
        color: 'green',
        orientation: 'portrait',})
      .then((result) => {
         return result
      })
      .catch(() => {
        console.log("something went wrong!!");
         return [ ]
      });
  }
}
