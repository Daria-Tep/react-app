import React from "react";
import styles from "./Message.module.css";

function isRight(props) {
    if (props === 'right') {
        return styles.right
    } else {
        return styles.wrapper
    }
}


const Message = (props) => {
   
    return (
        <div className={`${isRight(props.direction)}`}>
            <div className={styles.avatar}>

            </div>
            <div className={styles.message}>
                {props.message}
            </div>
        </div>  
    )
}

export default Message;
