import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts";


const reducer = {
  posts: postsReducer
}

export const store = configureStore({
  reducer,
})