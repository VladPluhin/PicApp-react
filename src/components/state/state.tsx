import { createApi } from "unsplash-js";

export default class  State {
   
  createApi = createApi({
      accessKey: "k6MK8xSwdSo_9QcKO4iLm0r_nirfy7FUADRtpAMqhRw",
  });
  getData(page:number , setPosts:Function) {
      return this.createApi.photos
        .list({
          page: page,
        })
        .then((result) => {
          return setPosts(result); 
        })
        .catch(() => {
          console.log("something went wrong!");
        });
  }
  getSortedPostData(options:any, setSortedData:Function ) {
      return this.createApi.search.getPhotos(options)
        .then((result) => {
          console.log(options)
           setSortedData(result.response!.results);
        })
        .catch(() => {
          console.log("something went wrong!!");
        });
  }
  filterOptions= {
    orientation: [
      "portrait", "landscape","squarish"
    ],
    postsCounter:[
      "5", "15", "30"
    ],
    colors: [
      "black_and_white",
        "black",
        "white",
        "yellow",
        "orange",
        "red",
        "purple",
        "magenta",
        "green",
        "teal",
        "blue",
    ]
  }
}
