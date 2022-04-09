import React from "react";
import { addPostCreator, updateNewPostTextCreator  } from "../../../Redux/profile-reducer.js";
import MyPosts from "./MyPosts.jsx";


const MyPostsContainer = (props) => {
 let state = props.store.getState().profilePage;

 let addPost = () => { 
   props.store.dispatch(addPostCreator()); 
   props.store.dispatch(updateNewPostTextCreator(''))
}
 
let changePostText = (text) => {
  props.store.dispatch(updateNewPostTextCreator(text))
}


  return (<MyPosts addPost={ addPost } updateTextPost={ changePostText } state={ state } /> );
};

export default MyPostsContainer;
