import * as React from "react";

interface AppContext {
  likePostData?: Array<any>;
  setLikedPost?:Function;
  searchPosts?: Array<any>;
  setSearchPosts?:Function;
  }

export const AppContext  = React.createContext<Partial<AppContext>>({});
