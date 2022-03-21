import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Friend.module.css';


const Friend = (props) => {
   
    return (
        <div className={styles.friend}>
            
            <NavLink to={`/dialogs/${props.id}`} className={styles.link} >
               <div className={styles.photoContainer}>
                <img src={props.img} className={styles.friendPhoto} />
               </div>
               
               <span>{props.name}</span>
            </NavLink>

             
        </div>
    )
}

export default Friend;