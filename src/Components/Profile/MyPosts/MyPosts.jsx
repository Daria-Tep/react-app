import React from "react";
import { addPostCreator, updateNewPostTextCreator  } from "../../../Redux/profile-reducer.js";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

  let postsElements = props.state.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));


 let onAddPost = () => { 
   props.addPost();
}
 
let changeTextPost = (event) => {
  let text = event.target.value;
  props.updateTextPost(text)
}


  return (
    <div className={styles.myPosts}>
      <h3>My posts</h3>
      <div className={styles.addPostWrapper}>
        
        <div className={styles.textarea}>
          <textarea onChange={changeTextPost} value={props.state.newPostText} />
        </div>

        <button onClick={ onAddPost }>add post</button>
      </div>

      <div className={styles.posts}>
          {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
