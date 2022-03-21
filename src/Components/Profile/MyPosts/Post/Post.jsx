import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvGAtXsMuarSsgq3TfL0KW52ZiWPJZO5GXA&usqp=CAU" alt="avatar" />
            <span>{props.message}</span>
         <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;