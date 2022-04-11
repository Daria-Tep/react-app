import React from 'react';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import styles from './Friends.module.css';


const Friends = (props) => {
    let friendsElements = props.state.map(friend => <Friend img={friend.img} name={friend.name} id={friend.id} />)

    return (
        <div className={styles.friends}>
            <h2>Friends</h2>
          
            <div className={styles.wrapper}>
                {friendsElements}  
            </div>
           
        </div>
    )
}

export default Friends;