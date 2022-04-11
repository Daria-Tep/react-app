import React from "react";
import { addPostCreator, updateNewPostTextCreator } from "../../../Redux/profile-reducer.js";
import StoreContext from "../../../StoreContext.js";
import MyPosts from "./MyPosts.jsx";

const MyPostsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      { (store) => { 
       
        let state = store.getState().profilePage;

        let addPost = () => {
          store.dispatch(addPostCreator());
          store.dispatch(updateNewPostTextCreator(""));
        };

        let changePostText = (text) => {
          store.dispatch(updateNewPostTextCreator(text));
        };

      return <MyPosts
          addPost={addPost}
          updateTextPost={changePostText}
          state={state}
        />;
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
