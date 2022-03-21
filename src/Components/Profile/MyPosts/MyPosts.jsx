import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
  
    let text = newPostElement.current.value;
    props.addPost(text);
    
  }

  return (
    <div className={styles.myPosts}>
      <h3>My posts</h3>
      <div className={styles.addPostWrapper}>
        <div className={styles.textarea}>
          <textarea ref={newPostElement}></textarea>
        </div>

        <button onClick={ addPost }>add post</button>
      </div>

      <div className={styles.posts}>
          {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
